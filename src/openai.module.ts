import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OpenAIService } from './openai.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [OpenAIService],
})
export class AppModule {}
