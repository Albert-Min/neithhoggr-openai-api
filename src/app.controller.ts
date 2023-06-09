import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get('/heartbeat')
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: String,
  })
  getHeartbeat(): string {
    return 'OK';
  }
}
