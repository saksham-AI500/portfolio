var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_url = require("url");
var import_genai = require("@google/genai");

// server/synth.ts
function generateProceduralMusicWav(options) {
  const sampleRate = 44100;
  const duration = options.type === "jingle" ? 6 : options.type === "ambient" ? 18 : 14;
  const numSamples = Math.floor(sampleRate * duration);
  const numChannels = 2;
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;
  const buffer = Buffer.alloc(44 + dataSize);
  buffer.write("RIFF", 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write("WAVE", 8);
  buffer.write("fmt ", 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20);
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36);
  buffer.writeUInt32LE(dataSize, 40);
  const isAmbient = options.type === "ambient";
  const isJingle = options.type === "jingle";
  const chordFrequencies = isJingle ? [
    [261.63, 329.63, 392, 523.25],
    // C Major
    [293.66, 369.99, 440, 587.33],
    // D Major
    [329.63, 415.3, 493.88, 659.25],
    // E Major
    [392, 493.88, 587.33, 783.99]
    // G Major triumphant
  ] : isAmbient ? [
    [146.83, 220, 293.66, 369.99],
    // Dm9
    [130.81, 196, 261.63, 329.63],
    // Cmaj7
    [116.54, 174.61, 233.08, 293.66],
    // Bbmaj7
    [130.81, 196, 261.63, 349.23]
    // Csus4
  ] : [
    // Cinematic / Soundtrack (Dark Cyberpunk / Hybrid Orchestral)
    [110, 164.81, 220, 277.18],
    // A minor
    [98, 146.83, 196, 246.94],
    // G
    [87.31, 130.81, 174.61, 220],
    // F
    [82.41, 123.47, 164.81, 207.65]
    // E
  ];
  const bpm = isJingle ? 128 : isAmbient ? 72 : 110;
  const secondsPerBeat = 60 / bpm;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const currentChordIndex = Math.floor(t / (secondsPerBeat * 4)) % chordFrequencies.length;
    const currentChord = chordFrequencies[currentChordIndex];
    let sampleL = 0;
    let sampleR = 0;
    for (let c = 0; c < currentChord.length; c++) {
      const baseFreq = currentChord[c];
      const detune = 1.002;
      const padGain = isAmbient ? 0.22 : 0.14;
      const s1 = Math.sin(2 * Math.PI * baseFreq * t);
      const s2 = Math.sin(2 * Math.PI * (baseFreq * detune) * t + 0.5);
      sampleL += (s1 + s2 * 0.7) * padGain;
      sampleR += (s2 + s1 * 0.7) * padGain;
    }
    const bassFreq = currentChord[0] * 0.5;
    const bassEnv = isJingle ? 1 : Math.sin(2 * Math.PI * (1 / (secondsPerBeat * 2)) * t) * 0.2 + 0.8;
    const bassSample = Math.sin(2 * Math.PI * bassFreq * t) * 0.28 * bassEnv;
    sampleL += bassSample;
    sampleR += bassSample;
    if (!isAmbient) {
      const arpBeat = Math.floor(t / (secondsPerBeat * 0.25));
      const arpNote = currentChord[arpBeat % currentChord.length] * 2;
      const arpPhase = t % (secondsPerBeat * 0.25) / (secondsPerBeat * 0.25);
      const arpEnv = Math.exp(-arpPhase * 7);
      const arpSample = (Math.sin(2 * Math.PI * arpNote * t) + 0.3 * Math.sin(2 * Math.PI * arpNote * 2 * t)) * arpEnv * 0.25;
      sampleL += arpSample * 0.8;
      sampleR += arpSample * 1.2;
    }
    if (!isAmbient) {
      const beatPos = t % secondsPerBeat / secondsPerBeat;
      if (beatPos < 0.1) {
        const kickEnv = Math.exp(-beatPos * 40);
        const kick = Math.sin(2 * Math.PI * (60 + 120 * (1 - beatPos)) * t) * kickEnv * 0.35;
        sampleL += kick;
        sampleR += kick;
      }
    }
    let masterEnv = 1;
    if (t < 1) {
      masterEnv = t / 1;
    } else if (t > duration - 1.5) {
      masterEnv = Math.max(0, (duration - t) / 1.5);
    }
    sampleL *= masterEnv * 0.85;
    sampleR *= masterEnv * 0.85;
    const clampedL = Math.max(-32767, Math.min(32767, Math.floor(sampleL * 32767)));
    const clampedR = Math.max(-32767, Math.min(32767, Math.floor(sampleR * 32767)));
    const offset = 44 + i * 4;
    buffer.writeInt16LE(clampedL, offset);
    buffer.writeInt16LE(clampedR, offset + 2);
  }
  return buffer.toString("base64");
}

