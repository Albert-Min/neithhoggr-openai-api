import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Model {
  @Field()
  id: string;

  @Field()
  object: string;

  @Field()
  owned_by: string;

  @Field(() => [String], { nullable: true })
  permission?: string[];
}

@ObjectType()
export class ModelsResponse {
  @Field(() => [Model])
  data: Model[];

  @Field()
  object: string;
}
