import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Model {
  @Field()
  id: string;

  @Field()
  object: string;

  @Field()
  owned_by: string;

  @Field(() => [Permission], { nullable: true })
  permission?: Permission[];
}

@ObjectType()
export class ModelsResponse {
  @Field(() => [Model])
  data: Model[];

  @Field()
  object: string;
}

@ObjectType()
export class Permission {
  @Field()
  id: string;

  @Field()
  object: string;

  @Field()
  created: number;

  @Field()
  allow_create_engine: boolean;

  @Field()
  allow_sampling: boolean;

  @Field()
  allow_logprobs: boolean;

  @Field()
  allow_search_indices: boolean;

  @Field()
  allow_view: boolean;

  @Field()
  allow_fine_tuning: boolean;

  @Field()
  organization: string;

  @Field({ nullable: true })
  group: string;

  @Field()
  is_blocking: boolean;
}
