import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 landing-reveal">
          <span className="text-[#0077b6] font-semibold tracking-wider uppercase text-sm">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0f2a3f] mt-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-[#284660] max-w-2xl mx-auto">Start for free, upgrade to Pro Mode when you need more power.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Free Plan */}
          <div className="bg-[#f9fdff] p-8 rounded-3xl border border-[#d4e8f7] landing-reveal">
            <h3 className="text-2xl font-bold text-[#0f2a3f] mb-2">Basic</h3>
            <p className="text-[#284660] mb-6">Perfect for getting started.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-[#0f2a3f]">Free</span>
              <span className="text-[#284660]">/forever</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Basic AI Assistant (50 queries/mo)", "Standard Focus Mode", "Up to 5 Smart Flashcard Decks", "Community Support"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[#284660]">
                  <Check className="w-5 h-5 text-[#0077b6]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/auth">
              <Button className="w-full bg-white text-[#0077b6] border-2 border-[#0077b6] hover:bg-[#e8f4ff]" size="lg">Get Started</Button>
            </Link>
          </div>

          {/* Plus Plan */}
          <div className="bg-gradient-to-br from-[#005c99] to-[#0077b6] p-8 rounded-3xl border border-[#00a6fb] shadow-lg relative landing-reveal transform lg:-translate-y-2">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-[#79ceff] text-[#0f2a3f] px-3 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm">POPULAR</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Plus</h3>
            <p className="text-[#e8f4ff] mb-6">For dedicated students pushing limits.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₹199</span>
              <span className="text-[#e8f4ff]">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Advanced AI Assistant (500 queries)", "Pro Focus Mode & Timers", "Up to 20 Flashcard Decks", "Basic Exam Pattern Analyzer", "Priority Support"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-[#79ceff]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/auth">
              <Button className="w-full bg-white text-[#0077b6] hover:bg-[#e8f4ff] border-0" size="lg">Get Plus</Button>
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-br from-[#0f2a3f] to-[#003b7a] p-8 rounded-3xl border border-[#00a6fb] shadow-xl relative landing-reveal transform lg:-translate-y-4">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-[#00a6fb] text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wide shadow-sm">PRO MODE</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <p className="text-[#b8e7ff] mb-6">For serious students who want to excel.</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₹499</span>
              <span className="text-[#b8e7ff]">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {["Unlimited AI Assistant", "Advanced Exam Pattern Analyzer", "Unlimited Flashcards & Quizzes", "1-on-1 Mentorship Sessions", "24/7 VIP Support"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-[#79ceff]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/auth">
              <Button className="w-full bg-[#00a6fb] hover:bg-[#79ceff] text-white border-0" size="lg">Upgrade to Pro</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;