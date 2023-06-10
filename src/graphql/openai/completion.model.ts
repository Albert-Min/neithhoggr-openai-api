import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Completion {
  // Define the fields of the Completion object here
  // based on the response of the OpenAI API
}

@ObjectType()
export class CreateCompletionResponse {
  @Field(() => Completion)
  data: Completion;

  @Field()
  object: string;
}
