import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { OpenAIModule } from './graphql/openai/module';
import { landingPagePlugin } from './graphql/plugins/landingPage';
import { HealthModule } from './health/health.module';
import { OpenAIController } from './openai/openai.controller';
import { OpenAIService } from './openai/openai.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: false,
      plugins: [landingPagePlugin()],
      context: ({ req, res }): any => ({ req, res }),
    }),
    OpenAIModule,
    HealthModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, OpenAIController],
  providers: [OpenAIService],
})
export class AppModule {}
