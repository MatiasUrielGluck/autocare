import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../config';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../store/searchResult/searchSlice';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const openai_test = async (query) => {

  console.log("Calling GPT")
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Eres un mecanico experto en autos y respondes: ${query}` }],
    model: 'gpt-3.5-turbo',
  });


  if (chatCompletion.choices.length > 0) {
    let msg = chatCompletion.choices[0].message.content

    return msg
  }
}


export const sampleLoader = async (query) => {
  let response = await openai_test(query)
  return response
}