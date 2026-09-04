import React, { useState, useRef, useEffect } from 'react';
import {
  Music,
  X,
  Play,
  Pause,
  Upload,
  Sparkles,
  Download,
  Volume2,
  VolumeX,
  Radio,
  Image as ImageIcon,
  Disc3,
  Flame,
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { useCursor } from '../context/CursorContext';
import { generateClientMusicBlob } from '../utils/clientAudioSynth';

interface MusicTrack {
  audioUrl: string;
  blob: Blob;
  title: string;
  type: 'soundtrack' | 'jingle' | 'ambient';
  prompt: string;
  source: string;
  generatedAt: string;
}

interface MusicStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSetGlobalBackgroundMusic?: (audioUrl: string | null) => void;
  isGlobalPlaying?: boolean;
}

const PRESET_PROMPTS = {
  soundtrack: [
    'Cyberpunk Neo-Tokyo with deep sub-bass and pulsing analog arpeggios',
    'Cinematic sci-fi interstellar journey with swelling orchestral brass',
    'Dark synthwave highway chase with gated reverb drums and electric hook'
  ],
  jingle: [
    'Crisp 5-second tech startup logo chime with warm resonant glass bells',
    'Futuristic AI device activation stinger with upward pentatonic flourish',
    'Modern podcast intro stinger with upbeat punchy acoustic-electronic groove'
  ],
  ambient: [
    'Deep cosmic nebula drone with warm generative pads and gentle binaural hum',
    'Rainy cyberpunk night focus soundtrack with tape warmth and vinyl flutter',
    'Minimalist zen bamboo sanctuary with soft bells and breathing sine wave'
  ]
};

const PRESET_IMAGES = [
  {
    name: 'Cyberpunk City',
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&auto=format&fit=crop&q=60',
    desc: 'Neon rain & towering dark monoliths'
  },
  {
    name: 'Deep Nebula',
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60',
    desc: 'Vibrant galactic starfield & stellar clouds'
  },
  {
    name: 'Ember Core',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=60',
    desc: 'Warm obsidian lava & energetic amber glow'
  }
];

