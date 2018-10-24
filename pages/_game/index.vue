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
        <v-dialog v-model="dialogForReset">
          <drawer-list-tile slot="activator" icon="delete_sweep">
            リストをリセットする
          </drawer-list-tile>

          <base-card>
            <template slot="title">リストをリセットする</template>
            このゲームのリストにチェックした情報をクリアします。よろしいですか？
            <template slot="actions">
              <v-spacer/>
              <v-btn
                flat
                color="info"
                @click="clickWithReset"
              >
                はい
              </v-btn>
            </template>
          </base-card>
        </v-dialog>
        <v-dialog
          v-model="dialogForAbout"
        >
          <drawer-list-tile slot="activator" icon="info">
            このゲームについて
          </drawer-list-tile>

          <base-card>
            <template slot="title">このゲームについて</template>
            <about-statement :game="gameObject"/>
            <template slot="actions">
              <v-spacer/>
              <v-btn
                flat
                color="info"
                @click="dialogForAbout = drawer = false"
              >
                リストに戻る
              </v-btn>
            </template>
          </base-card>
        </v-dialog>
        <drawer-list-tile icon="home">
          TOPに戻る
        </drawer-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <v-container class="container" fluid ma-0 pa-0 fill-height>
        <v-layout row>
          <v-flex xs12 sm12>
            <v-toolbar
              color="primary"
              dark
              fixed
            >
              <v-toolbar-title>
                不思議のダンジョン
              </v-toolbar-title>
              <v-spacer/>
              <v-toolbar-side-icon
                @click.stop="drawer = !drawer"
              />
            </v-toolbar>
            <v-card class="pt-5 mt-3 pb-5">
              <v-list class="pt-0">
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
            </v-card>
            <v-footer
              fixed
              height="auto"
              color="primary"
            >
              <v-layout
                justify-center
                row
                wrap
              >
                <v-tabs
                  color="primary"
                  dark
                  slider-color="yellow"
                  centered
                >
                  <v-tab
                    v-for="list in gameObject.lists"
                    :key="list.type"
                    @click="selectedType=list.type"
                  >
                    {{ list.name }}
                  </v-tab>
                </v-tabs>
              </v-layout>
            </v-footer>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import games from "~/plugins/model/game-list.js"
import Vue from "vue"
import AboutStatement from "~/components/molecules/AboutStatement.vue"
import DrawerListTile from "~/components/molecules/DrawerListTile.vue"
import BaseCard from "~/components/organisms/BaseCard.vue"
const dummyObject = games[0]

export default {
  name: "Game",
  components: {
    AboutStatement,
    BaseCard,
    DrawerListTile
  },
  validate({ params }) {
    return games.map(game => game.id).includes(params.game)
  },
  data: function() {
    return {
      gameObject: dummyObject,
      selectedType: dummyObject.lists[0].type,
      dialogForAbout: null,
      dialogForReset: null,
      drawer: null
    }
  },
  computed: {
    title: function() {
      return this.gameObject.title
    },
    selectedItems: function() {
      const items = this.gameObject.lists.filter(
        x => x.type === this.selectedType
      )[0].items
      const checkData = this.checkData[this.selectedType]
      return items.map((item, index) => ({
        name: item.name,
        buy: item.buy,
        sell: item.sell,
        checked: checkData[index]
      }))
    }
  },
  mounted: function() {
    if (!process.client) {
      return
    }
    const raw = localStorage.getItem("shikibetsuhyo")
    if (raw !== undefined && raw !== null) {
      const xs = JSON.parse(raw)
      const x = xs[this.gameObject.id]
      if (x !== undefined && x !== null) {
        Vue.set(this, "checkData", x)
      }
    }
  },
  asyncData: function({ params }) {
    const target = games.filter(game => game.id === params.game)[0]
    var generateCheckData = function(lists) {
      let ary = {}
      lists.forEach(list => {
        const type = list.type
        ary[type] = new Array(list.items.length).fill(false)
      })
      return ary
    }

    return {
      gameObject: target,
      selectedType: target.lists[0].type,
      checkData: generateCheckData(target.lists)
    }
  },
  methods: {
    clickWithSave: function(index) {
      const current = this.checkData[this.selectedType][index]
      this.checkData[this.selectedType].splice(index, 1, !current)

      if (!process.client) {
        return
      }

      const raw = localStorage.getItem("shikibetsuhyo")
      let xs = raw !== null ? JSON.parse(raw) : {}
      xs[this.gameObject.id] = this.checkData

      localStorage.setItem("shikibetsuhyo", JSON.stringify(xs))
    },
    clickWithReset: function() {
      this.dialogForReset = false
      this.drawer = false

      let x = {}
      for (const list of this.gameObject.lists) {
        const type = list.type
        x[type] = new Array(this.checkData[type].length).fill(false)
      }

      if (!process.client) {
        return
      }

      const raw = localStorage.getItem("shikibetsuhyo")
      let xs = raw !== null ? JSON.parse(raw) : {}
      xs[this.gameObject.id] = x

      localStorage.setItem("shikibetsuhyo", JSON.stringify(xs))

      Vue.set(this, "checkData", x)
    }
  },
  head: function() {
    return {
      title: `${this.title} - 不思議のダンジョン 値段識別表`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  }
}
</script>
