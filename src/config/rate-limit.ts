import { RateLimitOptions } from '@fastify/rate-limit';

export const rateLimitConfig: RateLimitOptions = {
  max: 60,
  timeWindow: '1 minute',
};
