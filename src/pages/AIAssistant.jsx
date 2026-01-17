import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Sparkles, BookOpen, Calculator, Lightbulb, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAIResponse, isAIConfigured, getAIProviderName } from "@/lib/aiService";
import { Alert, AlertDescription } from "@/components/ui/alert";

const quickPrompts = [
  { icon: BookOpen, text: "Explain a concept", prompt: "Can you explain the concept of photosynthesis in simple terms?" },
  { icon: Calculator, text: "Solve a problem", prompt: "Help me solve this math problem step by step" },
  { icon: Lightbulb, text: "Study tips", prompt: "What are effective study techniques for exams?" },
];

export default function AIAssistant() {
  const aiConfigured = isAIConfigured();
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "assistant",
      content: aiConfigured 
        ? `Hi! I'm your AI Study Assistant powered by ${getAIProviderName()}. I can help you understand concepts, solve problems, create study plans, and answer your questions. What would you like to learn today?`
        : "Hi! I'm your AI Study Assistant. To enable live AI responses, please configure your API key in the .env file. Check .env.example for instructions.",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Auto scroll to bottom when new messages arrive
    if (scrollRef.current) {
      const scrollElement = scrollRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  const handleSend = async (messageText) => {
    const text = messageText || input;
    if (!text.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Get AI response from configured provider
      const result = await getAIResponse([...messages, userMessage]);
      
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: result.content,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Sorry, I encountered an error while processing your request. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-12 text-center space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary/15 via-purple-500/15 to-pink-500/15 border border-primary/30 px-6 py-3 text-sm font-semibold backdrop-blur-sm mb-6">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-purple-600">
              <Bot className="h-3 w-3 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">AI-Powered Learning Assistant</span>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="text-foreground">Your Personal</span>
              <br />
              <span className="inline-block mt-2 bg-gradient-to-r from-primary via-purple-500 to-pink-600 bg-clip-text text-transparent">AI Study Mentor</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Get instant help with your studies. Ask questions, solve problems, understand complex concepts, and create personalized learning plans.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* AI Configuration Alert */}
          {!aiConfigured && (
            <Alert className="mb-4 border-amber-500/50 bg-amber-500/10">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <AlertDescription className="text-sm">
                <strong>AI not configured.</strong> To enable live AI responses, create a <code className="px-1 py-0.5 bg-muted rounded">.env</code> file and add your API key. 
                Check <code className="px-1 py-0.5 bg-muted rounded">.env.example</code> for setup instructions.
              </AlertDescription>
            </Alert>
          )}
          
          {/* Quick Prompts */}
          <div className="space-y-4 mb-8">
            <p className="text-center text-sm font-semibold text-muted-foreground">Quick prompts to get started:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickPrompts.map((prompt, index) => {
                const Icon = prompt.icon;
                const gradients = [
                  "from-purple-500 to-pink-600",
                  "from-blue-500 to-cyan-600",
                  "from-yellow-500 to-orange-600"
                ];
                return (
                  <Button
                    key={index}
                    onClick={() => handleSend(prompt.prompt)}
                    disabled={isLoading}
                    className={`h-auto py-4 px-4 flex flex-col items-start gap-3 bg-gradient-to-br ${gradients[index]} text-white hover:shadow-lg hover:shadow-current/20 transition-all border-0`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-semibold text-sm text-left">{prompt.text}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Chat Container */}
          <Card className="border border-primary/20 bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-2xl shadow-2xl shadow-primary/10">
            <CardHeader className="border-b border-primary/10 pb-6 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5">
              <CardTitle className="flex items-center gap-3 text-xl font-bold">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-pink-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-primary to-pink-600 bg-clip-text text-transparent">Smart Study Chat</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <div ref={scrollRef}>
                <ScrollArea className="h-[400px] p-4">
                  <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3 animate-fade-in",
                        message.role === "user" ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-bold text-white",
                          message.role === "user"
                            ? "bg-gradient-to-br from-primary to-pink-600"
                            : "bg-gradient-to-br from-purple-500 to-blue-600"
                        )}
                      >
                        {message.role === "user" ? (
                          <User className="h-5 w-5" />
                        ) : (
                          <Bot className="h-5 w-5" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "rounded-3xl px-5 py-3 max-w-[80%] text-sm leading-relaxed",
                          message.role === "user"
                            ? "bg-gradient-to-br from-primary to-pink-600 text-white shadow-lg shadow-primary/20"
                            : "bg-gradient-to-br from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 text-foreground border border-border/50"
                        )}
                      >
                        <p className="whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="rounded-2xl px-4 py-2 bg-muted">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              </div>

              {/* Input */}
              <div className="border-t border-primary/10 p-5 bg-gradient-to-r from-primary/2 via-purple-500/2 to-pink-500/2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-3"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything about your studies..."
                    className="flex-1 h-12 px-5 border-primary/20 bg-card focus:border-primary/50 rounded-xl"
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    disabled={isLoading || !input.trim()}
                    className="h-12 w-12 bg-gradient-to-br from-primary to-pink-600 hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <Send className="h-5 w-5" />
                    )}
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}