const functions = require("firebase-functions")
const { Nuxt } = require("nuxt")
const express = require("express")
const { SitemapStream, streamToPromise } = require("sitemap")
const config = require("./nuxt.config.js")
const app = express()

let sitemap
app.get("/sitemap.xml", (req, res) => {
  res.header("Content-Type", "application/xml")
  if (sitemap) {
    res.send(sitemap)
    return
  }

  try {
    const smStream = new SitemapStream({
      hostname: "https://shikibetsuhyo.yysaki.com",
    })

    const urls = ["shiren", "shiren2", "shiren3", "shiren4", "shiren5"]
      .map((name) => `/${name}/`)
      .concat(["/"])
    urls.forEach((url) => {
      smStream.write({ url, changeFreq: "monthly" })
    })
    smStream.end()

    streamToPromise(smStream)
      .then((sm) => (sitemap = sm))
      .catch((e) => {
        throw e
      })
    smStream.pipe(res).on("error", (e) => {
      throw e
    })
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
})

const nuxt = new Nuxt({
  ...config,
  buildDir: "nuxt",
  dev: false,
  debug: true,
})
app.use(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})

exports.ssr = functions.https.onRequest(app)
