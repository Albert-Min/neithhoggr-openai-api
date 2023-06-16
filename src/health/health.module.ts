import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { MONGO_URL } from 'src/environment';

import { HealthController } from './health.controller';

@Module({
  imports: [TerminusModule, HttpModule, MongooseModule.forRoot(MONGO_URL)],
  controllers: [HealthController],
})
export class HealthModule {}
