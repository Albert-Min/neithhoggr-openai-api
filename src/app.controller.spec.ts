import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = module.get<AppController>(AppController);
  });

  describe('getHeartbeat', () => {
    it('should return "OK"', () => {
      const result = appController.getHeartbeat();
      expect(result).toBe('OK');
    });
  });
});
