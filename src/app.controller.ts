import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  @Get('profile')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getProfile(@Request() req: any) {
    return req.user;
  }
}
