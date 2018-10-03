<template>
  <div id="index">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-list>
            <template v-for="(item, index) in g.lists[0].items">
              <v-list-tile
                :key="item.id"
              >
                {{ `${item.name} - buy: ${item.buy} - sell: ${item.sell}` }}
              </v-list-tile>
              <v-divider
                v-if="index + 1 < g.lists[0].items.length"
                :key="index"
              />
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
const games = require('~/es6/model/game-list').default;

export default {
  name: "game",
  validate({ params }) {
    return games.map(game => game.id).includes(params.game)
  },
  data: function () {
    return {
      g: null,
      title: ""
    }
  },
  asyncData: function ({ params }) {
    return {
      g: games.filter(game => game.id === params.game)[0],
      title: games.filter(game => game.id === params.game)[0].title,
    }
  },
  head: function () {
    return {
      title: `${this.title} - 不思議のダンジョン 値段識別表`
    }
  }
};
</script>

