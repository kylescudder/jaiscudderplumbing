import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

// Serves the built site the way the production Caddyfile does: the exact file,
// then its index.html, otherwise 404. Playwright runs it as the web server.
const root = fileURLToPath(new URL('../dist', import.meta.url))
const port = Number(process.env.PORT ?? 4321)

const types: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.json': 'application/json'
}

const isFile = async (path: string) =>
  stat(path)
    .then((info) => info.isFile())
    .catch(() => false)

const resolveFile = async (pathname: string) => {
  let decoded: string
  try {
    decoded = decodeURIComponent(pathname)
  } catch {
    return undefined
  }
  const candidates = [decoded, join(decoded, 'index.html')]
  for (const candidate of candidates) {
    const file = normalize(join(root, candidate))
    if (!file.startsWith(root + sep)) continue
    if (await isFile(file)) return file
  }
  return undefined
}

createServer(async (request, response) => {
  const { pathname } = new URL(request.url ?? '/', 'http://127.0.0.1')
  const file = await resolveFile(pathname)

  if (!file) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Not Found')
    return
  }

  response.writeHead(200, {
    'Content-Type': types[extname(file)] ?? 'application/octet-stream'
  })
  createReadStream(file).pipe(response)
}).listen(port, '127.0.0.1')
