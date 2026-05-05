import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "Free to get started",
    "No credit card required",
    "Cancel anytime",
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Transform Your
            <br />
            Learning Journey?
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join over 100,000+ students who are already learning smarter with
            ChhatroBondhu.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/90"
              >
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              size="lg"
              asChild
              className="bg-background text-primary hover:bg-background/90 shadow-xl"
            >
              <Link to="/auth">
                Get Started Free
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
              onClick={() =>
                (window.location.href =
                  "mailto:contact@chhatrobondhu.com?subject=Sales Inquiry")
              }
            >
              Contact Sales
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-accent/80 border-2 border-primary" />
                <div className="w-8 h-8 rounded-full bg-primary-foreground/20 border-2 border-primary" />
                <div className="w-8 h-8 rounded-full bg-primary-foreground/30 border-2 border-primary" />
              </div>
              <span className="text-sm font-medium text-primary-foreground/90">
                1000+ joined this week
              </span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-primary-foreground/20" />

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-accent fill-accent"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-primary-foreground/90">
                4.9/5 rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
