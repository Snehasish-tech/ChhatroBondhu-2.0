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
    <section id="faq" className="landing-faq">
      <div className="landing-frame">
        <div className="landing-section-head landing-reveal">
          <span className="landing-tag">FAQ</span>
          <h2 className="font-display">Frequently Asked Questions</h2>
          <p>
            Got questions? We've got answers. Can't find what you're looking for?
            Reach out to our support team.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="landing-faq-card"
                >
                  <AccordionTrigger className="text-left text-base text-card-foreground hover:text-[#0077b6] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="landing-faq-card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#e8f4ff]">
                    <MessageCircle className="h-6 w-6 text-[#0077b6]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-card-foreground mb-1">
                      Chat with us
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      Get instant answers from our AI support or connect with a human.
                    </p>
                    <Button variant="outline" size="sm" className="group">
                      Start Chat
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="landing-faq-card">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#e8f4ff]">
                    <Mail className="h-6 w-6 text-[#0077b6]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base text-card-foreground mb-1">
                      Email support
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed break-all">
                      support@chhatrobondhu.com
                    </p>
                    <Button variant="outline" size="sm" className="group">
                      Send Email
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-[#d8e5f1] bg-[#f4faff] p-6 text-center">
                <HelpCircle className="h-10 w-10 text-[#0077b6] mx-auto mb-3" />
                <h3 className="font-semibold text-base text-card-foreground mb-2">
                  Still have questions?
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Our documentation has detailed guides and tutorials.
                </p>
                <Button variant="outline" size="sm">
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
