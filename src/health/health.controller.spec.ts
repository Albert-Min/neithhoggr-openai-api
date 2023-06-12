import { HttpModule } from '@nestjs/axios';
import {
  HealthCheckError,
  HealthCheckResult,
  HealthCheckService,
  TerminusModule,
} from '@nestjs/terminus';
import { Test, TestingModule } from '@nestjs/testing';

import { HealthController } from './health.controller';

describe('HealthController', () => {
  let controller: HealthController;
  let healthCheckService: HealthCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TerminusModule, HttpModule],
      controllers: [HealthController],
    }).compile();

    controller = module.get<HealthController>(HealthController);
    healthCheckService = module.get<HealthCheckService>(HealthCheckService);
  });

  describe('check', () => {
    it('should return health check result', async () => {
      // Mock the health check result
      const healthCheckResult: HealthCheckResult = {
        info: {
          nestjsDocs: { status: 'up' },
        },
        status: 'ok',
        details: {},
      };
      jest
        .spyOn(healthCheckService, 'check')
        .mockResolvedValue(healthCheckResult);

      const result = await controller.check();

      expect(result).toEqual(healthCheckResult);
    });

    it('should throw HealthCheckError if check fails', async () => {
      // Mock the health check failure
      const healthCheckResult = { nestjsDocs: { status: 'down' } };
      jest
        .spyOn(healthCheckService, 'check')
        .mockRejectedValue(
          new HealthCheckError('Health check failed', healthCheckResult),
        );

      await expect(controller.check()).rejects.toThrowError(HealthCheckError);
    });
  });
});
