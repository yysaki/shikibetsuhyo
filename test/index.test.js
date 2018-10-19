import test from "ava"
import { Nuxt, Builder } from "nuxt"
import { resolve } from "path"

let nuxt = null

test.before("Init Nuxt.js", async () => {
  const rootDir = resolve(__dirname, "..")
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
  let context = {}
  const { html } = await nuxt.renderRoute("/", context)
  t.true(html.includes("不思議のダンジョン 値段識別表"))
})

test("Route /shiren/ exits and render HTML", async t => {
  let context = {}
  const { html } = await nuxt.renderRoute("/shiren/", context)
  t.true(
    html.includes(
      "不思議のダンジョン2 風来のシレン - 不思議のダンジョン 値段識別表"
    )
  )
})

test("Route /shiren2/ exits and render HTML", async t => {
  let context = {}
  const { html } = await nuxt.renderRoute("/shiren2/", context)
  t.true(
    html.includes(
      "風来のシレン2 ～鬼襲来!シレン城!～ - 不思議のダンジョン 値段識別表"
    )
  )
})

test("Route /shiren3/ exits and render HTML", async t => {
  let context = {}
  const { html } = await nuxt.renderRoute("/shiren3/", context)
  t.true(
    html.includes(
      "風来のシレン3 からくり屋敷の眠り姫 - 不思議のダンジョン 値段識別表"
    )
  )
})

test("Route /shiren4/ exits and render HTML", async t => {
  let context = {}
  const { html } = await nuxt.renderRoute("/shiren4/", context)
  t.true(
    html.includes(
      "風来のシレン4 神の眼と悪魔のヘソ - 不思議のダンジョン 値段識別表"
    )
  )
})

test("Route /shiren5/ exits and render HTML", async t => {
  let context = {}
  const { html } = await nuxt.renderRoute("/shiren5/", context)
  t.true(
    html.includes(
      "風来のシレン5 フォーチュンタワーと運命のダイス - 不思議のダンジョン 値段識別表"
    )
  )
})

test("Route /shiren/ exits and render tab header", async t => {
  let context = {}
  const { html } = await nuxt.renderRoute("/shiren/", context)

  t.true(html.includes("腕輪"))
  t.true(html.includes("草"))
  t.true(html.includes("巻物"))
  t.true(html.includes("壺"))
  t.true(html.includes("杖"))
})

test.after("Closing server", () => {
  nuxt.close()
})
