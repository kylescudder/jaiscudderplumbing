import assert from 'node:assert/strict'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const root = 'dist'
const html = readFileSync(join(root, 'index.html'), 'utf8')
assert(html.includes('JAI SCUDDER LTD'), 'Missing site heading')
assert(
  html.includes('mailto:mail@jaiscudderplumbing.co.uk'),
  'Missing email link'
)
assert(
  html.includes('href="https://jaiscudderplumbing.co.uk/"'),
  'Wrong canonical URL'
)
assert(html.includes('<astro-island'), 'Interactive gallery was not built')

function inspect(directory) {
  for (const name of readdirSync(directory)) {
    const path = join(directory, name)
    if (statSync(path).isDirectory()) inspect(path)
    else if (/\.(html|css|js)$/.test(path)) {
      const content = readFileSync(path, 'utf8')
      for (const [, asset] of content.matchAll(
        /\/(\_astro\/[A-Za-z0-9_.-]+)/g
      )) {
        assert(statSync(join(root, asset)).isFile(), `Missing asset: ${asset}`)
      }
    }
  }
}
inspect(root)
console.log(
  'Built page, canonical URL, contact links, gallery and asset references verified.'
)
