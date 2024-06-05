import type { NextApiRequest, NextApiResponse } from "next"
import {GoogleGenerativeAI} from "@google/generative-ai"

const apiKey = "AIzaSyAwscH2k9hViOTSoKTm7HUiCdyDUnYLWgI"
const genAI = new GoogleGenerativeAI(apiKey)

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  })

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const prompt = req.query.prompt

    if(!prompt) {
        return res.status(400).json({ error: "Prompt missing"})
    }

    if(prompt.length > 100) {
        return res.status(400).json({ error: "Prompt too long"})
    }

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
      
      async function run() {
        const parts = [
          {text: "input: block of text like synopsis from a movie, documentary, or series. it can also add a specific actor or producer that involved. a movie about astronaut that sent to gargantua blackhole but ended up trapped in 4th dimension"},
          {text: "output: movie, documentary, or series that match the description or similar to it. Limit the output to just 1 title, and a brief summary of the title's synopsis (50 words). "},
        ];
      
        const result = await model.generateContent({
          contents: [{ role: "user", parts }],
          generationConfig,
       
        });
        const output = result.response.text()

        res.status(200).json({output})
      }

      run()
}