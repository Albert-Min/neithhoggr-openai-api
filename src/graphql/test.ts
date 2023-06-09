import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';

@ObjectType() // Decorate the class as an ObjectType
class YourQueryType {
  @Field() // Decorate the field as a GraphQL field
  yourQuery(): string {
    return 'Hello, world!'; // Implement the resolver logic
  }
}

@Resolver() // Decorate the class as a Resolver
export class YourResolver {
  @Query(() => YourQueryType) // Decorate the resolver method with @Query
  yourQuery(): YourQueryType {
    return new YourQueryType();
  }
}
