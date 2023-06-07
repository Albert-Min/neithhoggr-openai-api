import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { OpenAIService } from './openai.service';

describe('AppController', () => {
  let appController: AppController;
  let openaiService: OpenAIService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [OpenAIService],
    }).compile();

    appController = module.get<AppController>(AppController);
    openaiService = module.get<OpenAIService>(OpenAIService);
  });

  describe('getOpenAIResponse', () => {
    it('should call callOpenAPI method of OpenAIService with the correct prompt', async () => {
      const prompt = 'Hello, OpenAI!';
      const mockResponse = 'Mock response';

      jest.spyOn(openaiService, 'callOpenAPI').mockResolvedValue(mockResponse);

      const response = await appController.getOpenAIResponse();

      expect(openaiService.callOpenAPI).toHaveBeenCalledWith(prompt);
      expect(response).toBe(mockResponse);
    });
  });

  describe('getHeartbeat', () => {
    it('should return "OK"', () => {
      const result = appController.getHeartbeat();
      expect(result).toBe('OK');
    });
  });
});
