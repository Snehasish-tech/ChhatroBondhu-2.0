/**
 * Centralized feature flags for the Unilife 2.0 application.
 * Set a feature to `true` to enable it, or `false` to disable it.
 */
export const featureFlags = {
  // --- Core Features ---
  dashboard: true,
  aiAssistant: false, // Temporarily Disabled

  // --- Main Features (Currently Enabled) ---
  studyRoom: true, // Pomodoro, Focus Mode etc.
  smartSchedule: true,
  notesSharing: true,

  // --- Academic Tools (Currently Enabled) ---
  // This can be a parent flag for a menu category
  academicTools: true,
  cgpaCalculator: true,
  smartReminders: true,

  // --- Temporarily Disabled Features ---
  voiceNotes: false,
  youtubeAnalyzer: false,
  smartFlashcards: false,
  handwritingToDigital: false,
  examAnalyzer: false,
  mentalHealthTracker: false,
  challengeMode: false,
  studySpotify: false,
  threeDVisualizations: false,
  aiQuizGenerator: false,
};
