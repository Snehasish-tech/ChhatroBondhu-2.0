import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const handleContactSales = () => {
    window.location.href = "mailto:contact@chhatrobondhu.com?subject=Sales Inquiry";
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-primary/90">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />
      </div>

      {/* Static Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto px-4">
          {/* Static Icon with Glow */}
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-3xl bg-white/20 backdrop-blur-sm mb-6 relative group">
            <div className="absolute inset-0 rounded-3xl bg-white/40 blur-xl transition-all" />
            <Sparkles className="h-8 w-8 text-white relative z-10" />
            
            {/* Static Icons */}
            <Star className="h-4 w-4 text-yellow-300 absolute -top-2 -right-2" />
            <Zap className="h-4 w-4 text-yellow-200 absolute -bottom-2 -left-2" />
          </div>

          {/* Headline with Gradient */}
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl xl:text-5xl mb-4 leading-tight">
            Ready to Transform Your
            <span className="block mt-1 bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Learning Journey?
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join over <span className="font-bold text-yellow-200">100,000+ students</span> who are already learning smarter with ChhatroBondhu. Start your journey today.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/95 hover:scale-105 shadow-2xl shadow-black/20 group relative overflow-hidden"
            >
              <Link to="/auth">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactSales}
              className="border-2 border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60 hover:scale-105 transition-all shadow-lg"
            >
              Contact Sales
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-white/70 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white" />
              </div>
              <span className="text-white/90 font-medium whitespace-nowrap">1000+ joined this week</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-300">★★★★★</span>
              <span className="text-white/90 font-medium ml-2 whitespace-nowrap">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;