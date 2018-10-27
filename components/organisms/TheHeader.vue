<template>
  <div>
    <the-navigation-drawer
      :drawer="drawer"
      :game="game"
      app
      fixed
      right
      temporary
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
      <v-spacer/>
      <v-toolbar-side-icon
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
      required: true
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
