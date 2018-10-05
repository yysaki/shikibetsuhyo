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
            <template v-for="(item, index) in gameObject.lists.filter(x => x.type === selectedType)[0].items">
              <v-list-tile
                :key="item.id"
              >
                {{ `${item.name} - buy: ${item.buy} - sell: ${item.sell}` }}
              </v-list-tile>
              <v-divider
                v-if="index + 1 < gameObject.lists.filter(x => x.type === selectedType)[0].length"
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
const dummyObject = games[0];

export default {
  name: "game",
  validate({ params }) {
    return games.map(game => game.id).includes(params.game)
  },
  data: function () {
    return {
      gameObject: dummyObject,
      selectedType: dummyObject.lists[0].type
    }
  },
  asyncData: function ({ params }) {
    const target = games.filter(game => game.id === params.game)[0];
    return {
      gameObject: target,
      selectedType: target.lists[0].type
    }
  },
  computed: {
    title: function () {
      return this.gameObject.title;
    }
  },
  head: function () {
    return {
      title: `${this.title} - 不思議のダンジョン 値段識別表`
    }
  }
};
</script>

