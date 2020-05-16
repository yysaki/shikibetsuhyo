<template>
  <v-dialog v-model="isVisible">
    <template v-slot:activator="{ on }">
      <v-list-item :id="`tile-${icon}`" v-on="on">
        <v-list-item-action>
          <slot name="icon" />
        </v-list-item-action>
        <v-list-item-content>
          {{ title }}
        </v-list-item-content>
      </v-list-item>
    </template>

    <base-card :icon="icon" @click="handleClick">
      <template slot="title">
        {{ title }}
      </template>
      <slot />
      <template slot="button-label">
        {{ buttonLabel }}
      </template>
    </base-card>
  </v-dialog>
</template>
<script>
import BaseCard from "~/components/organisms/BaseCard.vue"

export default {
  name: "DrawerListTileDialog",
  components: {
    BaseCard,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    buttonLabel: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      isVisible: false,
    }
  },
  methods: {
    handleClick(ev) {
      this.isVisible = false
      this.$emit("click", ev)
    },
  },
}
</script>
