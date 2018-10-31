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

test("Route / exits and render HTML", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000")
  const title = await page.title()
  t.is(title, "不思議のダンジョン 値段識別表")
})

test("Route /shiren/ exits and render HTML", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000/shiren/")
  const title = await page.title()
  t.is(
    title,
    "不思議のダンジョン2 風来のシレン - 不思議のダンジョン 値段識別表"
  )
})

test("Route /shiren2/ exits and render HTML", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000/shiren2/")
  const title = await page.title()
  t.is(
    title,
    "風来のシレン2 ～鬼襲来!シレン城!～ - 不思議のダンジョン 値段識別表"
  )
})

test("Route /shiren3/ exits and render HTML", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000/shiren3/")
  const title = await page.title()
  t.is(
    title,
    "風来のシレン3 からくり屋敷の眠り姫 - 不思議のダンジョン 値段識別表"
  )
})

test("Route /shiren4/ exits and render HTML", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000/shiren4/")
  const title = await page.title()
  t.is(
    title,
    "風来のシレン4 神の眼と悪魔のヘソ - 不思議のダンジョン 値段識別表"
  )
})

test("Route /shiren5/ exits and render HTML", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000/shiren5/")
  const title = await page.title()
  t.is(
    title,
    "風来のシレン5 フォーチュンタワーと運命のダイス - 不思議のダンジョン 値段識別表"
  )
})

test("Route /shiren/ exits and render tab header", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000/shiren5/")
  const tabs = await page.$$eval(".v-tabs__item", ts =>
    ts.map(tab => tab.textContent.trim())
  )

  t.true(tabs.includes("腕輪"))
  t.true(tabs.includes("草"))
  t.true(tabs.includes("巻物"))
  t.true(tabs.includes("壺"))
  t.true(tabs.includes("杖"))
})

test("Test checkbox state changing", async t => {
  const page = await browser.newPage()
  await page.goto("http://localhost:4000/shiren/", { waitUntil: "load" })

  let control = await page.$(".v-input")
  let checked = await control.$eval("input", node => node.checked)
  t.is(checked, false)

  control.click()
  await page.waitFor(500)
  checked = await control.$eval("input", node => node.checked)
  t.is(checked, true)

  // test localStorage save data
  await page.reload({ waitUntil: "load" })
  control = await page.$(".v-input")
  checked = await control.$eval("input", node => node.checked)
  t.is(checked, true)

  // test reset method
  await page.click("button.v-toolbar__side-icon")
  await page.waitFor(500)
  await page.click("#tile-delete_sweep")
  await page.waitFor(500)
  await page.click("#button-delete_sweep")
  await page.waitFor(500)
  control = await page.$(".v-input")
  checked = await control.$eval("input", node => node.checked)
  t.is(checked, false)
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
