import { PomodoroTimer } from "@/components/study-room/PomodoroTimer";
import { AmbientSounds } from "@/components/study-room/AmbientSounds";
import { DistractionBlocker } from "@/components/study-room/DistractionBlocker";
import { StudyStats } from "@/components/study-room/StudyStats";
import { TaskList } from "@/components/study-room/TaskList";
import { BookOpen } from "lucide-react";

export default function StudyRoom() {
  return (
    <div className="landing-page min-h-screen bg-gradient-to-br from-[#f9fdff] to-[#eef5fa]">
      <main className="container mx-auto px-4 py-8">
        
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#e8f4ff] px-4 py-1.5 border border-[#b8d5ea] text-sm font-medium text-[#0077b6] mb-4">
            <BookOpen className="h-4 w-4" />
            Focus Environment
          </div>
          <h1 className="text-3xl font-bold font-display text-[#0f2a3f] md:text-4xl">
            Study Room
          </h1>
          <p className="mt-2 text-[#284660] max-w-lg mx-auto">
            Create your perfect study environment with focus timer, ambient
            sounds, and distraction controls.
          </p>
        </div>

        {/* Stats Bar */}
        <StudyStats />

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            <PomodoroTimer />
            <TaskList />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <AmbientSounds />
            <DistractionBlocker />
          </div>
        </div>
      </main>
    </div>
  );
}
