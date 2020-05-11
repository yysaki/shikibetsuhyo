<template>
  <v-list-item :to="to">
    <v-list-item-action>
      <base-icon :name="icon" />
    </v-list-item-action>
    <v-list-item-content>
      <slot />
    </v-list-item-content>
  </v-list-item>
</template>
<script>
import BaseIcon from "~/components/atoms/BaseIcon.vue"
export default {
  name: "DrawerListTile",
  components: { BaseIcon },
  props: {
    icon: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: "",
      required: false,
    },
  },
}
</script>
