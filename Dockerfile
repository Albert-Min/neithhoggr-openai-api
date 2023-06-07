FROM node:20
WORKDIR /app

COPY tsconfig.json /app
COPY package.json /app
COPY pnpm-lock.yaml /app

RUN npm install -g pnpm
# Disable husky in CI/Docker/Prod
RUN npm pkg delete scripts.prepare
RUN pnpm install

COPY . .

RUN pnpm run build

RUN adduser --disabled-password --gecos openai-api openai-api
RUN chmod -R go-w *
USER openai-api

CMD ["pnpm", "start:prod"]
