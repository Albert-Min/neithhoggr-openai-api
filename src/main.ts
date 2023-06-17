import fastifyCsrf from '@fastify/csrf-protection';
import fastifyRateLimit from '@fastify/rate-limit';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { corsConfig } from './config/cors';
import { enableLocalMemoryMongoDB } from './config/db.mongo';
import { rateLimitConfig } from './config/rate-limit';
import { enableSwagger } from './config/swagger';
import { isProudction, PORT } from './environment';

async function bootstrap() {
  if (!isProudction) {
    await enableLocalMemoryMongoDB();
  }

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  enableSwagger(app);
  app.enableShutdownHooks();
  app.enableCors(corsConfig);

  await app.register(fastifyCsrf);
  await app.register(fastifyRateLimit, rateLimitConfig);

  await app.listen(PORT, '0.0.0.0');

  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger doc: ${await app.getUrl()}/swagger`);
  console.log(`GraphQL playground: ${await app.getUrl()}/graphql`);
}

bootstrap();