export const MusicStudioModal: React.FC<MusicStudioModalProps> = ({
  isOpen,
  onClose,
  onSetGlobalBackgroundMusic,
  isGlobalPlaying = false
}) => {
  const { setCursorMode, resetCursor } = useCursor();

  const [trackType, setTrackType] = useState<'soundtrack' | 'jingle' | 'ambient'>('soundtrack');
  const [prompt, setPrompt] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);

  // Audio Playback
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLoopingAsBg, setIsLoopingAsBg] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Sync audio play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration || 0);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  // Clean up object URLs
  useEffect(() => {
    return () => {
      if (currentTrack?.audioUrl) {
        URL.revokeObjectURL(currentTrack.audioUrl);
      }
    };
  }, [currentTrack]);

  if (!isOpen) return null;

  const handleSelectPreset = (p: string) => {
    setPrompt(p);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setImagePreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSelectPresetImage = async (imgUrl: string) => {
    setImagePreview(imgUrl);
    try {
      const resp = await fetch(imgUrl);
      const blob = await resp.blob();
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(blob);
    } catch {
      setImagePreview(imgUrl);
    }
  };

  const handleGenerate = async () => {
    if (!prompt && !imagePreview) {
      setPrompt(PRESET_PROMPTS[trackType][0]);
    }

    const finalPrompt = prompt || PRESET_PROMPTS[trackType][0];
    setIsGenerating(true);
    setStatusMessage(imagePreview ? 'Analyzing image palette & composing audio...' : 'Generating neural soundtrack...');

    try {
      const res = await fetch('/api/music/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: finalPrompt,
          type: trackType,
          imageData: imagePreview
        })
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${res.status}`);
      }

      const data = await res.json();
      const binaryString = atob(data.audioBase64);
      const len = binaryString.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: data.mimeType || 'audio/wav' });
      const url = URL.createObjectURL(blob);

      const newTrack: MusicTrack = {
        audioUrl: url,
        blob,
        title: data.title || `${trackType.toUpperCase()} // ${finalPrompt.slice(0, 24)}`,
        type: trackType,
        prompt: finalPrompt,
        source: data.source || 'neural',
        generatedAt: data.generatedAt || new Date().toISOString()
      };

      setCurrentTrack(newTrack);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.play().catch(() => {});
      }
      setStatusMessage('');
    } catch (err: any) {
      console.warn('Server generation unavailable, falling back to browser audio synthesis:', err);
      try {
        // Fallback for static hosting like GitHub Pages where /api/music/generate is not present
        const synth = generateClientMusicBlob({
          type: trackType,
          prompt: finalPrompt
        });

        const fallbackTrack: MusicTrack = {
          audioUrl: synth.url,
          blob: synth.blob,
          title: `${trackType.toUpperCase()} // ${finalPrompt.slice(0, 24)} (Browser Synth)`,
          type: trackType,
          prompt: finalPrompt,
          source: 'procedural',
          generatedAt: new Date().toISOString()
        };

        setCurrentTrack(fallbackTrack);
        setIsPlaying(true);
        if (audioRef.current) {
          audioRef.current.src = synth.url;
          audioRef.current.play().catch(() => {});
        }
        setStatusMessage('Synthesized via client audio engine (Static Mode).');
      } catch (fallbackErr: any) {
        setStatusMessage(err?.message || 'Generation failed. Please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    if (val > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  const handleDownload = () => {
    if (!currentTrack) return;
    const a = document.createElement('a');
    a.href = currentTrack.audioUrl;
    a.download = `saksham-ai-${currentTrack.type}-${Date.now()}.wav`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const toggleBackgroundLoop = () => {
    if (!currentTrack) return;
    const newState = !isLoopingAsBg;
    setIsLoopingAsBg(newState);
    if (onSetGlobalBackgroundMusic) {
      onSetGlobalBackgroundMusic(newState ? currentTrack.audioUrl : null);
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl bg-[#080808] border border-[#ffffff15] rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#121212] border-b border-[#ffffff10] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#ff4e00]/15 border border-[#ff4e00]/30 flex items-center justify-center text-[#ff4e00]">
              <Disc3 className="w-5 h-5 animate-[spin_8s_linear_infinite]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-[#e0d8d0] font-serif text-lg font-bold tracking-wide">
                  Neural Music Studio
                </h2>
                <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-[#ff4e00]/20 text-[#ff4e00] border border-[#ff4e00]/40">
                  Lyria & Synthesizer
                </span>
              </div>
              <p className="text-[#8e9299] text-xs">
                Compose custom soundtracks, jingles, and background music from text prompts or images
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#8e9299] hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Studio"
            onMouseEnter={() => setCursorMode('pointer', 'CLOSE')}
            onMouseLeave={resetCursor}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-[#8e9299]">
          {/* Category Tabs */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-widest text-[#8e9299] mb-2 font-semibold">
              01 // Choose Composition Archetype
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'soundtrack', label: 'Soundtrack', icon: Flame, desc: 'Cinematic & dynamic scores' },
                { id: 'jingle', label: 'Audio Jingle', icon: Sparkles, desc: 'Short 5s branded audio stingers' },
                { id: 'ambient', label: 'Background Music', icon: Radio, desc: 'Generative focus & lo-fi loops' }
              ].map((tab) => {
                const Icon = tab.icon;
                const active = trackType === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setTrackType(tab.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      active
                        ? 'bg-[#ff4e00]/15 border-[#ff4e00] text-[#e0d8d0] shadow-[0_0_20px_rgba(255,78,0,0.2)]'
                        : 'bg-[#ffffff05] border-[#ffffff10] text-[#8e9299] hover:border-[#ffffff25]'
                    }`}
                    onMouseEnter={() => setCursorMode('pointer', 'SELECT')}
                    onMouseLeave={resetCursor}
                  >
                    <div className="flex items-center gap-2 font-medium mb-0.5">
                      <Icon className={`w-4 h-4 ${active ? 'text-[#ff4e00]' : 'text-[#8e9299]'}`} />
                      <span className="text-xs text-[#e0d8d0] font-semibold">{tab.label}</span>
                    </div>
                    <p className="text-[10px] text-[#8e9299] hidden sm:block">{tab.desc}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Text Prompt Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[#8e9299] font-semibold">
                02 // Prompt Description
              </label>
              <span className="text-[10px] text-[#8e9299] font-mono">
                Multimodal Input Enabled
              </span>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={`Describe the audio mood, tempo, instruments, and emotional arc (e.g., "${PRESET_PROMPTS[trackType][0]}")`}
              rows={3}
              className="w-full bg-[#121212] border border-[#ffffff15] rounded-2xl p-3.5 text-xs text-[#e0d8d0] placeholder:text-[#555a64] focus:outline-none focus:border-[#ff4e00] transition-colors resize-none"
            />

            {/* Inspiration Chips */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              <span className="text-[10px] font-mono text-[#666a74] py-1 mr-1">Inspirations:</span>
              {PRESET_PROMPTS[trackType].map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPreset(preset)}
                  className="text-[10px] px-2.5 py-1 rounded-full bg-[#ffffff05] hover:bg-[#ffffff10] border border-[#ffffff10] text-[#b0b4bc] transition-colors text-left truncate max-w-xs"
                  onMouseEnter={() => setCursorMode('pointer', 'APPLY')}
                  onMouseLeave={resetCursor}
                >
                  {preset.slice(0, 38)}...
                </button>
              ))}
            </div>
          </div>

          {/* Multimodal Image Upload */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] font-mono uppercase tracking-widest text-[#8e9299] font-semibold">
                03 // Visual Inspiration (Optional Image-to-Music)
              </label>
              {imagePreview && (
                <button
                  onClick={() => setImagePreview(null)}
                  className="text-[10px] text-[#ff4e00] hover:underline"
                >
                  Clear Image
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
              {/* Drop / Select Image Area */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className={`p-4 rounded-2xl border border-dashed transition-all cursor-pointer flex items-center justify-center gap-3 text-center ${
                  imagePreview
                    ? 'border-[#ff4e00]/50 bg-[#ff4e00]/5'
                    : 'border-[#ffffff15] bg-[#121212] hover:border-[#ffffff30]'
                }`}
                onMouseEnter={() => setCursorMode('pointer', 'UPLOAD')}
                onMouseLeave={resetCursor}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileChange}
                  className="hidden"
                />
                {imagePreview ? (
                  <div className="flex items-center gap-3 w-full">
                    <img
                      src={imagePreview}
                      alt="Uploaded inspiration"
                      className="w-14 h-14 rounded-xl object-cover border border-[#ffffff20]"
                    />
                    <div className="text-left flex-1 truncate">
                      <div className="text-xs text-[#e0d8d0] font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff4e00]" /> Image Loaded
                      </div>
                      <p className="text-[10px] text-[#8e9299] truncate">Will influence harmonic color & tone</p>
                    </div>
                  </div>
                ) : (
                  <div className="py-2">
                    <ImageIcon className="w-6 h-6 text-[#8e9299] mx-auto mb-1" />
                    <span className="text-xs text-[#e0d8d0] font-medium block">Upload an image</span>
                    <span className="text-[10px] text-[#666a74]">PNG, JPG, WebP up to 10MB</span>
                  </div>
                )}
              </div>

              {/* Quick Image Inspiration Presets */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {PRESET_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectPresetImage(img.url)}
                    className="relative group rounded-xl overflow-hidden border border-[#ffffff15] flex-shrink-0 w-24 h-16 transition-all hover:scale-105"
                    title={img.name}
                    onMouseEnter={() => setCursorMode('pointer', 'SAMPLE')}
                    onMouseLeave={resetCursor}
                  >
                    <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex items-end p-1">
                      <span className="text-[9px] text-white font-mono truncate">{img.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Button & Status Message */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs">
              {statusMessage && (
                <span className="flex items-center gap-2 text-[#ff4e00] font-mono text-[11px] animate-pulse">
                  <Sparkles className="w-3.5 h-3.5" />
                  {statusMessage}
                </span>
              )}
            </div>

            <MagneticButton
              onClick={handleGenerate}
              disabled={isGenerating}
              cursorMode="pointer"
              cursorLabel="COMPOSE"
              intensity={0.35}
              maxDistance={10}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#ff4e00] hover:bg-[#ff621e] text-black font-mono font-bold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(255,78,0,0.5)] flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-black" />
                  Synthesizing Audio...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-black" />
                  Generate AI Track
                </>
              )}
            </MagneticButton>
          </div>

          {/* Generated Track Player & Visualizer */}
          {currentTrack && (
            <div className="p-5 rounded-3xl bg-[#121212] border border-[#ff4e00]/30 shadow-[0_0_40px_rgba(255,78,0,0.15)] space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <audio ref={audioRef} />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <MagneticButton
                    onClick={togglePlay}
                    cursorMode="pointer"
                    cursorLabel={isPlaying ? 'PAUSE' : 'PLAY'}
                    className="w-12 h-12 rounded-full bg-[#ff4e00] text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,78,0,0.4)] hover:scale-105 transition-transform"
                  >
                    {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </MagneticButton>

                  <div>
                    <h3 className="text-sm text-[#e0d8d0] font-bold tracking-wide">
                      {currentTrack.title}
                    </h3>
                    <p className="text-[11px] text-[#8e9299] font-mono">
                      Engine: <span className="text-[#ff4e00] uppercase font-bold">{currentTrack.source}</span> • Duration: {formatTime(duration)}
                    </p>
                  </div>
                </div>

                {/* Secondary Actions */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <MagneticButton
                    onClick={toggleBackgroundLoop}
                    cursorMode="pointer"
                    cursorLabel="LOOP BG"
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium border flex items-center gap-1.5 transition-colors ${
                      isLoopingAsBg
                        ? 'bg-[#ff4e00] text-black border-[#ff4e00]'
                        : 'bg-[#ffffff05] border-[#ffffff15] text-[#b0b4bc] hover:text-white'
                    }`}
                  >
                    <Radio className="w-3 h-3" />
                    {isLoopingAsBg ? 'Background Active' : 'Set as Background Music'}
                  </MagneticButton>

                  <MagneticButton
                    onClick={handleDownload}
                    cursorMode="pointer"
                    cursorLabel="DOWNLOAD"
                    className="p-2 rounded-full bg-[#ffffff05] border border-[#ffffff15] text-[#b0b4bc] hover:text-white transition-colors"
                    title="Download audio WAV"
                  >
                    <Download className="w-4 h-4" />
                  </MagneticButton>
                </div>
              </div>

              {/* Visualizer Waveform simulation */}
              <div className="h-10 w-full flex items-end gap-1 px-1 py-1 bg-black/40 rounded-xl overflow-hidden">
                {Array.from({ length: 48 }).map((_, idx) => {
                  const activeHeight = isPlaying
                    ? Math.max(15, (Math.sin(idx * 0.4 + currentTime * 8) * 0.5 + 0.5) * 90)
                    : 12;
                  return (
                    <div
                      key={idx}
                      className="flex-1 bg-[#ff4e00] rounded-full transition-[height] duration-75 opacity-80"
                      style={{ height: `${activeHeight}%` }}
                    />
                  );
                })}
              </div>

              {/* Scrubber & Volume */}
              <div className="flex items-center gap-3 text-[11px] font-mono text-[#8e9299]">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  min={0}
                  max={duration || 100}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  className="flex-1 h-1.5 bg-[#ffffff15] accent-[#ff4e00] rounded-lg appearance-none cursor-pointer"
                />
                <span>{formatTime(duration)}</span>

                <div className="flex items-center gap-1.5 ml-2">
                  <button onClick={toggleMute} className="text-[#8e9299] hover:text-white">
                    {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-16 h-1.5 bg-[#ffffff15] accent-[#ff4e00] rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
