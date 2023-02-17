import { Configuration, OpenAIApi } from 'openai';
import { openai } from '../clients/OpenAI';
import { client } from '../clients/Redis';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);

  const {description, mood, uid} = await req.json();

  await client.connect();

  const tokenLeft = await client.get(uid as string);

  if (tokenLeft && parseInt(tokenLeft) <= 0) return {
    text: 'You do not have enough token',
    tokenUsed: 0,
    tokenLeft: tokenLeft,
  };

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    best_of: 1,
    max_tokens: 200,
    temperature: 0,
    prompt: `Generate a Twitter bio with the following description: ${description}; and the following mood: ${mood}`,
  });

  if (!tokenLeft) {
    await client.set(uid as string, 1000);
  }
  const tl = await client.decrBy(uid as string, 100);

  await client.disconnect();

  if (!response) return;

  return {
    text: response.data.choices[0].text,
    tokenUsed: response.data.usage?.total_tokens,
    tokenLeft: tl,
  };
};
