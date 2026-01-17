import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, ArrowRight, HelpCircle } from "lucide-react";

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
    {
      question: "What devices can I use ChhatroBondhu on?",
      answer: "ChhatroBondhu works seamlessly across all devices - desktop, laptop, tablet, and mobile. Your progress syncs automatically, so you can study anywhere, anytime.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <HelpCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Reach out to our support team.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2">
          {/* Left Side - FAQ Accordion - Shows first on mobile */}
          <div className="order-2 lg:order-1">
            <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="rounded-xl border border-border bg-card px-4 sm:px-5 md:px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base text-card-foreground hover:text-primary hover:no-underline py-3 sm:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-xs sm:text-sm text-muted-foreground pb-3 sm:pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Side - Contact Cards */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-5">
              <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 md:p-6 transition-all hover:shadow-lg hover:border-primary/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-card-foreground mb-1">Chat with us</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">
                      Get instant answers from our AI support or connect with a human.
                    </p>
                    <Button variant="outline" size="sm" className="group w-full sm:w-auto text-xs sm:text-sm">
                      Start Chat
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 md:p-6 transition-all hover:shadow-lg hover:border-primary/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-xl bg-accent/20">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-card-foreground mb-1">Email support</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed break-all">
                      support@chhatrobondhu.com
                    </p>
                    <Button variant="outline" size="sm" className="group w-full sm:w-auto text-xs sm:text-sm">
                      Send Email
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Additional help section */}
              <div className="rounded-2xl border border-dashed border-border bg-muted/50 p-4 sm:p-5 md:p-6 text-center">
                <HelpCircle className="h-8 w-8 sm:h-10 sm:w-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-sm sm:text-base text-card-foreground mb-2">Still have questions?</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                  Our documentation has detailed guides and tutorials.
                </p>
                <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                  View Documentation
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
