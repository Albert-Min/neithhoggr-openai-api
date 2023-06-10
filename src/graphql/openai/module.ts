import { Module } from '@nestjs/common';

import { OpenAIService } from '../../openai.service';
import { ModelsResolver } from './models.resolver';

@Module({
  providers: [ModelsResolver, OpenAIService],
})
export class OpenAIModule {}
