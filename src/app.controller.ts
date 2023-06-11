import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get('/heartbeat')
  @HttpCode(200)
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: String,
  })
  getHeartbeat(): string {
    return 'OK';
  }
}
