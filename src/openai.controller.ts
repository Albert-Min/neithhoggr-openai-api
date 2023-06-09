import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { OpenAIService } from './openai.service';

const requestPath = 'openai';

@ApiTags(requestPath)
@Controller(requestPath)
export class OpenAIController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Get('/prompt')
  @ApiResponse({
    status: 200,
    description: 'Response from openai api',
    type: String,
  })
  async getOpenAIPromotResponse(
    @Param('prompt') prompt: string,
  ): Promise<string> {
    return await this.openaiService.createCompletion(prompt);
  }
}
