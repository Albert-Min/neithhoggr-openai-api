import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private mongoose: MongooseHealthIndicator,
  ) {}

  @Get()
  @HttpCode(200)
  @HealthCheck()
  @ApiResponse({
    status: 200,
  })
  check() {
    return this.health.check([async () => this.mongoose.pingCheck('mongoose')]);
  }
}
