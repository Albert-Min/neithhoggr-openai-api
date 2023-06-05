import { Controller, Get } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Controller()
export class AppController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Get('/openai')
  async getOpenAIResponse(): Promise<string> {
    const prompt = 'Hello, OpenAI!';
    return await this.openaiService.callOpenAPI(prompt);
  }
}
