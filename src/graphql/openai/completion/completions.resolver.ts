import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/graphql/auth/gql-auth.guard';

import { OpenAIService } from '../../../openai/openai.service';
import { Completion } from './completion.model';
import { CreateCompletionInput } from './create-completion.input';

@Resolver()
export class CompletionsResolver {
  constructor(private openaiService: OpenAIService) {}

  @UseGuards(GqlAuthGuard)
  @Mutation(() => Completion, {
    description: 'Creates a completion for the provided prompt and parameters.',
  })
  async createCompletion(@Args('input') input: CreateCompletionInput) {
    return await this.openaiService.createCompletion(input);
  }
}
