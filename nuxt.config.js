module.exports = {
  build: {
    extend(config, { isClient }) {
      if (isClient) {
        config.devtool =
          process.env.NODE_ENV === "development" ? "eval-source-map" : ""
      }
    },
  },
  buildDir: "functions/nuxt",
  modules: [
    ["@nuxtjs/google-analytics", { id: "UA-48038483-2", dev: false }],
    [
      "@nuxtjs/vuetify",
      {
        icons: {
          iconfont: "mdi",
        },
        theme: {
          light: true,
          themes: {
            light: {
              primary: "#3e62ad",
              secondary: "#7986CB",
              accent: "#9c27b0",
              error: "#f44336",
              warning: "#ffeb3b",
              info: "#2196f3",
              success: "#4caf50",
            },
          },
        },
      },
    ],
  ],
}
