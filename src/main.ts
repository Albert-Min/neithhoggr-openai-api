import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Neithhoggr')
    .setDescription('Neithhoggr OpenAI API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableShutdownHooks();
  await app.listen(3001, '0.0.0.0');

  console.log(`Application is running on: ${await app.getUrl()}`);
  console.log(`Swagger doc: ${await app.getUrl()}/swagger`);
  console.log(`GraphQL playground: ${await app.getUrl()}/graphql`);
}

bootstrap();
