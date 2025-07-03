import express, { Request, Response } from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/api/recomendar", async (req: Request, res: Response) => {
  const { mensagem } = req.body as { mensagem: string };

  try {
    const resposta = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: mensagem }],
      temperature: 0.7,
    });

    const texto = resposta.data.choices[0].message?.content || "Sem resposta.";
    res.json({ resposta: texto });
  } catch (error) {
    console.error("Erro na API OpenAI:", error);
    res.status(500).json({ erro: "Erro ao acessar a OpenAI." });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
