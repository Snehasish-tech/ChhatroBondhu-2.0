import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const handleContactSales = () => {
    window.location.href = "mailto:contact@chhatrobondhu.com?subject=Sales Inquiry";
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Vibrant Purple Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] via-[#A855F7] to-[#9333EA]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(167,139,250,0.3),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(196,181,253,0.2),transparent_60%)]" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>



      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto px-4">
          
          {/* Decorative Icon */}
          <div className="inline-flex items-center justify-center mb-8 relative">
            <div className="relative">
              {/* Main Icon Container */}
              <div className="flex items-center justify-center h-24 w-24 rounded-3xl bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
              
              {/* Floating Star Icons */}
              <div className="absolute -top-2 -right-3 animate-bounce">
                <Star className="h-6 w-6 text-yellow-300 fill-yellow-300" />
              </div>
              <div className="absolute -bottom-1 -left-2 animate-pulse" style={{animationDelay: '0.3s'}}>
                <Zap className="h-5 w-5 text-yellow-200" />
              </div>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-white bg-clip-text text-transparent">
              Learning Journey?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Join over <span className="font-bold text-yellow-200">100,000+ students</span> who are already learning smarter with ChhatroBondhu. Start your journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14">
            <Button
              size="lg"
              asChild
              className="h-16 px-12 text-lg font-bold bg-white text-purple-600 hover:bg-yellow-50 hover:scale-105 shadow-2xl shadow-black/20 group transition-all duration-300"
            >
              <Link to="/auth">
                <span className="flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              
              
          </span>
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleContactSales}
              className="h-16 px-12 text-lg font-bold border-2 border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white/20 hover:border-white/50 hover:scale-105 transition-all"
            >
              Contact Sales
            </Button>
          </div>

          {/* Trust Indicators - Bottom Row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
            {/* Avatars with joined count */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-white shadow-lg" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 border-2 border-white shadow-lg" />
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 border-2 border-white shadow-lg" />
              </div>
              <span className="text-white font-semibold text-base">1000+ joined this week</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                ))}
              </div>
              <span className="text-white font-semibold text-base ml-2">4.9/5 rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;