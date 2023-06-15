import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/graphql/auth/gql-auth.guard';

import { OpenAIService } from '../../../openai/openai.service';
import { Model, ModelsResponse } from './model';

@Resolver(() => Model)
export class ModelsResolver {
  constructor(private openaiService: OpenAIService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => ModelsResponse, {
    description: 'Lists the currently available models.',
  })
  async models() {
    return await this.openaiService.listModels();
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => Model, { description: 'Retrieves a model instance.' })
  async model(
    @Args('id', { description: 'The ID of the model to retrieve.' }) id: string,
  ) {
    return await this.openaiService.retrieveModel(id);
  }
}
