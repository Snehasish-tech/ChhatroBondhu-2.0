import FeatureCard from "./FeatureCard";
import {
  Brain,
  Timer,
  Mic,
  Users,
  Calendar,
  Heart,
  PenTool,
  Youtube,
  FileSearch,
  Bell,
  Music,
  Box,
  Trophy,
  BookOpen,
  Sparkles,
  Calculator,
  Share2,
} from "lucide-react";

const FeaturesSection = () => {
  const baseFeatures = [
    {
      icon: Brain,
      title: "AI Study Assistant",
      description:
        "Get instant answers, explanations, and personalized study recommendations powered by advanced AI.",
      path: "/ai-assistant",
    },
    {
      icon: Timer,
      title: "Smart Focus Mode",
      description:
        "Stay concentrated with Pomodoro timers, distraction blocking, and ambient sounds for deep work.",
      path: "/focus-mode",
    },
    {
      icon: Mic,
      title: "Voice Notes & Audio",
      description:
        "Record lectures, convert speech to text, and create audio summaries of your study materials.",
      path: "/voice-notes",
    },
    {
      icon: Users,
      title: "Collaborative Study Room",
      description:
        "Study together virtually with video chat, shared whiteboards, and real-time collaboration tools.",
      path: "/study-room",
    },
    {
      icon: Calendar,
      title: "Smart Schedule Optimizer",
      description:
        "AI-powered scheduling that adapts to your learning style and optimizes study sessions.",
      path: "/smart-schedule",
    },
    {
      icon: Heart,
      title: "Mental Health Tracker",
      description:
        "Monitor stress levels, get wellness tips, and maintain a healthy study-life balance.",
      path: "/mental-health",
    },
    {
      icon: PenTool,
      title: "Handwriting to Digital",
      description:
        "Convert handwritten notes to digital text with AI recognition and smart formatting.",
      path: "/handwriting-to-digital",
    },
    {
      icon: Youtube,
      title: "YouTube Study Integration",
      description:
        "Extract key points from educational videos, create notes, and track learning progress.",
      path: "/youtube-study",
    },
    {
      icon: FileSearch,
      title: "Exam Pattern Analyzer",
      description:
        "Analyze past papers, identify important topics, and predict likely exam questions.",
      path: "/exam-analyzer",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description:
        "Context-aware notifications that remind you to study at optimal times.",
      path: "/smart-reminders",
    },
    {
      icon: Music,
      title: "Study Spotify Integration",
      description:
        "Curated study playlists that adapt to your focus level and study subject.",
      path: "/study-spotify",
    },
    {
      icon: Box,
      title: "3D Interactive Visualizations",
      description:
        "Explore complex concepts through interactive 3D models and animations.",
      path: "/3d-visualizations",
    },
    {
      icon: Trophy,
      title: "Challenge Mode",
      description:
        "Compete with friends, earn achievements, and level up your learning journey.",
      path: "/challenge-mode",
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description:
        "AI-generated flashcards with spaced repetition for optimal memory retention.",
      path: "/smart-flashcards",
    },
    {
      icon: Sparkles,
      title: "AI Quiz Generator",
      description:
        "Generate custom quizzes from your notes and study materials instantly.",
      path: "/ai-quiz-generator",
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
          <span className="landing-tag">17+ Features</span>
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
