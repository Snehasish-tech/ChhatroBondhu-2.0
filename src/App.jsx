import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import StudyRoom from "./pages/StudyRoom";
import AIAssistant from "./pages/AIAssistant";
import FocusMode from "./pages/FocusMode";
import MentalHealth from "./pages/MentalHealth";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import VoiceNotes from "./pages/VoiceNotes";
import SmartSchedule from "./pages/SmartSchedule";
import HandwritingToDigital from "./pages/HandwritingToDigital";
import YouTubeStudy from "./pages/YouTubeStudy";
import ExamAnalyzer from "./pages/ExamAnalyzer";
import SmartReminders from "./pages/SmartReminders";
import StudySpotify from "./pages/StudySpotify";
import ThreeDVisualizations from "./pages/ThreeDVisualizations";
import ChallengeMode from "./pages/ChallengeMode";
import SmartFlashcards from "./pages/SmartFlashcards";
import AIQuizGenerator from "./pages/AIQuizGenerator";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/study-room" element={<StudyRoom />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/focus-mode" element={<FocusMode />} />
            <Route path="/mental-health" element={<MentalHealth />} />
            <Route path="/voice-notes" element={<VoiceNotes />} />
            <Route path="/smart-schedule" element={<SmartSchedule />} />
            <Route path="/handwriting-to-digital" element={<HandwritingToDigital />} />
            <Route path="/youtube-study" element={<YouTubeStudy />} />
            <Route path="/exam-analyzer" element={<ExamAnalyzer />} />
            <Route path="/smart-reminders" element={<SmartReminders />} />
            <Route path="/study-spotify" element={<StudySpotify />} />
            <Route path="/3d-visualizations" element={<ThreeDVisualizations />} />
            <Route path="/challenge-mode" element={<ChallengeMode />} />
            <Route path="/smart-flashcards" element={<SmartFlashcards />} />
            <Route path="/ai-quiz-generator" element={<AIQuizGenerator />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;