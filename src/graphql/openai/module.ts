import { Module } from '@nestjs/common';

import { OpenAIService } from '../../openai/openai.service';
import { CompletionsResolver } from './completions.resolver';
import { ModelsResolver } from './models.resolver';

@Module({
  providers: [ModelsResolver, CompletionsResolver, OpenAIService],
})
export class OpenAIModule {}
