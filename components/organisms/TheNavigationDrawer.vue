<template>
  <v-navigation-drawer
    :value="drawer"
    app
    fixed
    right
    temporary
    @input="handleClick"
  >
    <v-list dense>
      <drawer-list-tile-dialog
        icon="delete_sweep"
        title="リストをリセットする"
        button-label="はい"
        @click="handleResetList"
      >
        <template v-slot:icon>
          <v-icon>{{ mdiDeleteSweep }}</v-icon>
        </template>
        このゲームのリストにチェックした情報をクリアします。よろしいですか？
      </drawer-list-tile-dialog>
      <drawer-list-tile-dialog
        icon="info"
        title="このゲームについて"
        button-label="リストに戻る"
        @click="handleClick(false)"
      >
        <template v-slot:icon>
          <v-icon>{{ mdiInformation }}</v-icon>
        </template>
        <about-statement :game="game" />
      </drawer-list-tile-dialog>
      <drawer-list-tile to="/" icon="home" class="tile-home">
        <template v-slot:icon>
          <v-icon>{{ mdiHome }}</v-icon>
        </template>
        TOPに戻る
      </drawer-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mdiDeleteSweep, mdiHome, mdiInformation } from "@mdi/js"

import AboutStatement from "~/components/molecules/AboutStatement.vue"
import DrawerListTile from "~/components/molecules/DrawerListTile.vue"
import DrawerListTileDialog from "~/components/organisms/DrawerListTileDialog.vue"

export default {
  name: "TheNavigationDrawer",
  components: { AboutStatement, DrawerListTile, DrawerListTileDialog },
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
    game: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    mdiDeleteSweep,
    mdiHome,
    mdiInformation,
  }),
  methods: {
    handleClick(val) {
      this.$emit("input", val)
    },
    handleResetList() {
      this.$emit("resetList")
    },
  },
}
</script>
