/**
 * Client-Side Procedural Audio Synthesizer
 * Generates valid stereo 16-bit PCM WAV audio directly in the browser.
 * Works seamlessly on static hosts like GitHub Pages where no backend is present.
 */

export interface ClientSynthOptions {
  type: 'soundtrack' | 'jingle' | 'ambient';
  prompt: string;
}

export function generateClientMusicBlob(options: ClientSynthOptions): { blob: Blob; url: string; base64: string } {
  const sampleRate = 44100;
  const duration = options.type === 'jingle' ? 6 : options.type === 'ambient' ? 18 : 14;
  const numSamples = Math.floor(sampleRate * duration);
  const numChannels = 2;
  const bytesPerSample = 2; // 16-bit
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;

  const totalBufferSize = 44 + dataSize;
  const arrayBuffer = new ArrayBuffer(totalBufferSize);
  const view = new DataView(arrayBuffer);

  // Write ASCII string helper
  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  // RIFF header
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');

  // fmt subchunk
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, 16, true); // bits per sample

  // data subchunk
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  const isAmbient = options.type === 'ambient';
  const isJingle = options.type === 'jingle';

  const chordFrequencies = isJingle
    ? [
        [261.63, 329.63, 392.0, 523.25],
        [293.66, 369.99, 440.0, 587.33],
        [329.63, 415.3, 493.88, 659.25],
        [392.0, 493.88, 587.33, 783.99]
      ]
    : isAmbient
    ? [
        [146.83, 220.0, 293.66, 369.99],
        [130.81, 196.0, 261.63, 329.63],
        [116.54, 174.61, 233.08, 293.66],
        [130.81, 196.0, 261.63, 349.23]
      ]
    : [
        [110.0, 164.81, 220.0, 277.18],
        [98.0, 146.83, 196.0, 246.94],
        [87.31, 130.81, 174.61, 220.0],
        [82.41, 123.47, 164.81, 207.65]
      ];

  const chordDuration = duration / chordFrequencies.length;
  let offset = 44;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const chordIndex = Math.min(
      chordFrequencies.length - 1,
      Math.floor(t / chordDuration)
    );
    const currentChord = chordFrequencies[chordIndex];
    const localChordTime = t % chordDuration;

    let sampleL = 0;
    let sampleR = 0;

    for (let c = 0; c < currentChord.length; c++) {
      const freq = currentChord[c];
      const phaseL = 2 * Math.PI * freq * t;
      const phaseR = 2 * Math.PI * (freq * 1.002) * t + 0.15 * c;

      const oscL = Math.sin(phaseL) + 0.25 * Math.sin(phaseL * 2) + 0.08 * Math.sin(phaseL * 3);
      const oscR = Math.sin(phaseR) + 0.25 * Math.sin(phaseR * 2) + 0.08 * Math.sin(phaseR * 3);

      const amp = 1 / (c + 1.3);
      sampleL += oscL * amp;
      sampleR += oscR * amp;
    }

    if (!isAmbient) {
      const beatFreq = isJingle ? 4 : 2;
      const beatTime = (t * beatFreq) % 1;
      const kickEnvelope = Math.exp(-beatTime * 14);
      const kickFreq = 90 * Math.exp(-beatTime * 20) + 38;
      const kick = Math.sin(2 * Math.PI * kickFreq * t) * kickEnvelope * 0.7;

      sampleL += kick;
      sampleR += kick;
    }

    const fadeIn = Math.min(1, t / 0.8);
    const fadeOut = Math.min(1, (duration - t) / 1.5);
    const masterEnv = fadeIn * fadeOut * 0.42;

    sampleL *= masterEnv;
    sampleR *= masterEnv;

    sampleL = Math.max(-1, Math.min(1, sampleL));
    sampleR = Math.max(-1, Math.min(1, sampleR));

    const intSampleL = Math.floor(sampleL * 32767);
    const intSampleR = Math.floor(sampleR * 32767);

    view.setInt16(offset, intSampleL, true);
    view.setInt16(offset + 2, intSampleR, true);
    offset += 4;
  }

  const blob = new Blob([arrayBuffer], { type: 'audio/wav' });
  const url = URL.createObjectURL(blob);

  // Convert to base64
  let binary = '';
  const bytes = new Uint8Array(arrayBuffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);

  return { blob, url, base64 };
}
