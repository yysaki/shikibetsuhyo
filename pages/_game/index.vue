<template>
  <v-app id="game">
    <v-main>
      <v-container class="container" fluid>
        <v-row>
          <v-col cols="12">
            <the-header
              :game="game"
              :show-side-icon="true"
              @resetList="handleResetList"
            />
          </v-col>
          <v-col cols="12" class="ma-0 pa-0">
            <the-list
              :items="selectedItems"
              list-category="checkbox"
              @click="handleClickItem"
            />
          </v-col>
          <v-col cols="12">
            <the-footer :lists="game.lists" @selectType="handleSelectType" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import games from "~/plugins/model/game-list.js"
import Vue from "vue"
import TheFooter from "~/components/organisms/TheFooter.vue"
import TheHeader from "~/components/organisms/TheHeader.vue"
import TheList from "~/components/organisms/TheList.vue"

export default {
  name: "Game",
  components: {
    TheFooter,
    TheHeader,
    TheList,
  },
  validate({ params }) {
    return games.map((game) => game.id).includes(params.game)
  },
  asyncData: function ({ params }) {
    const target = games.filter((game) => game.id === params.game)[0]
    var generateCheckData = function (lists) {
      let ary = {}
      lists.forEach((list) => {
        const type = list.type
        ary[type] = new Array(list.items.length).fill(false)
      })
      return ary
    }

    return {
      game: target,
      selectedType: target.lists[0].type,
      checkData: generateCheckData(target.lists),
    }
  },
  head: function () {
    return {
      title: `${this.game.title} - 不思議のダンジョン 値段識別表`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "og:type", content: "website" },
        {
          name: "og:title",
          content: this.game.title + " - 不思議のダンジョン 値段識別表",
        },
        {
          name: "description",
          content:
            this.game.shortTitle +
            "のプレイ中、店売りの値段で判別した識別済みアイテムを記録するためのチェックリストです。",
        },
        {
          property: "og:description",
          content:
            this.game.shortTitle +
            "のプレイ中、店売りの値段で判別した識別済みアイテムを記録するためのチェックリストです。",
        },
        {
          property: "og:url",
          content: "https://shikibetsuhyo.yysaki.com/" + this.game.id + "/",
        },
        { property: "og:site_name", content: "不思議のダンジョン 値段識別表" },
        {
          name: "google-site-verification",
          content: "hDdgqDadHGux_ItxZzlEyWDE2mSiHMyz1cr5T1B8zLE",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://shikibetsuhyo.yysaki.com/" + this.game.id + "/",
        },
      ],
    }
  },
  computed: {
    selectedItems: function () {
      const items = this.game.lists.filter(
        (x) => x.type === this.selectedType
      )[0].items
      const checkData = this.checkData[this.selectedType]
      return items.map((item, index) => {
        const buy = item.buy >= 0 ? item.buy.toString() : "-"
        const sell = item.sell >= 0 ? item.sell.toString() : "-"
        return {
          name: item.name,
          subheader: `買: ${buy} /売: ${sell}`,
          checked: checkData[index],
        }
      })
    },
  },
  mounted: function () {
    if (!process.client) {
      return
    }
    const raw = localStorage.getItem("shikibetsuhyo")
    if (raw !== undefined && raw !== null) {
      const xs = JSON.parse(raw)
      const x = xs[this.game.id]
      if (x !== undefined && x !== null) {
        Vue.set(this, "checkData", x)
      }
    }
  },
  methods: {
    handleSelectType: function (type) {
      this.selectedType = type
    },
    handleClickItem: function (index) {
      const current = this.checkData[this.selectedType][index]
      this.checkData[this.selectedType].splice(index, 1, !current)

      if (!process.client) {
        return
      }

      const raw = localStorage.getItem("shikibetsuhyo")
      let xs = raw !== null ? JSON.parse(raw) : {}
      xs[this.game.id] = this.checkData

      localStorage.setItem("shikibetsuhyo", JSON.stringify(xs))
    },
    handleResetList: function () {
      let x = {}
      this.game.lists.forEach((list) => {
        const type = list.type
        x[type] = new Array(this.checkData[type].length).fill(false)
      })

      if (!process.client) {
        return
      }

      const raw = localStorage.getItem("shikibetsuhyo")
      let xs = raw !== null ? JSON.parse(raw) : {}
      xs[this.game.id] = x

      localStorage.setItem("shikibetsuhyo", JSON.stringify(xs))

      Vue.set(this, "checkData", x)
    },
  },
}
</script>
