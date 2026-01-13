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
      description: "Get instant answers, explanations, and personalized study recommendations powered by advanced AI.",
      gradient: "bg-gradient-to-br from-primary to-primary/70",
    },
    {
      icon: Timer,
      title: "Smart Focus Mode",
      description: "Stay concentrated with Pomodoro timers, distraction blocking, and ambient sounds for deep work.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Mic,
      title: "Voice Notes & Audio",
      description: "Record lectures, convert speech to text, and create audio summaries of your study materials.",
      gradient: "bg-gradient-to-br from-rose-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Collaborative Study Room",
      description: "Study together virtually with video chat, shared whiteboards, and real-time collaboration tools.",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: Calendar,
      title: "Smart Schedule Optimizer",
      description: "AI-powered scheduling that adapts to your learning style and optimizes study sessions.",
      gradient: "bg-gradient-to-br from-orange-500 to-amber-500",
    },
    {
      icon: Heart,
      title: "Mental Health Tracker",
      description: "Monitor stress levels, get wellness tips, and maintain a healthy study-life balance.",
      gradient: "bg-gradient-to-br from-red-500 to-rose-500",
    },
    {
      icon: PenTool,
      title: "Handwriting to Digital",
      description: "Convert handwritten notes to digital text with AI recognition and smart formatting.",
      gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
    },
    {
      icon: Youtube,
      title: "YouTube Study Integration",
      description: "Extract key points from educational videos, create notes, and track learning progress.",
      gradient: "bg-gradient-to-br from-red-600 to-red-500",
    },
    {
      icon: FileSearch,
      title: "Exam Pattern Analyzer",
      description: "Analyze past papers, identify important topics, and predict likely exam questions.",
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Context-aware notifications that remind you to study at optimal times.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
    },
    {
      icon: Music,
      title: "Study Spotify Integration",
      description: "Curated study playlists that adapt to your focus level and study subject.",
      gradient: "bg-gradient-to-br from-green-600 to-green-500",
    },
    {
      icon: Box,
      title: "3D Interactive Visualizations",
      description: "Explore complex concepts through interactive 3D models and animations.",
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-500",
    },
    {
      icon: Trophy,
      title: "Challenge Mode",
      description: "Compete with friends, earn achievements, and level up your learning journey.",
      gradient: "bg-gradient-to-br from-amber-500 to-yellow-500",
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "AI-generated flashcards with spaced repetition for optimal memory retention.",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "AI Quiz Generator",
      description: "Generate custom quizzes from your notes and study materials instantly.",
      gradient: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-4">
            POWERFUL FEATURES
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15+ smart features designed to transform your study experience and help you achieve academic success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
