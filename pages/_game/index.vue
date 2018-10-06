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
            <v-list>
              <template v-for="(item, index) in selectedList.items">
                <v-subheader
                  v-if="index === 0 || `${item.buy}:${item.sell}` !== `${selectedList.items[index-1].buy}:${selectedList.items[index-1].sell}`"
                  :key="`${item.buy}:${item.sell}`"
                >
                  {{ `買: ${item.buy} /売: ${item.sell}` }}
                </v-subheader>
                <v-list-tile
                  :key="item.id"
                >
                  {{ item.name }}
                </v-list-tile>
                <v-divider
                  v-if="index + 1 < selectedList.items.length"
                  :key="index"
                />
              </template>
            </v-list>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import games from '~/es6/model/game-list.js';
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
    },
    selectedList: function () {
      return this.gameObject.lists.filter(x => x.type === this.selectedType)[0]
    }
  },
  head: function () {
    return {
      title: `${this.title} - 不思議のダンジョン 値段識別表`
    }
  }
};
</script>

