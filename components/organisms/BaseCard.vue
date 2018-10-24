<template>
  <v-card>
    <v-card-title class="primary">
      <slot name="title"/>
    </v-card-title>
    <v-card-text>
      <slot/>
    </v-card-text>

    <v-divider/>
    <v-card-actions>
      <v-spacer/>
      <v-btn
        flat
        color="info"
        @click="handleClick"
      >
        <slot name="button-label"/>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "BaseCard",
  methods: {
    handleClick(ev) {
      this.$emit("click", ev)
    }
  }
}
</script>
