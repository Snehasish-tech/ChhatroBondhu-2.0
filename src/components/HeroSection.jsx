import { useState, useEffect } from "react";
import {
  ArrowRight,
  Play,
  BookOpen,
  Brain,
  Target,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const HeroSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const { user } = useAuth();

  const stats = [
    { value: "15+", label: "Smart Features" },
    { value: "100K+", label: "Active Learners" },
    { value: "4.9", label: "User Rating" },
  ];

  const features = [
    { icon: Brain, label: "AI Assistant", description: "Get instant help" },
    { icon: Target, label: "Focus Mode", description: "Stay concentrated" },
    { icon: BookOpen, label: "Study Room", description: "Collaborate & learn" },
    { icon: Sparkles, label: "Smart Tools", description: "Work smarter" },
  ];

  const highlights = [
    "AI-powered learning assistance",
    "Personalized study plans",
    "Track progress in real-time",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="landing-hero relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#00a6fb]/20 to-[#0077b6]/20 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#79ceff]/20 to-[#00a6fb]/20 blur-3xl animate-pulse pointer-events-none" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      
      <div className="landing-frame relative z-10">
        <div className="landing-hero-wrap landing-reveal">
          <div className="landing-hero-media"></div>
          <div className="landing-hero-grid"></div>
          <div className="landing-hero-content">
            <div className="landing-hero-left">
              <div className="landing-eyebrow bg-[#e8f4ff] text-[#0077b6] border border-[#b8d5ea] px-4 py-1.5 rounded-full inline-flex items-center font-semibold text-sm shadow-sm mb-6">✨ AI Learning Platform</div>
              <h1 className="landing-hero-title font-display">
                Your AI Study <span>Companion</span>
              </h1>
              <p className="landing-hero-subtitle">
                ChhatroBondhu combines AI, gamification, and collaboration to
                transform how you study. Learn smarter, not harder.
              </p>
              <ul className="landing-hero-list">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#79ceff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="landing-hero-actions">
                <Link
                  to={user ? "/dashboard" : "/auth"}
                  className="landing-btn-hero-primary"
                >
                  {user ? "Go to Dashboard" : "Start Learning Free"}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/study-room" className="landing-btn-hero-ghost">
                  <Play className="h-4 w-4" />
                  Try Study Room
                </Link>
              </div>
            </div>

            <div className="landing-hero-right">
              <div className="landing-glass-card">
                <h3>Live Learning Snapshot</h3>
                <div className="landing-score-grid">
                  {stats.map((stat) => (
                    <div key={stat.label} className="landing-score">
                      <b>{stat.value}</b>
                      <span>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-white/15 flex items-center justify-center">
                      {(() => {
                        const Icon = features[activeFeature].icon;
                        return <Icon className="h-5 w-5 text-white" />;
                      })()}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {features[activeFeature].label}
                      </p>
                      <p className="text-xs text-white/80">
                        {features[activeFeature].description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <button
                      key={feature.label}
                      onClick={() => setActiveFeature(index)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        activeFeature === index
                          ? "bg-white text-[#0f2a3f]"
                          : "bg-white/15 text-white/80 hover:bg-white/20"
                      }`}
                    >
                      {feature.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
