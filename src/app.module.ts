import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { OpenAIModule } from './graphql/openai/module';
import { landingPagePlugin } from './graphql/plugins/landingPage';
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
      plugins: [landingPagePlugin()],
    }),
    OpenAIModule,
    HealthModule,
  ],
  controllers: [OpenAIController],
  providers: [OpenAIService],
})
export class AppModule {}
