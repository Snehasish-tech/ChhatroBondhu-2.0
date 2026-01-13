import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Volume2,
  CloudRain,
  Wind,
  Flame,
  Coffee,
  TreePine,
  Bird,
  Waves,
  VolumeX,
} from "lucide-react";
import { cn } from "@/lib/utils";

const AMBIENT_SOUNDS = [
  { id: "rain", name: "Rain", icon: CloudRain, color: "text-blue-400" },
  { id: "wind", name: "Wind", icon: Wind, color: "text-slate-400" },
  { id: "fire", name: "Fireplace", icon: Flame, color: "text-orange-400" },
  { id: "cafe", name: "Café", icon: Coffee, color: "text-amber-600" },
  { id: "forest", name: "Forest", icon: TreePine, color: "text-green-500" },
  { id: "birds", name: "Birds", icon: Bird, color: "text-yellow-500" },
  { id: "waves", name: "Waves", icon: Waves, color: "text-cyan-400" },
];

export function AmbientSounds() {
  const [activeSounds, setActiveSounds] = useState({});
  const [masterVolume, setMasterVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = (soundId) => {
    setActiveSounds((prev) => {
      if (prev[soundId] !== undefined) {
        const { [soundId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [soundId]: 50 };
    });
  };

  const updateSoundVolume = (soundId, volume) => {
    setActiveSounds((prev) => ({
      ...prev,
      [soundId]: volume,
    }));
  };

  const activeCount = Object.keys(activeSounds).length;

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Volume2 className="h-5 w-5 text-primary" />
            Ambient Sounds
          </CardTitle>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMuted(!isMuted)}
            className="h-8 w-8"
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4 text-muted-foreground" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Master Volume */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground w-16">
            Master
          </span>

          <Slider
            value={[masterVolume]}
            onValueChange={(v) => setMasterVolume(v[0])}
            max={100}
            step={1}
            className="flex-1"
            disabled={isMuted}
          />

          <span className="text-sm text-muted-foreground w-8">
            {masterVolume}%
          </span>
        </div>

        {/* Sound Grid */}
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
          {AMBIENT_SOUNDS.map((sound) => {
            const isActive = activeSounds[sound.id] !== undefined;
            const Icon = sound.icon;

            return (
              <Button
                key={sound.id}
                variant="outline"
                size="icon"
                onClick={() => toggleSound(sound.id)}
                className={cn(
                  "h-12 w-full transition-all",
                  isActive &&
                    "bg-primary/10 border-primary/50 ring-1 ring-primary/30"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5",
                    isActive
                      ? sound.color
                      : "text-muted-foreground"
                  )}
                />
              </Button>
            );
          })}
        </div>

        {/* Active Sound Sliders */}
        {activeCount > 0 && (
          <div className="space-y-3 pt-2 border-t border-border/50">
            <p className="text-xs text-muted-foreground">
              Active sounds ({activeCount})
            </p>

            {AMBIENT_SOUNDS.filter(
              (s) => activeSounds[s.id] !== undefined
            ).map((sound) => {
              const Icon = sound.icon;

              return (
                <div
                  key={sound.id}
                  className="flex items-center gap-3"
                >
                  <Icon
                    className={cn("h-4 w-4", sound.color)}
                  />
                  <span className="text-sm w-16 truncate">
                    {sound.name}
                  </span>

                  <Slider
                    value={[activeSounds[sound.id]]}
                    onValueChange={(v) =>
                      updateSoundVolume(sound.id, v[0])
                    }
                    max={100}
                    step={1}
                    className="flex-1"
                    disabled={isMuted}
                  />
                </div>
              );
            })}
          </div>
        )}

        {activeCount === 0 && (
          <p className="text-center text-sm text-muted-foreground py-2">
            Tap sounds above to create your ambient mix
          </p>
        )}
      </CardContent>
    </Card>
  );
}
