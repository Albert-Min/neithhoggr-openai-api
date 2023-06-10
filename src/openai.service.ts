import { Injectable } from '@nestjs/common';
import * as console from 'console';
import { Configuration, ListModelsResponse, Model, OpenAIApi } from 'openai';

import { OPENAI_API_KEY } from './environment';

@Injectable()
export class OpenAIService {
  private openai;

  constructor() {
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  async createCompletion(prompt: string): Promise<string> {
    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt,
        max_tokens: 100,
        temperature: 0,
      });
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  }

  async retrieveModel(id: string): Promise<Model> {
    try {
      const response = await this.openai.retrieveModel(id);
      return response.data;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  }

  async listModels(): Promise<ListModelsResponse> {
    try {
      const response = await this.openai.listModels();
      return response.data;
    } catch (error) {
      console.error('OpenAI API Error:', error);
      throw error;
    }
  }
}
