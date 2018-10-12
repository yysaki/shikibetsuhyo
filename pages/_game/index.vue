<template>
  <v-app id="geme">
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      right
      temporary
    >
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>delete_sweep</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>リストをリセットする</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>このゲームについて</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>TOPに戻る</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="primary"
      dark
    >
      <v-toolbar-title>
        不思議のダンジョン
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
      />
    </v-toolbar>
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
              <template v-for="(item, index) in selectedItems">
                <v-subheader
                  v-if="index === 0 || `${item.buy}:${item.sell}` !== `${selectedItems[index-1].buy}:${selectedItems[index-1].sell}`"
                  :key="`${item.buy}:${item.sell}`"
                >
                  {{ `買: ${item.buy} /売: ${item.sell}` }}
                </v-subheader>
                <v-list-tile
                  :key="item.name"
                >
                  <v-checkbox
                    :label="item.name"
                    v-model="item.checked"
                    @click.stop="clickWithSave(index)"
                  />
                </v-list-tile>
                <v-divider
                  v-if="index + 1 < selectedItems.length"
                  :key="index"
                />
              </template>
            </v-list>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
import games from '~/es6/model/game-list.js';
import CookieManager from '~/es6/cookie-manager.js';
import Vue from 'vue';
const dummyObject = games[0];

export default {
  name: "game",
  validate({ params }) {
    return games.map(game => game.id).includes(params.game)
  },
  data: function () {
    return {
      gameObject: dummyObject,
      selectedType: dummyObject.lists[0].type,
      drawer: null
    }
  },
  mounted: function () {
    const raw = localStorage.getItem('shikibetsuhyo');
    if (raw !== undefined && raw !== null) {
      const xs = JSON.parse(raw);
      const x = xs[this.gameObject.id];
      if (x !== undefined && x !== null) {
         Vue.set(this, 'checkData', x);
      }
    }
  },
  asyncData: function ({ params }) {
    const target = games.filter(game => game.id === params.game)[0];
    var generateCheckData = function (lists) {
      let ary = {};
      lists.forEach(list => {
        const type = list.type;
        ary[type] = new Array(list.items.length).fill(false);
      })
      return ary;
    };

    return {
      gameObject: target,
      selectedType: target.lists[0].type,
      checkData: generateCheckData(target.lists)
    }
  },
  computed: {
    title: function () {
      return this.gameObject.title;
    },
    selectedItems: function () {
      const items = this.gameObject.lists.filter(x => x.type === this.selectedType)[0].items;
      const checkData = this.checkData[this.selectedType];
      return items.map((item, index) => ({
        name: item.name,
        buy: item.buy,
        sell: item.sell,
        checked: checkData[index]
      }));
    }
  },
  methods: {
    clickWithSave: function (index) {
      const current = this.checkData[this.selectedType][index];
      this.checkData[this.selectedType].splice(index, 1, !current);

      const raw = localStorage.getItem('shikibetsuhyo');
      let xs = raw !== null ? JSON.parse(raw) : {};
      xs[this.gameObject.id] = this.checkData;

      localStorage.setItem('shikibetsuhyo', JSON.stringify(xs));
    }
  },
  head: function () {
    return {
      title: `${this.title} - 不思議のダンジョン 値段識別表`
    }
  }
};
</script>

