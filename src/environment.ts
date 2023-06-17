import { NODE_ENVIRONMENT } from './type';

// Required
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const JWT_SECRET = process.env.JWT_SECRET;

// Optional
export const JWT_TOKEN_EXPIRES_IN = process.env.JWT_TOKEN_EXPIRES_IN || '1d';
export const PORT = process.env.PORT || 3000;
export const NODE_ENV = process.env.NODE_ENV || NODE_ENVIRONMENT.development;

// Constants
export const isProudction = NODE_ENV === NODE_ENVIRONMENT.production;
