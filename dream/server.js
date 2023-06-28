import * as dotenv from 'dotenv';

// Allows us to use environment variables in .env file
dotenv.config();

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI,
});

const openai = new OpenAIApi(configuration);

import express from 'express';
import cors from 'cors';

// Configure middleware
const app = express();
app.use(cors());
app.use(express.json()); // tells our API to accept JSON as body data

// Define routes
app.post('/dream', async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
    });

    const image = aiResponse.data.data[0].url;
    res.send({ image });
  }
  catch (error) {
    console.error(error);
    res.status(500).send(
      error?.response.data.error.message ||
      'Something went wrong'
    );
  }
});

// Start server
app.listen(8080, () => console.log('make art on http://localhost:8080/dream'));
