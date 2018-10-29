import test from "ava"
import puppeteer from "puppeteer"

let browser = null

test.before("Launch browser", async () => {
  browser = await puppeteer.launch()
})

test("Hello puppeteer", async t => {
  const page = await browser.newPage()
  await page.goto("https://www.yysaki.com")
  const data = await page.$eval("a.centered-text", item => item.textContent)

  t.is(data, "yysaki blog")
})

test.after("Close browser", async () => {
  await browser.close()
})
