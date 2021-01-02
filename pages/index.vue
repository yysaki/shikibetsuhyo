<template>
  <v-app id="index">
    <v-content>
      <v-container class="container" fluid>
        <v-row>
          <v-col cols="12">
            <the-header />
          </v-col>
          <v-col cols="12" class="ma-0 pa-0">
            <the-list :items="items" list-category="link" />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import games from "~/plugins/model/game-list.js"
import TheHeader from "~/components/organisms/TheHeader.vue"
import TheList from "~/components/organisms/TheList.vue"

export default {
  name: "Index",
  components: {
    TheHeader,
    TheList,
  },
  data: function () {
    return {
      games: games,
    }
  },
  head: function () {
    return {
      title: "不思議のダンジョン 値段識別表",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "不思議のダンジョン 値段識別表" },
        {
          name: "description",
          content:
            "ローグライクゲームのプレイ中、店売りの値段で判別した識別済みアイテムを記録するためのチェックリストです。",
        },
        {
          property: "og:description",
          content:
            "ローグライクゲームのプレイ中、店売りの値段で判別した識別済みアイテムを記録するためのチェックリストです。",
        },
        {
          property: "og:url",
          content: "https://shikibetsuhyo.yysaki.com",
        },
        { property: "og:site_name", content: "不思議のダンジョン 値段識別表" },
        {
          name: "google-site-verification",
          content: "hDdgqDadHGux_ItxZzlEyWDE2mSiHMyz1cr5T1B8zLE",
        },
      ],
      link: [{ rel: "canonical", href: "https://shikibetsuhyo.yysaki.com" }],
    }
  },
  computed: {
    items: function () {
      return games.map((game) => ({
        name: game.title,
        subheader: "風来のシレンシリーズ",
        to: `/${game.id}/`,
      }))
    },
  },
}
</script>
