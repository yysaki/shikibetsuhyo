<template>
  <v-dialog
    v-model="isVisible"
  >
    <drawer-list-tile slot="activator" :icon="icon" :id="icon">
      {{ title }}
    </drawer-list-tile>

    <base-card @click="handleClick">
      <template slot="title">{{ title }}</template>
      <slot/>
      <template slot="button-label">{{ buttonLabel }}</template>
    </base-card>
  </v-dialog>
</template>
<script>
import BaseCard from "~/components/organisms/BaseCard.vue"
import DrawerListTile from "~/components/molecules/DrawerListTile.vue"

export default {
  name: "DrawerListTileDialog",
  components: {
    BaseCard,
    DrawerListTile
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
      required: true
    }
  },
  data: function() {
    return {
      isVisible: false
    }
  },
  methods: {
    handleClick(ev) {
      this.isVisible = false
      this.$emit("click", ev)
    }
  }
}
</script>
