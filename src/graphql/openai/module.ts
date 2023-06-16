import { Module } from '@nestjs/common';

import { OpenAIService } from '../../openai/openai.service';
import { CompletionsResolver } from './completion/completions.resolver';
import { ModelsResolver } from './model/models.resolver';

@Module({
  providers: [ModelsResolver, CompletionsResolver, OpenAIService],
})
export class OpenAIGQLModule {}
