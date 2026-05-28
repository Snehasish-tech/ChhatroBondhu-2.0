import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "Free to get started",
    "No credit card required",
    "Cancel anytime",
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-[#0f2a3f] via-[#1a5578] to-[#0077b6]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#00a6fb]/30 to-[#79ceff]/20 blur-3xl opacity-60"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#0077b6]/40 to-[#00a6fb]/20 blur-3xl opacity-60"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center text-white landing-reveal">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-6">
            Ready to Transform Your
            <br />
            <span className="bg-gradient-to-r from-[#79ceff] to-white bg-clip-text text-transparent">Learning Journey?</span>
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join over 100,000+ students who are already learning smarter with
            Unilife.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle2 className="h-4 w-4" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14">
            <Link to="/auth" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0077b6] rounded-full font-bold text-lg hover:bg-[#e8f4ff] hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all"
              onClick={() =>
                (window.location.href =
                  "mailto:contact@unilife.com?subject=Sales Inquiry")
              }
            >
              Contact Sales
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/70 border-2 border-white/40" />
                <div className="w-8 h-8 rounded-full bg-white/40 border-2 border-white/40" />
                <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/40" />
              </div>
              <span className="text-sm font-medium text-white/90">
                1000+ joined this week
              </span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-white/20" />

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#9eddff] fill-[#9eddff]" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">
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
