import FeatureCard from "./FeatureCard";
import {
  Home,
  Timer,
  Users,
  Calendar,
  Bell,
  Calculator,
  Share2,
} from "lucide-react";

const FeaturesSection = () => {
  const baseFeatures = [
    {
      icon: Home,
      title: "Dashboard",
      description:
        "Your command center for progress tracking, goals, streaks, and personalized study insights.",
      path: "/dashboard",
    },
    {
      icon: Users,
      title: "Study Room",
      description:
        "Study together virtually with shared tools, collaboration features, and a focused workspace.",
      path: "/study-room",
    },
    {
      icon: Timer,
      title: "Focus Mode",
      description:
        "Block distractions and stay deeply focused with a distraction-free study environment.",
      path: "/focus-mode",
    },
    {
      icon: Timer,
      title: "Pomodoro Timer",
      description:
        "Use timed work sessions and breaks to maintain momentum and prevent burnout.",
      path: "/study-room",
    },
    {
      icon: Calendar,
      title: "Smart Schedule",
      description:
        "Plan your week intelligently with a schedule that adapts to your priorities.",
      path: "/smart-schedule",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description:
        "Context-aware notifications that remind you to study at optimal times.",
      path: "/smart-reminders",
    },
    {
      icon: Calculator,
      title: "CGPA Calculator",
      description:
        "Track your academic performance and calculate your cumulative GPA in real-time.",
      path: "/cgpa-calculator",
    },
    {
      icon: Share2,
      title: "Notes Sharing Hub",
      description:
        "Create, organize, and share your study notes with classmates and friends.",
      path: "/notes-sharing",
    },

    // Hidden for now (kept for easy restore):
    // { icon: Brain, title: "AI Study Assistant", path: "/ai-assistant" },
    // { icon: Mic, title: "Voice Notes & Audio", path: "/voice-notes" },
    // { icon: Heart, title: "Mental Health Tracker", path: "/mental-health" },
    // { icon: PenTool, title: "Handwriting to Digital", path: "/handwriting-to-digital" },
    // { icon: Youtube, title: "YouTube Study Integration", path: "/youtube-study" },
    // { icon: FileSearch, title: "Exam Pattern Analyzer", path: "/exam-analyzer" },
    // { icon: Music, title: "Study Spotify Integration", path: "/study-spotify" },
    // { icon: Box, title: "3D Interactive Visualizations", path: "/3d-visualizations" },
    // { icon: Trophy, title: "Challenge Mode", path: "/challenge-mode" },
    // { icon: BookOpen, title: "Smart Flashcards", path: "/smart-flashcards" },
    // { icon: Sparkles, title: "AI Quiz Generator", path: "/ai-quiz-generator" },
  ];

  // Dynamic cycling of deep-blue to light-blue colors
  const colorCycle = [
    { gradient: "from-[#0f2a3f] to-[#005c99]", bgGradient: "from-[#e8f4ff] to-[#f0fafe]" }, // Deep Blue
    { gradient: "from-[#005c99] to-[#0077b6]", bgGradient: "from-[#f0fafe] to-[#f9fdff]" }, // Mid Blue
    { gradient: "from-[#0077b6] to-[#00a6fb]", bgGradient: "from-[#f4faff] to-[#ffffff]" }, // Light Blue
  ];

  const features = baseFeatures.map((feature, index) => ({
    ...feature,
    ...colorCycle[index % 3]
  }));

  return (
    <section id="features" className="landing-section">
      <div className="landing-frame">
        <div className="landing-section-head landing-reveal">
          <span className="landing-tag">8 Features</span>
          <h2 className="font-display">
            Everything You Need to <span className="text-[#0077b6]">Excel</span>
          </h2>
          <p>
            Transform your study experience with our comprehensive suite of
            AI-powered tools designed for academic excellence.
          </p>
        </div>

        <div className="landing-feature-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
