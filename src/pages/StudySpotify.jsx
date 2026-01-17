import { useState } from "react";
import { Music, Play, Pause, SkipForward, Volume2, Clock, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const StudySpotify = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  const [volume, setVolume] = useState([70]);

  const playlists = [
    {
      id: 1,
      name: "Deep Focus",
      mood: "Concentrated",
      tracks: 50,
      duration: "3h 20m",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400",
      description: "Ambient and post-rock music for deep concentration",
    },
    {
      id: 2,
      name: "Math & Logic",
      mood: "Analytical",
      tracks: 42,
      duration: "2h 45m",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400",
      description: "Classical and instrumental for problem-solving",
    },
    {
      id: 3,
      name: "Creative Flow",
      mood: "Inspired",
      tracks: 38,
      duration: "2h 30m",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
      description: "Uplifting music for creative tasks",
    },
    {
      id: 4,
      name: "Memory Boost",
      mood: "Learning",
      tracks: 45,
      duration: "3h 00m",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
      description: "Binaural beats and ambient for memory retention",
    },
  ];

  const moodCategories = [
    { name: "Focus", color: "bg-blue-500", playlists: 12 },
    { name: "Relaxed", color: "bg-green-500", playlists: 8 },
    { name: "Energized", color: "bg-orange-500", playlists: 10 },
    { name: "Calm", color: "bg-purple-500", playlists: 6 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
              Study Spotify Integration
            </h1>
            <p className="text-muted-foreground text-lg">
              Curated study playlists that adapt to your focus level
            </p>
          </div>

          <Tabs defaultValue="playlists" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="playlists">Playlists</TabsTrigger>
              <TabsTrigger value="moods">By Mood</TabsTrigger>
            </TabsList>

            <TabsContent value="playlists" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {playlists.map((playlist) => (
                  <Card
                    key={playlist.id}
                    className="cursor-pointer overflow-hidden group hover:shadow-lg transition-all"
                    onClick={() => {
                      setCurrentPlaylist(playlist);
                      setIsPlaying(true);
                    }}
                  >
                    <div className="aspect-square bg-muted overflow-hidden relative">
                      <img
                        src={playlist.image}
                        alt={playlist.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{playlist.name}</h3>
                      <Badge variant="secondary" className="mb-2">
                        {playlist.mood}
                      </Badge>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {playlist.description}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{playlist.tracks} tracks</span>
                        <span>•</span>
                        <span>{playlist.duration}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="moods" className="space-y-4">
              {moodCategories.map((mood) => (
                <Card key={mood.name} className="p-6 cursor-pointer hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full ${mood.color} flex items-center justify-center`}>
                        <Brain className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{mood.name} Mode</h3>
                        <p className="text-sm text-muted-foreground">
                          {mood.playlists} playlists available
                        </p>
                      </div>
                    </div>
                    <Button variant="outline">
                      Explore
                    </Button>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>

          {/* Now Playing */}
          {currentPlaylist && (
            <Card className="p-6 mt-6 bg-gradient-to-r from-green-600/10 to-green-500/10">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <img
                      src={currentPlaylist.image}
                      alt={currentPlaylist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{currentPlaylist.name}</h3>
                    <p className="text-sm text-muted-foreground">{currentPlaylist.mood}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button variant="ghost" size="icon">
                    <SkipForward className="h-5 w-5 rotate-180" />
                  </Button>
                  <Button
                    size="icon"
                    className="h-12 w-12 bg-green-600 hover:bg-green-700"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6" />
                    )}
                  </Button>
                  <Button variant="ghost" size="icon">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center gap-3">
                  <Volume2 className="h-5 w-5 text-muted-foreground" />
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                  <span className="text-sm text-muted-foreground w-12">{volume}%</span>
                </div>
              </div>
            </Card>
          )}

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Time Listened</p>
                  <p className="text-2xl font-bold">12h 34m</p>
                </div>
                <Clock className="h-8 w-8 text-primary opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Playlists Played</p>
                  <p className="text-2xl font-bold">28</p>
                </div>
                <Music className="h-8 w-8 text-green-500 opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Focus Sessions</p>
                  <p className="text-2xl font-bold">45</p>
                </div>
                <Brain className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudySpotify;
