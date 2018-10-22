<template>
  <v-list-tile>
    <v-list-tile-action>
      <base-icon :name="icon"/>
    </v-list-tile-action>
    <v-list-tile-content>
      <slot/>
    </v-list-tile-content>
  </v-list-tile>
</template>
<script>
import BaseIcon from "~/components/atoms/BaseIcon.vue"
export default {
  name: "DrawerListTile",
  components: { BaseIcon },
  props: {
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
