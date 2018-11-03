import games from "./plugins/model/game-list.js"

module.exports = {
  buildDir: "functions/nuxt",
  modules: ["@nuxtjs/google-analytics", "@nuxtjs/sitemap", "@nuxtjs/vuetify"],
  "google-analytics": {
    id: "UA-48038483-2"
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://shikibetsuhyo.yysaki.com",
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false,
    routes: callback => callback(null, games.map(g => `/${g.id}/`))
  },
  vuetify: {
    theme: {
      primary: "#3e62ad",
      secondary: "#7986CB",
      accent: "#9c27b0",
      error: "#f44336",
      warning: "#ffeb3b",
      info: "#2196f3",
      success: "#4caf50"
    }
  }
}
