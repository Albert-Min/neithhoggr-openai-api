import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { MONGO_URL } from './environment';
import { OpenAIGQLModule } from './graphql/openai/openai.module';
import { landingPagePlugin } from './graphql/plugins/landingPage';
import { UserGQLModule } from './graphql/user/user.module';
import { HealthModule } from './health/health.module';
import { OpenAIRESTModule } from './openai/openai.module';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: false,
      plugins: [landingPagePlugin()],
    }),
    // REST
    HealthModule,
    OpenAIRESTModule,
    // GraphQL
    OpenAIGQLModule,
    UserGQLModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
