# AI Assistant Setup Guide

This guide will help you configure live AI integration for your AI Study Assistant.

## Quick Setup (Recommended: Google Gemini - Free)

### 1. Get Google Gemini API Key (FREE)

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy your API key

### 2. Configure Your Project

1. Create a `.env` file in your project root:
```bash
# Copy from example
cp .env.example .env
```

2. Open `.env` file and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
VITE_AI_PROVIDER=gemini
```

3. Restart your development server:
```bash
npm run dev
```

**That's it!** Your AI Assistant is now live! 🎉

---

## Alternative Options

### Option 1: OpenAI (ChatGPT) - Paid

1. Get API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Update `.env`:
```env
VITE_OPENAI_API_KEY=sk-...
VITE_AI_PROVIDER=openai
```

**Note:** Requires billing setup (~$0.002 per message)

### Option 2: Groq - Fast & Free

1. Get API key from [Groq Console](https://console.groq.com/keys)
2. Update `.env`:
```env
VITE_GROQ_API_KEY=gsk_...
VITE_AI_PROVIDER=groq
```

**Note:** Fast responses, good for development

---

## Troubleshooting

### "AI not configured" message?
- Make sure `.env` file exists in project root
- Check that API key is correct
- Restart dev server after changing `.env`

### API errors?
- Verify your API key is valid
- Check internet connection
- Some APIs require billing setup (OpenAI)

### Rate limits?
- Gemini: 60 requests/minute (free)
- Groq: Very generous limits
- OpenAI: Depends on your plan

---

## Security Notes

⚠️ **Important:**
- Never commit `.env` file to git
- Keep your API keys private
- `.env` is already in `.gitignore`

---

## Cost Comparison

| Provider | Free Tier | Cost per 1000 messages |
|----------|-----------|------------------------|
| **Gemini** | ✅ Yes | Free |
| **Groq** | ✅ Yes | Free |
| **OpenAI** | ❌ No | ~$2 |

**Recommendation:** Start with Gemini (free & good quality) 🎯

---

## Need Help?

- Check `.env.example` for configuration template
- Verify API key format matches provider
- Test API key directly on provider's website first
