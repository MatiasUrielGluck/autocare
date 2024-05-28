import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../config';
import { useDispatch, useSelector } from 'react-redux';
import { setResult } from '../store/searchResult/searchSlice';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const openai_test = async () => {


  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });

  console.warn(chatCompletion);
}


export const sampleLoader = (query) => {
  return query
}