<template>
  <v-app id="index">
    <v-layout row>
      <v-flex xs12 sm12>
        <the-header />
        <the-list :items="items" list-category="link" />
      </v-flex>
    </v-layout>
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
    TheList
  },
  data: function() {
    return {
      games: games
    }
  },
  computed: {
    items: function() {
      return games.map(game => ({
        name: game.title,
        subheader: "風来のシレンシリーズ",
        to: `/${game.id}/`
      }))
    }
  },
  head() {
    return {
      title: "不思議のダンジョン 値段識別表",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "og:type", content: "website" },
        { name: "og:title", content: "不思議のダンジョン 値段識別表" },
        {
          property: "og:description",
          content:
            "ローグライクゲームのプレイ中、店売りの値段で判別した識別済みアイテムを記録するためのチェックリストです。"
        },
        {
          property: "og:url",
          content: "https://shikibetsuhyo.yysaki.com"
        },
        { property: "og:site_name", content: "不思議のダンジョン 値段識別表" }
      ],
      link: [{ rel: "canonical", href: "https://shikibetsuhyo.yysaki.com" }]
    }
  }
}
</script>
