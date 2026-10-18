FROM oven/bun:1.4.3@sha256:ec06c3b6cea04192ae6770c434f668ca41d343ad19fa6472216c7b48be39c598 AS build
WORKDIR /app
ENV CI=true HUSKY=0 BUN_CONFIG_MAX_HTTP_REQUESTS=16
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --network-concurrency=16
COPY astro.config.mjs tsconfig.json ./
COPY src ./src
COPY public ./public
COPY deploy/check-site.mjs ./deploy/check-site.mjs
RUN bun run build && bun run check:site

FROM caddy:2.11.7@sha256:8dc9fa87b36b25303d1c67d2a09f5824b7f3bfd72cb052f246e5da2133fe29a8
RUN setcap -r /usr/bin/caddy
COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
ARG PLUMBING_REVISION=development
ENV PLUMBING_REVISION=${PLUMBING_REVISION}
LABEL org.opencontainers.image.revision=${PLUMBING_REVISION}
USER 1000:1000
EXPOSE 8080
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
