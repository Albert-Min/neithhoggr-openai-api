import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';
import { OPENAI_API_KEY } from './environment';
import * as console from 'console';

@Injectable()
export class OpenAIService {
  private openai;

  constructor() {
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async callOpenAPI(prompt: string): Promise<string> {
    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 100,
        temperature: 0,
      });
      console.log(response);
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  }
}
