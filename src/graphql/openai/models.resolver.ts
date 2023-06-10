import { Args, Query, Resolver } from '@nestjs/graphql';

import { OpenAIService } from '../../openai.service';
import { Model, ModelsResponse } from './model';

@Resolver(() => Model)
export class ModelsResolver {
  constructor(private openaiService: OpenAIService) {}

  @Query(() => ModelsResponse)
  async models(): Promise<ModelsResponse> {
    return await this.openaiService.listModels();
  }

  @Query(() => Model)
  async model(@Args('id') id: string): Promise<Model> {
    return await this.openaiService.retrieveModel(id);
  }
}
