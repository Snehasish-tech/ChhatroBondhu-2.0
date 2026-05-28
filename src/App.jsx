import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { featureFlags } from "@/lib/featureFlags";
import ScrollToTop from "@/components/ScrollToTop";
import ProtectedLayout from "@/components/ProtectedLayout";
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
import CGPACalculator from "./pages/CGPACalculator";
import NotesSharing from "./pages/NotesSharing";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ScrollToTop />
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />

            {/* Protected Routes with Sidebar */}
            {featureFlags.dashboard && (
              <Route
                path="/dashboard"
                element={
                  <ProtectedLayout>
                    <Dashboard />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.studyRoom && (
              <Route
                path="/study-room"
                element={
                  <ProtectedLayout>
                    <StudyRoom />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.aiAssistant && (
              <Route
                path="/ai-assistant"
                element={
                  <ProtectedLayout>
                    <AIAssistant />
                  </ProtectedLayout>
                }
              />
            )}
            {/* Focus Mode is part of the Study Room feature */}
            {featureFlags.studyRoom && (
              <Route
                path="/focus-mode"
                element={
                  <ProtectedLayout>
                    <FocusMode />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.mentalHealthTracker && (
              <Route
                path="/mental-health"
                element={
                  <ProtectedLayout>
                    <MentalHealth />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.voiceNotes && (
              <Route
                path="/voice-notes"
                element={
                  <ProtectedLayout>
                    <VoiceNotes />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.smartSchedule && (
              <Route
                path="/smart-schedule"
                element={
                  <ProtectedLayout>
                    <SmartSchedule />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.handwritingToDigital && (
              <Route
                path="/handwriting-to-digital"
                element={
                  <ProtectedLayout>
                    <HandwritingToDigital />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.youtubeAnalyzer && (
              <Route
                path="/youtube-study"
                element={
                  <ProtectedLayout>
                    <YouTubeStudy />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.examAnalyzer && (
              <Route
                path="/exam-analyzer"
                element={
                  <ProtectedLayout>
                    <ExamAnalyzer />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.smartReminders && (
              <Route
                path="/smart-reminders"
                element={
                  <ProtectedLayout>
                    <SmartReminders />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.studySpotify && (
              <Route
                path="/study-spotify"
                element={
                  <ProtectedLayout>
                    <StudySpotify />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.threeDVisualizations && (
              <Route
                path="/3d-visualizations"
                element={
                  <ProtectedLayout>
                    <ThreeDVisualizations />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.challengeMode && (
              <Route
                path="/challenge-mode"
                element={
                  <ProtectedLayout>
                    <ChallengeMode />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.smartFlashcards && (
              <Route
                path="/smart-flashcards"
                element={
                  <ProtectedLayout>
                    <SmartFlashcards />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.aiQuizGenerator && (
              <Route
                path="/ai-quiz-generator"
                element={
                  <ProtectedLayout>
                    <AIQuizGenerator />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.cgpaCalculator && (
              <Route
                path="/cgpa-calculator"
                element={
                  <ProtectedLayout>
                    <CGPACalculator />
                  </ProtectedLayout>
                }
              />
            )}
            {featureFlags.notesSharing && (
              <Route
                path="/notes-sharing"
                element={
                  <ProtectedLayout>
                    <NotesSharing />
                  </ProtectedLayout>
                }
              />
            )}

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;