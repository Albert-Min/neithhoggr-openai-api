import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CreateCompletionResponse } from './completion.model';
import { CreateCompletionInput } from './create-completion.input';

@Resolver()
export class CompletionsResolver {
  @Mutation(() => CreateCompletionResponse, {
    description: 'Creates a completion for the provided prompt and parameters.',
  })
  async createCompletion(@Args('input') input: CreateCompletionInput) {
    // Call the OpenAI API to create the completion
  }
}
