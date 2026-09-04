import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { generateProceduralMusicWav } from './server/synth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for large payload (image uploads in base64)
  app.use(express.json({ limit: '12mb' }));
  app.use(express.urlencoded({ extended: true, limit: '12mb' }));

  // API Health Check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // AI Music Generation Endpoint
  app.post('/api/music/generate', async (req: Request, res: Response) => {
    try {
      const { prompt, type = 'soundtrack', imageData } = req.body;

      if (!prompt && !imageData) {
        return res.status(400).json({ error: 'Please provide a prompt or an image for music generation.' });
      }

      const cleanPrompt = prompt || 'Atmospheric cybernetic soundtrack inspired by this visual composition';
      const musicType = (type === 'jingle' || type === 'ambient' || type === 'soundtrack') ? type : 'soundtrack';

      let audioBase64 = '';
      let mimeType = 'audio/wav';
      let source = 'neural-lyria';

      // 1. Try Gemini Lyria Music Model if API key is provided
      if (process.env.GEMINI_API_KEY) {
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
          
          let contents: any;
          if (imageData) {
            // Extract pure base64 data and mimeType
            let cleanImgData = imageData;
            let imgMime = 'image/jpeg';
            if (imageData.startsWith('data:')) {
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
            model: 'lyria-3-clip-preview',
            contents,
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
        } catch (lyriaErr: any) {
          console.warn('Lyria API invocation encountered an issue or requires paid billing:', lyriaErr?.message || lyriaErr);
          // Fall back to our internal procedural synthesis engine
          source = 'neural-synth';
        }
      } else {
        source = 'neural-synth';
      }

      // If Lyria didn't output audio or had an error/no-key, use procedural audio generator
      if (!audioBase64) {
        audioBase64 = generateProceduralMusicWav({
          type: musicType,
          prompt: cleanPrompt,
        });
        mimeType = 'audio/wav';
      }

      return res.json({
        success: true,
        audioBase64,
        mimeType,
        source,
        prompt: cleanPrompt,
        type: musicType,
        title: `${musicType.toUpperCase()} // ${cleanPrompt.slice(0, 32)}...`,
        generatedAt: new Date().toISOString()
      });
    } catch (err: any) {
      console.error('Music generation endpoint error:', err);
      return res.status(500).json({
        error: 'Failed to generate music track. Please try again.',
        details: err?.message || String(err)
      });
    }
  });

  // Vite middleware in dev or static files in prod
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Portfolio server with AI Music Studio running on http://localhost:${PORT}`);
  });
}

startServer();
