import test from "ava"
import puppeteer from "puppeteer"
import { Nuxt, Builder } from "nuxt"
import { resolve } from "path"

let browser = null
let nuxt = null

test.before("Launch browser", async () => {
  browser = await puppeteer.launch()
})

test.before("Init Nuxt.js", async () => {
  const rootDir = resolve(__dirname, "../..")
  let config = {}
  try {
    config = require(resolve(rootDir, "nuxt.config.js"))
  } catch (e) {
    /* do nothing. */
  }
  config.rootDir = rootDir
  config.dev = false
  config.mode = "universal"
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, "localhost")
})

test("Test router-link", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000")
  t.is(page.url(), "http://localhost:4000/")

  await page.click("a.v-list__tile--link")
  await page.waitFor(500)
  t.is(page.url(), "http://localhost:4000/shiren/")

  await page.click("button.v-toolbar__side-icon")
  await page.waitFor(500)
  await page.click(".tile-home")
  await page.waitFor(500)
  t.is(page.url(), "http://localhost:4000/")
})

test.after("Close browser", async () => {
  await browser.close()
})

test.after("Closing server", () => {
  nuxt.close()
})
