import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { OpenAIService } from '../../openai.service';
import { Completion } from './completion.model';
import { CreateCompletionInput } from './create-completion.input';

@Resolver()
export class CompletionsResolver {
  constructor(private openaiService: OpenAIService) {}

  @Mutation(() => Completion, {
    description: 'Creates a completion for the provided prompt and parameters.',
  })
  async createCompletion(@Args('input') input: CreateCompletionInput) {
    return await this.openaiService.createCompletion(input);
  }
}