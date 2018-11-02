<template>
  <div>
    <the-navigation-drawer
      v-if="showSideIcon"
      :drawer="drawer"
      :game="game"
      @input="handleChangeDrawer"
      @resetList="handleResetList"
    />
    <v-toolbar
      color="primary"
      dark
      fixed
    >
      <v-toolbar-title>
        不思議のダンジョン
      </v-toolbar-title>
      <v-spacer v-if="showSideIcon"/>
      <v-toolbar-side-icon
        v-if="showSideIcon"
        @click.stop="drawer = !drawer"
      />
    </v-toolbar>
  </div>
</template>
<script>
import TheNavigationDrawer from "~/components/organisms/TheNavigationDrawer.vue"

export default {
  name: "TheHeader",
  components: { TheNavigationDrawer },
  props: {
    game: {
      type: Object,
      default: () => new Object()
    },
    showSideIcon: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      drawer: false
    }
  },
  methods: {
    handleChangeDrawer(val) {
      this.drawer = val
    },
    handleResetList() {
      this.drawer = false
      this.$emit("resetList")
    }
  }
}
</script>
