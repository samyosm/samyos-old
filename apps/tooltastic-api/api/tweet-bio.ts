import type { VercelRequest, VercelResponse } from '@vercel/node';

import { client } from '../clients/Redis';
import { openai } from '../clients/OpenAI';

const DEFAULT_AUTHORIZED_TOKENS = 1000;

type TweetBioCompletionParams = {
  description: string;
  tone: string;
};

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {

  const { description, tone } = JSON.parse(request.body) as TweetBioCompletionParams;

  const ip = request.headers['x-forwarded-for'] as string;

  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  console.log(description, tone, ip)

  await client.connect();

  const idTokenLeft = await client.get(ip);

  const value = parseInt(idTokenLeft || `${DEFAULT_AUTHORIZED_TOKENS}`);

  if (value <= 0) {
    await client.disconnect();
    throw 'No more tokens';
  }

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Write a twitter bio with the following description: "${description}" and the following tone: "${tone}."`,
    max_tokens: 200,
    best_of: 1,
    temperature: 0,
  });

  const tokenUsed = completion.data.usage?.total_tokens;

  if (!tokenUsed) throw 'No token used';

  await client.set(ip, value - tokenUsed);

  await client.disconnect();

  return response.status(200).json({
    bio: completion.data.choices[0].text,
    tokenUsed: tokenUsed,
    tokenLeft: value - tokenUsed,
  });
}
