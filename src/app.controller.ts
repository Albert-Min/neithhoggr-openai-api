import { Controller, Get, Param } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Get('/openai')
  @ApiResponse({
    status: 200,
    description: 'Response from openai api',
    type: String,
  })
  async getOpenAIResponse(@Param('prompt') prompt: string): Promise<string> {
    return await this.openaiService.callOpenAPI(prompt);
  }

  @Get('/heartbeat')
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: String,
  })
  getHeartbeat(): string {
    return 'OK';
  }
}
