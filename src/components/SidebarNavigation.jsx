import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { featureFlags } from "@/lib/featureFlags";
import {
  BookOpen,
  Clock,
  Home,
  LogOut,
  Zap,
  Sparkles,
  Calendar,
  Calculator,
  Share2,
} from "lucide-react";

const navItems = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", icon: Home, href: "/dashboard", flag: featureFlags.dashboard },
      { label: "Study Room", icon: BookOpen, href: "/study-room", flag: featureFlags.studyRoom },
    ],
  },
  // {
  //   title: "Learning Tools",
  //   items: [
  //     { label: "AI Assistant", icon: Brain, href: "/ai-assistant", flag: featureFlags.aiAssistant },
  //     { label: "AI Quiz Generator", icon: Sparkles, href: "/ai-quiz-generator", flag: featureFlags.aiQuizGenerator },
  //     { label: "Smart Flashcards", icon: Clipboard, href: "/smart-flashcards", flag: featureFlags.smartFlashcards },
  //     { label: "Exam Analyzer", icon: BarChart3, href: "/exam-analyzer", flag: featureFlags.examAnalyzer },
  //   ],
  // },
  {
    title: "Focus & Productivity",
    items: [
      { label: "Focus Mode", icon: Zap, href: "/focus-mode", flag: featureFlags.studyRoom },
      { label: "Pomodoro Timer", icon: Clock, href: "/study-room", flag: featureFlags.studyRoom },
      { label: "Smart Schedule", icon: Calendar, href: "/smart-schedule", flag: featureFlags.smartSchedule },
      { label: "Smart Reminders", icon: Clock, href: "/smart-reminders", flag: featureFlags.smartReminders },
    ],
  },
  // {
  //   title: "Wellness & Content",
  //   items: [
  //     { label: "Mental Health", icon: Heart, href: "/mental-health", flag: featureFlags.mentalHealthTracker },
  //     { label: "Study Spotify", icon: Music, href: "/study-spotify", flag: featureFlags.studySpotify },
  //     { label: "Voice Notes", icon: Headphones, href: "/voice-notes", flag: featureFlags.voiceNotes },
  //     { label: "YouTube Study", icon: Code2, href: "/youtube-study", flag: featureFlags.youtubeAnalyzer },
  //   ],
  // },
  // {
  //   title: "Advanced",
  //   items: [
  //     { label: "Handwriting to Digital", icon: PenTool, href: "/handwriting-to-digital", flag: featureFlags.handwritingToDigital },
  //     { label: "3D Visualizations", icon: Box, href: "/3d-visualizations", flag: featureFlags.threeDVisualizations },
  //     { label: "Challenge Mode", icon: Gamepad2, href: "/challenge-mode", flag: featureFlags.challengeMode },
  //   ],
  // },
  {
    title: "Academic Tools",
    items: [
      { label: "CGPA Calculator", icon: Calculator, href: "/cgpa-calculator", flag: featureFlags.cgpaCalculator },
      { label: "Notes Sharing", icon: Share2, href: "/notes-sharing", flag: featureFlags.notesSharing },
    ],
  },
];

const SidebarNavigation = () => {
  const { signOut } = useAuth();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  };

  const isActive = (href) => location.pathname === href;

  // Filter sections and items based on their feature flags
  const visibleNavItems = navItems
    .map((section) => ({ ...section, items: section.items.filter((item) => item.flag) }))
    .filter((section) => section.items.length > 0);

  return (
    <div className="flex flex-col h-full bg-white text-[#0f2a3f]">
      {/* Logo Section */}
      <div className="p-4 border-b border-[#d4e8f7] bg-gradient-to-r from-[#f0fafe] to-[#f9fdff]">
        <Link to="/dashboard" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0077b6] to-[#00a6fb] flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-[#0f2a3f]">Study AI</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <ScrollArea className="flex-1">
        <nav className="p-3 space-y-4">
          {visibleNavItems.map((section) => (
            <div key={section.title}>
              <h3 className="px-3 text-xs font-semibold text-[#0077b6] uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link key={item.href} to={item.href}>
                      <Button
                        variant={isActive(item.href) ? "secondary" : "ghost"}
                        className={cn(
                          "w-full justify-start gap-2 text-sm rounded-lg transition-all duration-200",
                          isActive(item.href) 
                            ? "bg-gradient-to-r from-[#0077b6] to-[#00a6fb] text-white hover:shadow-md" 
                            : "text-[#284660] hover:bg-[#e8f4ff]"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <Separator className="mt-3 bg-[#d4e8f7]" />
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* Logout Button */}
      <div className="p-3 border-t border-[#d4e8f7] bg-gradient-to-t from-[#f0fafe] to-transparent">
        <Button
          onClick={handleLogout}
          disabled={isLoading}
          variant="outline"
          className="w-full gap-2 border-[#b8d5ea] text-[#0077b6] hover:bg-[#e8f4ff]"
        >
          <LogOut className="w-4 h-4" />
          <span>{isLoading ? "Logging out..." : "Logout"}</span>
        </Button>
      </div>
    </div>
  );
};

export default SidebarNavigation;
