import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Choice {
  @Field()
  text: string;

  @Field()
  index: number;

  @Field({ nullable: true })
  logprobs?: number;

  @Field()
  finish_reason: string;
}

@ObjectType()
export class Usage {
  @Field()
  prompt_tokens: number;

  @Field()
  completion_tokens: number;

  @Field()
  total_tokens: number;
}

@ObjectType()
export class Completion {
  @Field()
  id: string;

  @Field()
  object: string;

  @Field()
  created: number;

  @Field()
  model: string;

  @Field(() => [Choice])
  choices: Choice[];

  @Field(() => Usage)
  usage: Usage;
}
