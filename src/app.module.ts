import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { OpenAIGQLModule } from './graphql/openai/module';
import { landingPagePlugin } from './graphql/plugins/landingPage';
import { HealthModule } from './health/health.module';
import { OpenAIRESTModule } from './openai/openai.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: false,
      plugins: [landingPagePlugin()],
    }),
    // REST
    HealthModule,
    AuthModule,
    UsersModule,
    OpenAIRESTModule,
    // GraphQL
    OpenAIGQLModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
