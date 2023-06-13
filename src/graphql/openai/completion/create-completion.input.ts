import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCompletionInput {
  @Field({ description: 'ID of the model to use.' })
  model: string;

  @Field({
    description: 'The prompt(s) to generate completions for.',
  })
  prompt: string;

  @Field({
    nullable: true,
    description: 'The suffix that comes after a completion of inserted text.',
  })
  suffix?: string;

  @Field({
    nullable: true,
    description: 'The maximum number of tokens to generate in the completion.',
  })
  max_tokens?: number;

  @Field({
    nullable: true,
    description: 'What sampling temperature to use, between 0 and 2.',
  })
  temperature?: number;

  @Field({
    nullable: true,
    description:
      'An alternative to sampling with temperature, called nucleus sampling.',
  })
  top_p?: number;

  @Field({
    nullable: true,
    description: 'How many completions to generate for each prompt.',
  })
  n?: number;

  //  @Field({
  //    nullable: true,
  //    description: 'Whether to stream back partial progress.',
  //  })
  //  stream?: boolean;

  @Field({
    nullable: true,
    description:
      'Include the log probabilities on the logprobs most likely tokens.',
  })
  logprobs?: number;

  @Field({
    nullable: true,
    description: 'Echo back the prompt in addition to the completion.',
  })
  echo?: boolean;

  @Field(() => [String], {
    nullable: true,
    description:
      'Up to 4 sequences where the API will stop generating further tokens.',
  })
  stop?: string[];

  @Field({
    nullable: true,
    description:
      'Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far.',
  })
  presence_penalty?: number;

  @Field({
    nullable: true,
    description:
      'Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far.',
  })
  frequency_penalty?: number;

  @Field({
    nullable: true,
    description:
      'Generates best_of completions server-side and returns the "best" (the one with the highest log probability per token).',
  })
  best_of?: number;

  @Field(() => [String], {
    nullable: true,
    description:
      'Modify the likelihood of specified tokens appearing in the completion.',
  })
  logit_bias?: string[];

  @Field({
    nullable: true,
    description: 'A unique identifier representing your end-user.',
  })
  user?: string;
}
