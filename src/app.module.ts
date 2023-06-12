import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { OpenAIModule } from './graphql/openai/module';
import { HealthModule } from './health/health.module';
import { OpenAIController } from './openai/openai.controller';
import { OpenAIService } from './openai/openai.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    OpenAIModule,
    HealthModule,
  ],
  controllers: [OpenAIController],
  providers: [OpenAIService],
})
export class AppModule {}
