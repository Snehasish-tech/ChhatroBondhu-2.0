import { useState, useRef } from "react";
import { Mic, Square, Play, Pause, Download, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "@/components/Header";

const VoiceNotes = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        const newRecording = {
          id: Date.now(),
          url,
          blob,
          duration: currentTime,
          timestamp: new Date().toLocaleString(),
          transcription: null,
        };
        setRecordings((prev) => [newRecording, ...prev]);
        setCurrentTime(0);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => prev + 1);
      }, 1000);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      alert("Please allow microphone access to record audio.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      if (isPaused) {
        mediaRecorderRef.current.resume();
        timerRef.current = setInterval(() => {
          setCurrentTime((prev) => prev + 1);
        }, 1000);
      } else {
        mediaRecorderRef.current.pause();
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      }
      setIsPaused(!isPaused);
    }
  };

  const downloadRecording = (recording) => {
    const a = document.createElement("a");
    a.href = recording.url;
    a.download = `recording-${recording.id}.webm`;
    a.click();
  };

  const transcribeAudio = async (recordingId) => {
    setIsTranscribing(true);
    // Simulating transcription (in real app, use Speech Recognition API or backend service)
    setTimeout(() => {
      setRecordings((prev) =>
        prev.map((rec) =>
          rec.id === recordingId
            ? {
                ...rec,
                transcription:
                  "This is a sample transcription. In a production app, this would use the Web Speech API or a backend service like Google Speech-to-Text or OpenAI Whisper.",
              }
            : rec
        )
      );
      setIsTranscribing(false);
    }, 2000);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Voice Notes & Audio
            </h1>
            <p className="text-muted-foreground text-lg">
              Record lectures, convert speech to text, and create audio summaries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recording Section */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Record Audio</h2>
              
              <div className="flex flex-col items-center space-y-6">
                {/* Timer Display */}
                <div className="text-6xl font-mono font-bold text-primary">
                  {formatTime(currentTime)}
                </div>

                {/* Recording Status */}
                {isRecording && (
                  <Badge variant={isPaused ? "secondary" : "destructive"} className="text-sm">
                    {isPaused ? "PAUSED" : "● RECORDING"}
                  </Badge>
                )}

                {/* Control Buttons */}
                <div className="flex gap-4">
                  {!isRecording ? (
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                      onClick={startRecording}
                    >
                      <Mic className="mr-2 h-5 w-5" />
                      Start Recording
                    </Button>
                  ) : (
                    <>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={pauseRecording}
                      >
                        {isPaused ? (
                          <>
                            <Play className="mr-2 h-5 w-5" />
                            Resume
                          </>
                        ) : (
                          <>
                            <Pause className="mr-2 h-5 w-5" />
                            Pause
                          </>
                        )}
                      </Button>
                      <Button
                        size="lg"
                        variant="destructive"
                        onClick={stopRecording}
                      >
                        <Square className="mr-2 h-5 w-5" />
                        Stop
                      </Button>
                    </>
                  )}
                </div>

                {/* Tips */}
                <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground w-full">
                  <p className="font-semibold mb-2">Recording Tips:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Speak clearly and at a moderate pace</li>
                    <li>Minimize background noise</li>
                    <li>Position microphone 6-12 inches away</li>
                    <li>Pause recording during breaks</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Recordings List */}
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">My Recordings</h2>
              
              <ScrollArea className="h-[500px] pr-4">
                {recordings.length === 0 ? (
                  <div className="text-center text-muted-foreground py-12">
                    <Mic className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No recordings yet</p>
                    <p className="text-sm">Start recording to see your audio files here</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {recordings.map((recording) => (
                      <Card key={recording.id} className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="font-semibold">Recording {recording.id}</p>
                            <p className="text-sm text-muted-foreground">
                              {recording.timestamp}
                            </p>
                          </div>
                          <Badge variant="secondary">
                            {formatTime(recording.duration)}
                          </Badge>
                        </div>

                        <audio controls className="w-full mb-3" src={recording.url} />

                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => downloadRecording(recording)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => transcribeAudio(recording.id)}
                            disabled={isTranscribing || recording.transcription}
                          >
                            {isTranscribing ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Transcribing...
                              </>
                            ) : (
                              <>
                                <FileText className="h-4 w-4 mr-2" />
                                {recording.transcription ? "Transcribed" : "Transcribe"}
                              </>
                            )}
                          </Button>
                        </div>

                        {recording.transcription && (
                          <div className="mt-3 p-3 bg-muted rounded-lg text-sm">
                            <p className="font-semibold mb-1">Transcription:</p>
                            <p className="text-muted-foreground">{recording.transcription}</p>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VoiceNotes;
