<template>
  <div id="index">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-card>
          <v-list class="pt-0">
            <v-tabs
              color="primary"
              dark
              slider-color="yellow"
              fixed-tabs
            >
              <v-tab
                v-for="list in gameObject.lists"
                :key="list.type"
                @click="selectedType=list.type"
              >
                {{ list.name }}
              </v-tab>
            </v-tabs>
            <template v-for="(item, index) in gameObject.lists[0].items">
              <v-list-tile
                :key="item.id"
              >
                {{ `${item.name} - buy: ${item.buy} - sell: ${item.sell}` }}
              </v-list-tile>
              <v-divider
                v-if="index + 1 < gameObject.lists[0].items.length"
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
      gameObject: null,
      selectedType: null,
      title: ""
    }
  },
  asyncData: function ({ params }) {
    return {
      gameObject: games.filter(game => game.id === params.game)[0],
      title: games.filter(game => game.id === params.game)[0].title,
      selectedType: games.filter(game => game.id === params.game)[0].lists[0].type
    }
  },
  head: function () {
    return {
      title: `${this.title} - 不思議のダンジョン 値段識別表`
    }
  }
};
</script>

