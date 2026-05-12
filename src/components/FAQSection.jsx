import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight, HelpCircle, Sparkles } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is ChhatroBondhu free to use?",
      answer: "Yes! ChhatroBondhu offers a generous free tier with access to core features including AI study assistant, flashcards, and basic focus mode. Premium features are available with our Pro subscription starting at just $9.99/month.",
    },
    {
      question: "How does the AI Study Assistant work?",
      answer: "Our AI Study Assistant uses advanced language models to understand your questions and provide detailed explanations. It can help with homework, explain complex concepts, create study plans, and generate practice questions tailored to your learning level.",
    },
    {
      question: "Can I collaborate with classmates?",
      answer: "Absolutely! Our Collaborative Study Room feature allows you to study with friends in real-time. Share screens, use virtual whiteboards, chat, and even compete in quiz challenges together.",
    },
    {
      question: "Does ChhatroBondhu work offline?",
      answer: "Some features like flashcard review and downloaded notes work offline. However, AI-powered features and real-time collaboration require an internet connection.",
    },
    {
      question: "How is my data protected?",
      answer: "We take privacy seriously. All your study data is encrypted with military-grade encryption, and we never share personal information with third parties. You can export or delete your data anytime from your account settings.",
    },
    {
      question: "What devices can I use ChhatroBondhu on?",
      answer: "ChhatroBondhu works seamlessly across all devices - desktop, laptop, tablet, and mobile. Your progress syncs automatically, so you can study anywhere, anytime.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
             style={{
               background: "radial-gradient(circle, #bc8cff 0%, transparent 70%)"
             }} />
      </div>

      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              Have Questions?
            </span>
          </div>
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-gradient">Frequently Asked</span>
              <br className="hidden sm:block" />
              Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about ChhatroBondhu and how it can transform your learning.
            </p>
          </div>
        </div>

        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
          {/* Left Side - FAQ Accordion */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-glow rounded-xl border border-border px-6 py-0 data-[state=open]:border-primary/50 transition-all"
                >
                  <AccordionTrigger className="text-left text-base text-foreground hover:text-primary hover:no-underline py-4 font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side - Support Cards */}
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="lg:sticky lg:top-32 space-y-4">
              {/* Chat Support */}
              <div className="glass rounded-xl border border-primary/30 p-6 group hover:border-primary/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 group-hover:border-primary/50 transition-all">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">Live Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Get instant answers from our AI support team.
                    </p>
                  </div>
                </div>
                <Button className="btn-primary-glow w-full gap-2 justify-center" size="sm">
                  Start Chat
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Email Support */}
              <div className="glass rounded-xl border border-accent/30 p-6 group hover:border-accent/50 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 group-hover:border-accent/50 transition-all">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">Email Support</h3>
                    <p className="text-sm text-muted-foreground">
                      support@chhatrobondhu.com
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2 justify-center" size="sm">
                  Send Email
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Documentation */}
              <div className="glass rounded-xl border border-border/50 p-6 group hover:border-primary/30 transition-all bg-background/30">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-background/50 border border-border/50 group-hover:border-primary/30 transition-all">
                    <Sparkles className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-1">Still Need Help?</h3>
                    <p className="text-sm text-muted-foreground">
                      Browse our detailed documentation and guides.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="w-full gap-2 justify-center" size="sm">
                  View Docs
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
