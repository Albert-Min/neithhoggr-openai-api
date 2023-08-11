FROM node:20@sha256:525d7cc45c28d0cc6ab50fe0abb6dd7620ed95489970fe5582cb77e8da2517a3 as base

WORKDIR /app

ARG PORT \
    OPENAI_API_KEY \
    MONGO_URL \
    JWT_SECRET

ENV PORT=$PORT \ 
    OPENAI_API_KEY=$OPENAI_API_KEY \
    MONGO_URL=$MONGO_URL \
    JWT_SECRET=$JWT_SECRET

COPY --chown=node:node package.json /app
COPY --chown=node:node pnpm-lock.yaml /app

RUN npm install -g pnpm

# Disable husky in CI/Docker/Prod
RUN npm pkg delete scripts.prepare
RUN pnpm install

COPY --chown=node:node . .

RUN pnpm run build

# Set after build
ENV NODE_ENV="production"

USER node

CMD ["pnpm", "start:prod"]
