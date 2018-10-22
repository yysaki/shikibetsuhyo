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
      <slot name="actions"/>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "BaseCard"
}
</script>
