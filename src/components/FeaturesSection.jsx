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
      path: "/ai-assistant",
    },
    {
      icon: Timer,
      title: "Smart Focus Mode",
      description: "Stay concentrated with Pomodoro timers, distraction blocking, and ambient sounds for deep work.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      path: "/focus-mode",
    },
    {
      icon: Mic,
      title: "Voice Notes & Audio",
      description: "Record lectures, convert speech to text, and create audio summaries of your study materials.",
      gradient: "bg-gradient-to-br from-rose-500 to-pink-500",
      path: "/voice-notes",
    },
    {
      icon: Users,
      title: "Collaborative Study Room",
      description: "Study together virtually with video chat, shared whiteboards, and real-time collaboration tools.",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
      path: "/study-room",
    },
    {
      icon: Calendar,
      title: "Smart Schedule Optimizer",
      description: "AI-powered scheduling that adapts to your learning style and optimizes study sessions.",
      gradient: "bg-gradient-to-br from-orange-500 to-amber-500",
      path: "/smart-schedule",
    },
    {
      icon: Heart,
      title: "Mental Health Tracker",
      description: "Monitor stress levels, get wellness tips, and maintain a healthy study-life balance.",
      gradient: "bg-gradient-to-br from-red-500 to-rose-500",
      path: "/mental-health",
    },
    {
      icon: PenTool,
      title: "Handwriting to Digital",
      description: "Convert handwritten notes to digital text with AI recognition and smart formatting.",
      gradient: "bg-gradient-to-br from-violet-500 to-purple-500",
      path: "/handwriting-to-digital",
    },
    {
      icon: Youtube,
      title: "YouTube Study Integration",
      description: "Extract key points from educational videos, create notes, and track learning progress.",
      gradient: "bg-gradient-to-br from-red-600 to-red-500",
      path: "/youtube-study",
    },
    {
      icon: FileSearch,
      title: "Exam Pattern Analyzer",
      description: "Analyze past papers, identify important topics, and predict likely exam questions.",
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-500",
      path: "/exam-analyzer",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Context-aware notifications that remind you to study at optimal times.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-500",
      path: "/smart-reminders",
    },
    {
      icon: Music,
      title: "Study Spotify Integration",
      description: "Curated study playlists that adapt to your focus level and study subject.",
      gradient: "bg-gradient-to-br from-green-600 to-green-500",
      path: "/study-spotify",
    },
    {
      icon: Box,
      title: "3D Interactive Visualizations",
      description: "Explore complex concepts through interactive 3D models and animations.",
      gradient: "bg-gradient-to-br from-cyan-500 to-teal-500",
      path: "/3d-visualizations",
    },
    {
      icon: Trophy,
      title: "Challenge Mode",
      description: "Compete with friends, earn achievements, and level up your learning journey.",
      gradient: "bg-gradient-to-br from-amber-500 to-yellow-500",
      path: "/challenge-mode",
    },
    {
      icon: BookOpen,
      title: "Smart Flashcards",
      description: "AI-generated flashcards with spaced repetition for optimal memory retention.",
      gradient: "bg-gradient-to-br from-teal-500 to-cyan-500",
      path: "/smart-flashcards",
    },
    {
      icon: Sparkles,
      title: "AI Quiz Generator",
      description: "Generate custom quizzes from your notes and study materials instantly.",
      gradient: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
      path: "/ai-quiz-generator",
    },
  ];

  return (
    <section id="features" className="relative py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header - Enhanced */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          {/* Badge with gradient background */}
          <div className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-gradient-to-r from-primary/15 via-purple-500/15 to-pink-500/15 border border-primary/30 mb-6 sm:mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" />
            <span className="text-sm sm:text-base font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              15+ POWERFUL FEATURES
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          
          {/* Main heading with enhanced styling */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-foreground">Everything You Need to</span>
            <br />
            <span className="inline-block mt-2 bg-gradient-to-r from-primary via-purple-500 to-pink-600 bg-clip-text text-transparent animate-gradient">
              Excel & Succeed
            </span>
          </h2>
          
          {/* Description with better typography */}
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Transform your study experience with our comprehensive suite of 
            <span className="text-foreground font-semibold"> AI-powered tools </span>
            designed to help you achieve 
            <span className="text-foreground font-semibold"> academic excellence</span>.
          </p>
          
          {/* Decorative underline */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
            <div className="h-1.5 w-16 sm:w-24 bg-gradient-to-r from-primary via-purple-500 to-pink-600 rounded-full"></div>
            <div className="h-1 w-12 sm:w-16 bg-gradient-to-l from-transparent to-pink-600 rounded-full"></div>
          </div>
        </div>

        {/* Features Grid - Responsive */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
