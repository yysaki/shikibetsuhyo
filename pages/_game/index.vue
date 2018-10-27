<template>
  <v-app id="geme">
    <v-content>
      <v-container class="container" fluid ma-0 pa-0 fill-height>
        <v-layout row>
          <v-flex xs12 sm12>
            <the-header
              :game="gameObject"
              @resetList="handleResetList"
            />
            <the-list
              :items="selectedItems"
              @click="clickWithSave"
            />
            <the-footer
              :lists="gameObject.lists"
              @click="changeType"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import games from "~/plugins/model/game-list.js"
import Vue from "vue"
import TheFooter from "~/components/organisms/TheFooter.vue"
import TheHeader from "~/components/organisms/TheHeader.vue"
import TheList from "~/components/organisms/TheList.vue"
const dummyObject = games[0]

export default {
  name: "Game",
  components: {
    TheFooter,
    TheHeader,
    TheList
  },
  validate({ params }) {
    return games.map(game => game.id).includes(params.game)
  },
  data: function() {
    return {
      gameObject: dummyObject,
      selectedType: dummyObject.lists[0].type
    }
  },
  computed: {
    title: function() {
      return this.gameObject.title
    },
    shortTitle: function() {
      return this.gameObject.shortTitle
    },
    gameId: function() {
      return this.gameObject.id
    },
    selectedItems: function() {
      const items = this.gameObject.lists.filter(
        x => x.type === this.selectedType
      )[0].items
      const checkData = this.checkData[this.selectedType]
      return items.map((item, index) => ({
        name: item.name,
        subheader: `買: ${item.buy} /売: ${item.sell}`,
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
      const x = xs[this.gameId]
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
    changeType: function(type) {
      this.selectedType = type
    },
    clickWithSave: function(index) {
      const current = this.checkData[this.selectedType][index]
      this.checkData[this.selectedType].splice(index, 1, !current)

      if (!process.client) {
        return
      }

      const raw = localStorage.getItem("shikibetsuhyo")
      let xs = raw !== null ? JSON.parse(raw) : {}
      xs[this.gameId] = this.checkData

      localStorage.setItem("shikibetsuhyo", JSON.stringify(xs))
    },
    handleResetList: function() {
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
      xs[this.gameId] = x

      localStorage.setItem("shikibetsuhyo", JSON.stringify(xs))

      Vue.set(this, "checkData", x)
    }
  },
  head: function() {
    return {
      title: `${this.title} - 不思議のダンジョン 値段識別表`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "og:type", content: "website" },
        {
          name: "og:title",
          content: this.title + " - 不思議のダンジョン 値段識別表"
        },
        {
          property: "og:description",
          content:
            this.shortTitle +
            "のプレイ中、店売りの値段で判別した識別済みアイテムを記録するためのチェックリストです。"
        },
        {
          property: "og:url",
          content: "https://shikibetsuhyo.yysaki.com/" + this.gameId + "/"
        },
        { property: "og:site_name", content: "不思議のダンジョン 値段識別表" }
      ],
      link: [
        {
          rel: "canonical",
          href: "https://shikibetsuhyo.yysaki.com/" + this.gameId + "/"
        }
      ]
    }
  }
}
</script>
