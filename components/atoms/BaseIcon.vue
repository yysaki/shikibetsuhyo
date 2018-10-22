<template>
  <v-icon>{{ name }}</v-icon>
</template>
<script>
export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
