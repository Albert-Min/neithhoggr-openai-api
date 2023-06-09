import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { YourResolver } from './graphql/test';
import { OpenAIController } from './openai.controller';
import { OpenAIService } from './openai.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
  ],
  controllers: [AppController, OpenAIController],
  providers: [OpenAIService, YourResolver],
})
export class AppModule {}
