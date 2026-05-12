import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "Free for 14 days",
    "No credit card needed",
    "Full access to all features",
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Dark Background with Gradient Glows */}
      <div className="absolute inset-0 -z-10">
        {/* Deep blue radial glow */}
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
             style={{
               background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)"
             }} />
        {/* Purple-violet glow */}
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
             style={{
               background: "radial-gradient(circle, #bc8cff 0%, transparent 70%)"
             }} />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{
               backgroundImage: "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"%23ffffff\" fill-opacity=\"0.1\"><rect x=\"0\" y=\"0\" width=\"1\" height=\"60\"/><rect x=\"59\" y=\"0\" width=\"1\" height=\"60\"/><rect x=\"0\" y=\"0\" width=\"60\" height=\"1\"/><rect x=\"0\" y=\"59\" width=\"60\" height=\"1\"/></g></svg>')"
             }} />
      </div>

      <div className="container-wide relative z-10">
        <div className="glass rounded-2xl border border-primary/30 px-8 md:px-12 py-16 md:py-20 space-y-8 max-w-4xl mx-auto">
          {/* Top Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                Special Offer
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center space-y-4">
            <h2 className="text-hero text-center">
              Start Your <span className="text-gradient">Learning</span>
              <br className="hidden sm:block" />
              <span className="text-gradient">Revolution</span> Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join 100,000+ students transforming their academic excellence with AI-powered learning.
            </p>
          </div>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="btn-primary-glow text-base gap-2" asChild>
              <Link to="/auth">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-card/50 border-primary/30 hover:border-primary/50 text-base gap-2"
              onClick={() =>
                (window.location.href =
                  "mailto:contact@chhatrobondhu.com?subject=Sales Inquiry")
              }
            >
              <Zap className="h-4 w-4" />
              Contact Sales
            </Button>
          </div>

          {/* Social Proof Section */}
          <div className="border-t border-border/30 pt-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              {/* User Count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br border-2 border-card"
                      style={{
                        background: [
                          "linear-gradient(135deg, #58a6ff 0%, #58a6ff 100%)",
                          "linear-gradient(135deg, #bc8cff 0%, #58a6ff 100%)",
                          "linear-gradient(135deg, #3fb950 0%, #bc8cff 100%)",
                        ][i]
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">2,500+</p>
                  <p className="text-xs text-muted-foreground">joined this month</p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-px bg-border/30" />

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
                <div>
                  <p className="text-sm font-bold text-foreground">4.9/5.0</p>
                  <p className="text-xs text-muted-foreground">from 8,300+ reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Text */}
          <p className="text-center text-sm text-muted-foreground">
            Used by students from 50+ countries. Cancel anytime with no penalties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
