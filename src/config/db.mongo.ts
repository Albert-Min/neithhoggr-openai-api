export const MONGO_DATABASE = 'neithhoggr-openai-api';

export const getMongoDBURI = (): string => {
  const uri = `${process.env.MONGO_URL}/${MONGO_DATABASE}?authSource=admin`;
  return uri;
};

export const enableLocalMemoryMongoDB = async () => {
  const { MongoMemoryServer } = await import('mongodb-memory-server');
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  process.env.MONGO_URL = uri.slice(0, uri.lastIndexOf('/'));
};
