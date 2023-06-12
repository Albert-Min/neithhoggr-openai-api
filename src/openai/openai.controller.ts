import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCompletionResponse } from 'openai';

import { CreateCompletionRequestDTO } from './openai.dto';
import { OpenAIService } from './openai.service';

const requestPath = 'openai';

@ApiTags(requestPath)
@Controller(requestPath)
export class OpenAIController {
  constructor(private readonly openaiService: OpenAIService) {}

  @Post('/prompt')
  @ApiResponse({
    status: 200,
    description: 'Response from openai api',
    type: String,
  })
  async getOpenAIPromotResponse(
    @Body()
    createCompletionRequest: CreateCompletionRequestDTO,
  ): Promise<string> {
    const createCompletionResponse: CreateCompletionResponse =
      await this.openaiService.createCompletion(createCompletionRequest);
    return createCompletionResponse.choices[0].text.trim();
  }
}
