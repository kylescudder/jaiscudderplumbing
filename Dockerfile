FROM oven/bun:1.4.5@sha256:3aa040e5445efa09d75bb428a64ba50db13e2b3ac9b6b0c7f145615f62b2ee18 AS build
WORKDIR /app
ENV CI=true HUSKY=0 BUN_CONFIG_MAX_HTTP_REQUESTS=16
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --network-concurrency=16
COPY astro.config.mjs tsconfig.json ./
COPY src ./src
COPY public ./public
COPY deploy/check-site.mjs ./deploy/check-site.mjs
RUN bun run typecheck && bun run build && bun run check:site

FROM caddy:2.11.9@sha256:4851e54a46b206517c574821bb5cc67f170d2156041e9fbc4c9193b45e84a75b
RUN setcap -r /usr/bin/caddy
COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile
ARG PLUMBING_REVISION=development
ENV PLUMBING_REVISION=${PLUMBING_REVISION}
LABEL org.opencontainers.image.revision=${PLUMBING_REVISION}
USER 1000:1000
EXPOSE 8080
# Health ownership: deploy/healthcheck.md at the repository root.
HEALTHCHECK --interval=15s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --spider --timeout=3 http://127.0.0.1:8080/healthz
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
