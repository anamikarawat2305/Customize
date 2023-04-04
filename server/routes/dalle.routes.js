import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config();
// routes are defined in a separate file and then imported into the main file
const router = express.Router();

// Create a new instance of the OpenAI API client with your API key from https://beta.openai.com/account/api-keys 
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

// some routes are defined in the main file- get , post, 
router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

// POST /api/v1/dalle - generate an image , pass the prompt from the client side to server
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;
// call the openai api to generate an image and return the image to the client side     
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;