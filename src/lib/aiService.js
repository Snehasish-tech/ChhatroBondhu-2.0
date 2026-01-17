// AI Service Integration
// Supports: OpenAI, Google Gemini, Groq

const AI_PROVIDER = import.meta.env.VITE_AI_PROVIDER || 'gemini';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// OpenAI API call
async function callOpenAI(messages) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      temperature: 0.7,
      max_tokens: 1000
    })
  });

  if (!response.ok) {
    throw new Error('OpenAI API request failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Google Gemini API call
async function callGemini(messages) {
  console.log('🔑 Gemini API Key:', GEMINI_API_KEY ? 'Present (length: ' + GEMINI_API_KEY.length + ')' : 'Missing');
  
  const userMessage = messages[messages.length - 1].content;
  const conversationHistory = messages.slice(0, -1).map(msg => 
    `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
  ).join('\n');

  const prompt = conversationHistory 
    ? `${conversationHistory}\n\nUser: ${userMessage}`
    : userMessage;

  console.log('📤 Sending request to Gemini...');
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  console.log('🌐 URL:', url.replace(GEMINI_API_KEY, 'API_KEY_HIDDEN'));
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: `You are a helpful AI study assistant. Help students learn and understand concepts clearly.\n\n${prompt}`
        }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      }
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Gemini API Error:', response.status, errorData);
    throw new Error(`Gemini API request failed: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
  }

  const data = await response.json();
  
  if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
    console.error('Unexpected Gemini response:', data);
    throw new Error('Invalid response from Gemini API');
  }
  
  return data.candidates[0].content.parts[0].text;
}

// Groq API call (Fast and Free)
async function callGroq(messages) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${GROQ_API_KEY}`
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: messages.map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      temperature: 0.7,
      max_tokens: 1000
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Groq API Error:', response.status, errorData);
    throw new Error(`Groq API request failed: ${response.status} - ${errorData.error?.message || JSON.stringify(errorData)}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// Main function to get AI response
export async function getAIResponse(messages) {
  try {
    let response;

    // Check if AI is configured
    if (!isAIConfigured()) {
      return {
        success: false,
        error: 'AI not configured',
        content: 'Please configure your API key in .env file to enable AI responses. Check AI_SETUP.md for instructions.'
      };
    }

    switch (AI_PROVIDER) {
      case 'openai':
        response = await callOpenAI(messages);
        break;

      case 'gemini':
        response = await callGemini(messages);
        break;

      case 'groq':
        response = await callGroq(messages);
        break;

      default:
        throw new Error('Invalid AI provider configured');
    }

    return {
      success: true,
      content: response
    };

  } catch (error) {
    console.error('AI API Error:', error);
    
    // Provide helpful fallback message
    const userMessage = messages[messages.length - 1].content.toLowerCase();
    let fallbackResponse = "I'm having trouble connecting to the AI service right now. ";
    
    // Provide some basic help based on question
    if (userMessage.includes('what') || userMessage.includes('explain')) {
      fallbackResponse += "To explain concepts, I need the AI connection to be working. Please check your API key configuration.";
    } else if (userMessage.includes('how')) {
      fallbackResponse += "For detailed steps and guidance, I need the AI connection. Please verify your API key.";
    } else {
      fallbackResponse += "Please check:\n• Your API key is valid (try generating a new one)\n• The key has no restrictions at https://aistudio.google.com/app/apikey\n• Your internet connection is working";
    }
    
    return {
      success: false,
      error: error.message,
      content: fallbackResponse
    };
  }
}

// Check if AI is configured
export function isAIConfigured() {
  switch (AI_PROVIDER) {
    case 'openai':
      return !!OPENAI_API_KEY;
    case 'gemini':
      return !!GEMINI_API_KEY;
    case 'groq':
      return !!GROQ_API_KEY;
    default:
      return false;
  }
}

export function getAIProviderName() {
  const providers = {
    'openai': 'OpenAI (ChatGPT)',
    'gemini': 'Google Gemini',
    'groq': 'Groq'
  };
  return providers[AI_PROVIDER] || 'Unknown';
}
