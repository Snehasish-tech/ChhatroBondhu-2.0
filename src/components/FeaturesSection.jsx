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
  ArrowRight,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Study Assistant",
      description:
        "Get instant answers and personalized study recommendations powered by advanced AI.",
      path: "/ai-assistant",
      highlight: true,
    },
    {
      icon: Timer,
      title: "Smart Focus Mode",
      description:
        "Stay concentrated with Pomodoro timers, distraction blocking, and ambient sounds.",
      path: "/focus-mode",
    },
    {
      icon: Mic,
      title: "Voice Notes & Audio",
      description:
        "Record lectures, convert speech to text, and create audio summaries instantly.",
      path: "/voice-notes",
    },
    {
      icon: Users,
      title: "Collaborative Study Room",
      description:
        "Study together virtually with video chat, shared whiteboards, and real-time tools.",
      path: "/study-room",
      highlight: true,
    },
    {
      icon: Calendar,
      title: "Smart Schedule Optimizer",
      description:
        "AI-powered scheduling that adapts to your learning style and optimizes sessions.",
      path: "/smart-schedule",
    },
    {
      icon: Heart,
      title: "Mental Health Tracker",
      description:
        "Monitor stress levels and maintain a healthy study-life balance.",
      path: "/mental-health",
    },
    {
      icon: PenTool,
      title: "Handwriting to Digital",
      description:
        "Convert handwritten notes to digital text with AI recognition.",
      path: "/handwriting-to-digital",
    },
    {
      icon: Youtube,
      title: "YouTube Study Integration",
      description:
        "Extract key points from educational videos and track learning progress.",
      path: "/youtube-study",
      highlight: true,
    },
    {
      icon: FileSearch,
      title: "Exam Pattern Analyzer",
      description:
        "Analyze past papers and predict likely exam questions.",
      path: "/exam-analyzer",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description:
        "Context-aware notifications at optimal times for maximum retention.",
      path: "/smart-reminders",
    },
    {
      icon: Music,
      title: "Study Spotify Integration",
      description:
        "Curated study playlists that adapt to your focus level.",
      path: "/study-spotify",
    },
    {
      icon: Box,
      title: "3D Interactive Visualizations",
      description:
        "Explore complex concepts through interactive 3D models.",
      path: "/3d-visualizations",
    },
    {
      icon: Trophy,
      title: "Challenge Mode",
      description:
        "Compete with friends, earn achievements, and level up your journey.",
      path: "/challenge-mode",
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description:
        "AI-generated flashcards with spaced repetition for optimal retention.",
      path: "/smart-flashcards",
    },
    {
      icon: Sparkles,
      title: "AI Quiz Generator",
      description:
        "Generate custom quizzes from your notes and study materials.",
      path: "/ai-quiz-generator",
    },
  ];

  return (
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-5"
             style={{ background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-5"
             style={{ background: "radial-gradient(circle, #bc8cff 0%, transparent 70%)" }} />
      </div>

      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto space-y-6 animate-fade-up">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              15+ Premium Features
            </span>
          </div>

          {/* Section Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Everything You Need to{" "}
              <span className="text-gradient">Excel</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Comprehensive AI-powered tools designed for academic excellence and deep learning.
            </p>
          </div>
        </div>

        {/* Features Grid with Premium Layout */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              index={index}
              delay={index * 0.05}
            />
          ))}
        </div>

        {/* CTA Row */}
        <div className="mt-20 pt-16 border-t border-border/30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to transform your learning?
              </h3>
              <p className="text-lg text-muted-foreground">
                Join thousands of students already learning smarter with ChhatroBondhu.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-lg:justify-end">
              <button className="btn-primary-glow gap-2 flex items-center">
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="btn-secondary gap-2 flex items-center">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
