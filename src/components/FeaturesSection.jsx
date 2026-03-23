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
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
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
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              15+ Features
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground leading-tight">
            Everything You Need to{" "}
            <span className="text-primary">Excel</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your study experience with our comprehensive suite of
            AI-powered tools designed for academic excellence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
