import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is ChhatroBondhu free to use?",
      answer: "Yes! ChhatroBondhu offers a generous free tier with access to core features including AI study assistant, flashcards, and basic focus mode. Premium features are available with our Pro subscription.",
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
      answer: "We take privacy seriously. All your study data is encrypted, and we never share personal information with third parties. You can export or delete your data anytime from your account settings.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Header & Contact */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary mb-4">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Got questions? We've got answers. If you can't find what you're looking for, reach out to our support team.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-1">Chat with us</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get instant answers from our AI support or connect with a human.
                    </p>
                    <Button variant="outline" size="sm" className="group">
                      Start Chat
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-1">Email support</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Reach our support team at support@chhatrobondhu.com
                    </p>
                    <Button variant="outline" size="sm" className="group">
                      Send Email
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="lg:pt-16">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-card-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
