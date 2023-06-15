import { RateLimitOptions } from '@fastify/rate-limit';

export const rateLimitConfig: RateLimitOptions = {
  max: 100,
  timeWindow: '1 minute',
};
