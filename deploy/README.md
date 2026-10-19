# Jai Scudder Plumbing on Herman

Production: https://jaiscudderplumbing.co.uk and https://www.jaiscudderplumbing.co.uk.
Preview alias: https://jaiscudderplumbing.kylescudder.co.uk.
Repository: `kylescudder/jaiscudderplumbing`, branch `main`.
Herman checkout: `/Users/kyle/platform/apps/jaiscudderplumbing`.

## Automatic releases

Pull requests run `.github/workflows/ci.yml`: frozen-lockfile build, static page
and asset validation, formatting, deployment provenance/queue/rollback tests,
webhook authentication tests and an unprivileged production-container check.
Every `main` push runs `release.yml`, builds native AMD64 and ARM64 images,
publishes an immutable GHCR digest with GitHub provenance, and requests deployment.

The static Astro site runs in an unprivileged Caddy container at
`jaiscudderplumbing:8080` on `platform-web`. There are no published host ports,
Node/Bun runtime servers, databases or Netlify dependencies. Shared Caddy proxies
the three public hostnames to this private container. Responses carry
`X-Jaiscudderplumbing-Revision`; the website content and contact links are preserved.

Cloudflare Access protects the entire `deploy-jaiscudderplumbing.kylescudder.co.uk`
hostname using the dedicated `github-jaiscudderplumbing-deploy` service token.
Only `/hooks/jaiscudderplumbing` reaches the queue-only receiver. Signed requests
contain an immutable digest, commit and short-lived read-only GitHub registry
credential. The receiver has no Docker socket, database access or host port and
can write only its own queue. It reads only the public acceptance metadata.

LaunchAgent `com.herman.jaiscudderplumbing-deploy` consumes the queue as Colima's
owner. Before pulling or starting an image, it independently verifies provenance
from this repo's `release.yml`, `refs/heads/main` and GitHub-hosted runners. The
registry credential is removed from the queue and omitted from deployment logs
and state; its temporary Docker config is deleted even on failure.

Herman checks startup, the expected page, CSS, JavaScript and image assets before
publishing acceptance metadata matching both digest and revision. Failed checks
restore and verify the previous image. GitHub waits for completed host acceptance
and the public revision before reporting success. A failed candidate cannot
acknowledge its own deployment.

## Configuration and operation

GitHub's `production` environment allows `main` only and stores the dedicated
`CF_ACCESS_CLIENT_ID`, `CF_ACCESS_CLIENT_SECRET`, `DEPLOY_WEBHOOK_SECRET` secrets.
Repository variables are `DEPLOY_ENABLED=true` and
`SITE_BASE_URL=https://jaiscudderplumbing.co.uk`.

Protected host files, ignored by Git: `.env` (immutable image reference),
`.env.deploy-hook`, `secrets/deploy-webhook-secret`, and
`secrets/cloudflare-access.json`. Files are mode 0600 and private directories 0700. State, previous image references and release history live under `state/`.
The shared encrypted NAS backup includes host configuration, credentials, deploy
tooling and release records. Source and images are rebuilt from GitHub.

```sh
# Run from the checkout on Herman.
docker compose -f deploy/compose.deploy-hook.yaml --env-file .env.deploy-hook up -d --wait
python3 -B deploy/install-launchd.py
launchctl print gui/501/com.herman.jaiscudderplumbing-deploy
tail -n 100 state/deploy.log
# Deploy or roll back to a previously attested main image.
./deploy/herman-deploy.sh sha256:<verified-digest>
```

Routine updates are reviewed merges to `main`; they deploy without a host
checkout update. Host deployment scripts/Compose changes require an explicit
checkout update separately. Pause automatic deployment with
`gh variable set DEPLOY_ENABLED --body false --repo kylescudder/jaiscudderplumbing`.
Kyle's login session and Colima must be running, as for the other Herman sites.

The original static releases under
`/Users/kyle/platform/sites/jaiscudderplumbing/releases/` remain an emergency
fallback. To use one, atomically select its `current` symlink and re-register
these hostnames with the managed helper's `--static` option. Normal rollback
uses the previous immutable container image. Do not use the retired manual
build script or restore Netlify DNS.

## DNS and retired Netlify service

Cloudflare zone `83776a41917f75edda1b7aa7278ca433` is active. The delegated
nameservers are `kayden.ns.cloudflare.com` and `marjory.ns.cloudflare.com`;
Namecheap remains the registrar. Apex and www use proxied CNAMEs to
`66a18320-8cac-4521-b2fd-f88f58fd7235.cfargotunnel.com`. Manage these routes with:

```sh
cd /Users/kyle/platform
python3 scripts/hostname.py --settings caddy/cloudflare-jaiscudderplumbing.json add jaiscudderplumbing jaiscudderplumbing.co.uk --upstream jaiscudderplumbing:8080 --dry-run
python3 scripts/hostname.py --settings caddy/cloudflare-jaiscudderplumbing.json recover
```

The dedicated domain credential is protected at
`secrets/cloudflared-jaiscudderplumbing/cert.pem` under the platform root.
The deployment webhook and preview alias use the existing kylescudder.co.uk
hostname settings. Never edit the managed Caddy block or registry manually.

Private Email's two MX records, SPF TXT and autodiscovery SRV are preserved.
The `mail`, `autoconfig` and `autodiscover` CNAMEs are DNS-only.

Netlify project `jaiscudderplumbing` (ID `9c08c9ff-5192-4974-9705-6590c4796619`)
was deleted at Kyle's request on 18 October 2026. Its netlify.app URL returns 404.
Saved Netlify DNS records are historical only; Netlify is not a rollback target.
Deployment, DNS and removal evidence is under the platform's
`verification/jaiscudderplumbing-*` paths. CI/CD acceptance records include the
GitHub run, exact commit/digest, host acknowledgement and public revision.
