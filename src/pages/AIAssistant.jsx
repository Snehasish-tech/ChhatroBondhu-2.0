import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User, Sparkles, BookOpen, Calculator, Lightbulb, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// interface removed

const quickPrompts = [
  { icon: BookOpen, text: "Explain a concept", prompt: "Can you explain the concept of photosynthesis in simple terms?" },
  { icon: Calculator, text: "Solve a problem", prompt: "Help me solve this math problem step by step" },
  { icon: Lightbulb, text: "Study tips", prompt: "What are effective study techniques for exams?" },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your AI Study Assistant. I can help you understand concepts, solve problems, create study plans, and answer your questions. What would you like to learn today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
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

    // Simulate AI response (replace with actual AI integration)
    setTimeout(() => {
      const responses = [
        "That's a great question! Let me break this down for you...",
        "Based on your question, here's what you need to know...",
        "I'd be happy to help with that! Here's an explanation...",
        "Good thinking! Let me provide some insights on this topic...",
      ];
      
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `${responses[Math.floor(Math.random() * responses.length)]}\n\nThis is a simulated response. To get real AI responses, you would need to connect to an AI service. The AI can help you with:\n\n• Explaining complex topics\n• Solving math problems step by step\n• Creating study schedules\n• Providing exam preparation tips\n• Answering subject-specific questions`,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Bot className="h-4 w-4" />
            AI-Powered Learning
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            AI Study Assistant
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            Get instant help with your studies. Ask questions, solve problems, and learn concepts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Quick Prompts */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {quickPrompts.map((prompt, index) => {
              const Icon = prompt.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSend(prompt.prompt)}
                  className="gap-2"
                  disabled={isLoading}
                >
                  <Icon className="h-4 w-4" />
                  {prompt.text}
                </Button>
              );
            })}
          </div>

          {/* Chat Container */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="border-b border-border/50 pb-4">
              <CardTitle className="flex items-center gap-2 text-lg">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                Study Chat
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Messages */}
              <ScrollArea className="h-[400px] p-4" ref={scrollRef}>
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3",
                        message.role === "user" ? "flex-row-reverse" : "flex-row"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        )}
                      >
                        {message.role === "user" ? (
                          <User className="h-4 w-4" />
                        ) : (
                          <Bot className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "rounded-2xl px-4 py-2 max-w-[80%]",
                          message.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
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

              {/* Input */}
              <div className="border-t border-border/50 p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything about your studies..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}