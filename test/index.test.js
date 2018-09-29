import test from 'ava';
import { Nuxt, Builder } from 'nuxt';
import { resolve } from 'path';

let nuxt = null;

test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..');
  let config = {};
  try { config = require(resolve(rootDir, 'nuxt.config.js')); } catch (e) {}
  config.rootDir = rootDir;
  config.dev = false;
  config.mode = 'universal';
  nuxt = new Nuxt(config);
  await new Builder(nuxt).build();
  nuxt.listen(4000, 'localhost');
});

test('Route / exits and render HTML', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context);
  t.true(html.includes('<h1 class="red">Hello world!</h1>'));
});

nuxt.after('Closing server', t => {
  nuxt.close();
})
