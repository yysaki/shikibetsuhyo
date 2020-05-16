<template>
  <v-list-item :to="to">
    <v-list-item-action>
      <slot name="icon" />
    </v-list-item-action>
    <v-list-item-content>
      <slot />
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "DrawerListTile",
  props: {
    to: {
      type: String,
      default: "",
      required: false,
    },
  },
}
</script>
