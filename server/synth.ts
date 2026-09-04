/**
 * Procedural Audio Synthesizer
 * Generates valid stereo 16-bit PCM WAV audio for Ambient, Soundtrack, and Jingle tracks.
 * Used as an immediate high-fidelity generator & graceful fallback when Lyria requires paid quotas.
 */

export interface SynthOptions {
  type: 'soundtrack' | 'jingle' | 'ambient';
  prompt: string;
  durationSeconds?: number;
}

export function generateProceduralMusicWav(options: SynthOptions): string {
  const sampleRate = 44100;
  const duration = options.type === 'jingle' ? 6 : options.type === 'ambient' ? 18 : 14;
  const numSamples = Math.floor(sampleRate * duration);
  const numChannels = 2;
  const bytesPerSample = 2; // 16-bit
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;

  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF Chunk Descriptor
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // "fmt " sub-chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Subchunk1Size for PCM
  buffer.writeUInt16LE(1, 20);  // AudioFormat 1 = PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // BitsPerSample

  // "data" sub-chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Musical scales based on style
  // Root = D (146.83 Hz) or C (130.81 Hz)
  const isAmbient = options.type === 'ambient';
  const isJingle = options.type === 'jingle';

  // Chord progression frequencies (Hz)
  const chordFrequencies = isJingle
    ? [
        [261.63, 329.63, 392.00, 523.25], // C Major
        [293.66, 369.99, 440.00, 587.33], // D Major
        [329.63, 415.30, 493.88, 659.25], // E Major
        [392.00, 493.88, 587.33, 783.99], // G Major triumphant
      ]
    : isAmbient
    ? [
        [146.83, 220.00, 293.66, 369.99], // Dm9
        [130.81, 196.00, 261.63, 329.63], // Cmaj7
        [116.54, 174.61, 233.08, 293.66], // Bbmaj7
        [130.81, 196.00, 261.63, 349.23], // Csus4
      ]
    : [
        // Cinematic / Soundtrack (Dark Cyberpunk / Hybrid Orchestral)
        [110.00, 164.81, 220.00, 277.18], // A minor
        [98.00, 146.83, 196.00, 246.94],  // G
        [87.31, 130.81, 174.61, 220.00],  // F
        [82.41, 123.47, 164.81, 207.65],  // E
      ];

  const bpm = isJingle ? 128 : isAmbient ? 72 : 110;
  const secondsPerBeat = 60 / bpm;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const currentChordIndex = Math.floor(t / (secondsPerBeat * 4)) % chordFrequencies.length;
    const currentChord = chordFrequencies[currentChordIndex];

    let sampleL = 0;
    let sampleR = 0;

    // 1. Warm lush pad layer (Detuned sines & soft triangles)
    for (let c = 0; c < currentChord.length; c++) {
      const baseFreq = currentChord[c];
      const detune = 1.002;
      const padGain = isAmbient ? 0.22 : 0.14;
      const s1 = Math.sin(2 * Math.PI * baseFreq * t);
      const s2 = Math.sin(2 * Math.PI * (baseFreq * detune) * t + 0.5);
      sampleL += (s1 + s2 * 0.7) * padGain;
      sampleR += (s2 + s1 * 0.7) * padGain;
    }

    // 2. Bass layer
    const bassFreq = currentChord[0] * 0.5;
    const bassEnv = isJingle ? 1.0 : Math.sin(2 * Math.PI * (1 / (secondsPerBeat * 2)) * t) * 0.2 + 0.8;
    const bassSample = Math.sin(2 * Math.PI * bassFreq * t) * 0.28 * bassEnv;
    sampleL += bassSample;
    sampleR += bassSample;

    // 3. Arpeggiator / Melody layer
    if (!isAmbient) {
      const arpBeat = Math.floor(t / (secondsPerBeat * 0.25));
      const arpNote = currentChord[arpBeat % currentChord.length] * 2;
      const arpPhase = (t % (secondsPerBeat * 0.25)) / (secondsPerBeat * 0.25);
      const arpEnv = Math.exp(-arpPhase * 7); // Pluck envelope
      const arpSample = (Math.sin(2 * Math.PI * arpNote * t) + 0.3 * Math.sin(2 * Math.PI * arpNote * 2 * t)) * arpEnv * 0.25;
      sampleL += arpSample * 0.8;
      sampleR += arpSample * 1.2; // Stereo spread
    }

    // 4. Subtle rhythmic pulse for Soundtrack / Jingle
    if (!isAmbient) {
      const beatPos = (t % secondsPerBeat) / secondsPerBeat;
      if (beatPos < 0.1) {
        // Soft kick / pulse
        const kickEnv = Math.exp(-beatPos * 40);
        const kick = Math.sin(2 * Math.PI * (60 + 120 * (1 - beatPos)) * t) * kickEnv * 0.35;
        sampleL += kick;
        sampleR += kick;
      }
    }

    // Master Fade in (1s) & Fade out (1.5s)
    let masterEnv = 1.0;
    if (t < 1.0) {
      masterEnv = t / 1.0;
    } else if (t > duration - 1.5) {
      masterEnv = Math.max(0, (duration - t) / 1.5);
    }

    sampleL *= masterEnv * 0.85;
    sampleR *= masterEnv * 0.85;

    // Clamp to 16-bit signed range [-32768, 32767]
    const clampedL = Math.max(-32767, Math.min(32767, Math.floor(sampleL * 32767)));
    const clampedR = Math.max(-32767, Math.min(32767, Math.floor(sampleR * 32767)));

    const offset = 44 + i * 4;
    buffer.writeInt16LE(clampedL, offset);
    buffer.writeInt16LE(clampedR, offset + 2);
  }

  return buffer.toString('base64');
}
