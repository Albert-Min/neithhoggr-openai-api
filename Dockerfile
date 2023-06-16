FROM node:20 as base

WORKDIR /app

ARG PORT
ENV PORT $PORT
EXPOSE $PORT

ARG OPENAI_API_KEY
ENV OPENAI_API_KEY $OPENAI_API_KEY
ARG MONGO_URL
ENV MONGO_URL $MONGO_URL
ARG JWT_SECRET
ENV JWT_SECRET $JWT_SECRET

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
