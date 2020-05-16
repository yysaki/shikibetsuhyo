module.exports = {
  buildDir: "functions/nuxt",
  modules: ["@nuxtjs/google-analytics", "@nuxtjs/vuetify"],
  "google-analytics": {
    id: "UA-48038483-2",
    dev: false,
  },
  vuetify: {
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
}
