export const MONGO_DATABASE = 'neithhoggr-openai-api';

// Required
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const MONGO_URL = `${process.env.MONGO_URL}/${MONGO_DATABASE}?authSource=admin`;
export const JWT_SECRET = process.env.JWT_SECRET;

// Optional
export const JWT_TOKEN_EXPIRES_IN = process.env.JWT_TOKEN_EXPIRES_IN || '1d';
export const PORT = process.env.PORT || 3000;
