FROM node:20 as base

WORKDIR /app

ARG PORT \
    OPENAI_API_KEY \
    MONGO_URL \
    JWT_SECRET

ENV PORT=$PORT \ 
    OPENAI_API_KEY=$OPENAI_API_KEY \
    MONGO_URL=$MONGO_URL \
    JWT_SECRET=$JWT_SECRET \
    NODE_ENV="production"

COPY --chown=node:node package.json /app
COPY --chown=node:node pnpm-lock.yaml /app

RUN npm install -g pnpm

# Disable husky in CI/Docker/Prod
RUN npm pkg delete scripts.prepare
RUN pnpm install

COPY --chown=node:node . .

RUN pnpm run build

USER node

CMD ["pnpm", "start:prod"]
