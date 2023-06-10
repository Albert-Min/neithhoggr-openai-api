import { Args, Query, Resolver } from '@nestjs/graphql';

import { OpenAIService } from '../../openai.service';
import { Model, ModelsResponse } from './model';

@Resolver(() => Model)
export class ModelsResolver {
  constructor(private openaiService: OpenAIService) {}

  @Query(() => ModelsResponse, {
    description: 'Lists the currently available models.',
  })
  async models() {
    return await this.openaiService.listModels();
  }

  @Query(() => Model, { description: 'Retrieves a model instance.' })
  async model(
    @Args('id', { description: 'The ID of the model to retrieve.' }) id: string,
  ) {
    return await this.openaiService.retrieveModel(id);
  }
}
