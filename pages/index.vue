<template>
  <v-app id="index">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card class="pt-5 mt-3">
          <the-header/>
          <v-list>
            <template v-for="(game, index) in games">
              <v-list-tile
                :key="game.id"
                :to="`/${game.id}/`"
              >
                {{ game.title }}
              </v-list-tile>
              <v-divider
                v-if="index + 1 < games.length"
                :key="index"
              />
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import games from "~/plugins/model/game-list.js"
import TheHeader from "~/components/organisms/TheHeader.vue"

export default {
  name: "Index",
  components: {
    TheHeader
  },
  data: function() {
    return {
      games: games
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
