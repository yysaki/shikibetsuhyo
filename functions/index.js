const functions = require("firebase-functions")
const { Nuxt } = require("nuxt")
const express = require("express")
const sm = require("sitemap")
const app = express()

const urls = ["shiren", "shiren2", "shiren3", "shiren4", "shiren5"]
  .map(name => `/${name}/`)
  .concat(["/"])
const sitemap = sm.createSitemap({
  hostname: "https://shikibetsuhyo.yysaki.com",
  cacheTime: 1000 * 60 * 15,
  urls: urls.map(url => ({ url: url }))
})

app.get("/sitemap.xml", (req, res) => {
  sitemap.toXML((err, xml) => {
    if (err) {
      return res.status(500).end()
    }
    res.header("Content-Type", "application/xml")
    res.send(xml)
    return true
  })
})

const nuxt = new Nuxt({ buildDir: "nuxt", dev: false })

function handleRequest(req, res) {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600")
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(handleRequest)
exports.ssr = functions.https.onRequest(app)