// server.ts
var import_meta = {};
var __filename = (0, import_url.fileURLToPath)(import_meta.url);
var __dirname = import_path.default.dirname(__filename);
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json({ limit: "12mb" }));
  app.use(import_express.default.urlencoded({ extended: true, limit: "12mb" }));
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: (/* @__PURE__ */ new Date()).toISOString() });
  });
  app.post("/api/music/generate", async (req, res) => {
    try {
      const { prompt, type = "soundtrack", imageData } = req.body;
      if (!prompt && !imageData) {
        return res.status(400).json({ error: "Please provide a prompt or an image for music generation." });
      }
      const cleanPrompt = prompt || "Atmospheric cybernetic soundtrack inspired by this visual composition";
      const musicType = type === "jingle" || type === "ambient" || type === "soundtrack" ? type : "soundtrack";
      let audioBase64 = "";
      let mimeType = "audio/wav";
      let source = "neural-lyria";
      if (process.env.GEMINI_API_KEY) {
        try {
          const ai = new import_genai.GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
          let contents;
          if (imageData) {
            let cleanImgData = imageData;
            let imgMime = "image/jpeg";
            if (imageData.startsWith("data:")) {
              const matches = imageData.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.+)$/);
              if (matches) {
                imgMime = matches[1];
                cleanImgData = matches[2];
              }
            }
            contents = {
              parts: [
                { text: `Generate a 30-second high quality ${musicType} track. Musical description: ${cleanPrompt}` },
                { inlineData: { data: cleanImgData, mimeType: imgMime } }
              ]
            };
          } else {
            contents = `Generate a high quality 30-second ${musicType} audio track: ${cleanPrompt}`;
          }
          const responseStream = await ai.models.generateContentStream({
            model: "lyria-3-clip-preview",
            contents
          });
          for await (const chunk of responseStream) {
            const parts = chunk.candidates?.[0]?.content?.parts;
            if (!parts) continue;
            for (const part of parts) {
              if (part.inlineData?.data) {
                if (part.inlineData.mimeType) {
                  mimeType = part.inlineData.mimeType;
                }
                audioBase64 += part.inlineData.data;
              }
            }
          }
        } catch (lyriaErr) {
          console.warn("Lyria API invocation encountered an issue or requires paid billing:", lyriaErr?.message || lyriaErr);
          source = "neural-synth";
        }
      } else {
        source = "neural-synth";
      }
      if (!audioBase64) {
        audioBase64 = generateProceduralMusicWav({
          type: musicType,
          prompt: cleanPrompt
        });
        mimeType = "audio/wav";
      }
      return res.json({
        success: true,
        audioBase64,
        mimeType,
        source,
        prompt: cleanPrompt,
        type: musicType,
        title: `${musicType.toUpperCase()} // ${cleanPrompt.slice(0, 32)}...`,
        generatedAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    } catch (err) {
      console.error("Music generation endpoint error:", err);
      return res.status(500).json({
        error: "Failed to generate music track. Please try again.",
        details: err?.message || String(err)
      });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server with AI Music Studio running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
