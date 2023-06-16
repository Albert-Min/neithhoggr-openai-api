import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const enableSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Neithhoggr')
    .setDescription('Neithhoggr OpenAI API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
};
