FROM node:20@sha256:2f0b0c15f97441defa812268ee943bbfaaf666ea6cf7cac62ee3f127906b35c6 as base

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
