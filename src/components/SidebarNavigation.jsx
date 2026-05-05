import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import {
  BarChart3,
  BookOpen,
  Brain,
  Clipboard,
  Clock,
  Code2,
  Gamepad2,
  Headphones,
  Home,
  LogOut,
  Music,
  PenTool,
  Zap,
  Sparkles,
  Box,
  Heart,
  Calendar,
} from "lucide-react";

const navItems = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", icon: Home, href: "/dashboard" },
      { label: "Study Room", icon: BookOpen, href: "/study-room" },
    ],
  },
  {
    title: "Learning Tools",
    items: [
      { label: "AI Assistant", icon: Brain, href: "/ai-assistant" },
      { label: "AI Quiz Generator", icon: Sparkles, href: "/ai-quiz-generator" },
      { label: "Smart Flashcards", icon: Clipboard, href: "/smart-flashcards" },
      { label: "Exam Analyzer", icon: BarChart3, href: "/exam-analyzer" },
    ],
  },
  {
    title: "Focus & Productivity",
    items: [
      { label: "Focus Mode", icon: Zap, href: "/focus-mode" },
      { label: "Pomodoro Timer", icon: Clock, href: "/study-room" },
      { label: "Smart Schedule", icon: Calendar, href: "/smart-schedule" },
      { label: "Smart Reminders", icon: Clock, href: "/smart-reminders" },
    ],
  },
  {
    title: "Wellness & Content",
    items: [
      { label: "Mental Health", icon: Heart, href: "/mental-health" },
      { label: "Study Spotify", icon: Music, href: "/study-spotify" },
      { label: "Voice Notes", icon: Headphones, href: "/voice-notes" },
      { label: "YouTube Study", icon: Code2, href: "/youtube-study" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { label: "Handwriting to Digital", icon: PenTool, href: "/handwriting-to-digital" },
      { label: "3D Visualizations", icon: Box, href: "/3d-visualizations" },
      { label: "Challenge Mode", icon: Gamepad2, href: "/challenge-mode" },
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

  return (
    <div className="flex flex-col h-full bg-sidebar text-sidebar-foreground">
      {/* Logo Section */}
      <div className="p-4 border-b">
        <Link to="/dashboard" className="flex items-center gap-2 font-bold text-lg">
          <Sparkles className="w-6 h-6 text-primary" />
          <span>Study AI</span>
        </Link>
      </div>

      {/* Navigation Items */}
      <ScrollArea className="flex-1">
        <nav className="p-3 space-y-4">
          {navItems.map((section) => (
            <div key={section.title}>
              <h3 className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
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
                          "w-full justify-start gap-2 text-sm",
                          isActive(item.href) && "bg-primary text-primary-foreground hover:bg-primary"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <Separator className="mt-3" />
            </div>
          ))}
        </nav>
      </ScrollArea>

      {/* Logout Button */}
      <div className="p-3 border-t">
        <Button
          onClick={handleLogout}
          disabled={isLoading}
          variant="outline"
          className="w-full gap-2"
        >
          <LogOut className="w-4 h-4" />
          <span>{isLoading ? "Logging out..." : "Logout"}</span>
        </Button>
      </div>
    </div>
  );
};

export default SidebarNavigation;
