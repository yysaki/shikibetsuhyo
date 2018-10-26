<template>
  <v-footer
    fixed
    height="auto"
    color="primary"
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-tabs
        color="primary"
        dark
        slider-color="yellow"
        centered
      >
        <v-tab
          v-for="list in lists"
          :key="list.type"
          @click="handleClick(list.type)"
        >
          {{ list.name }}
        </v-tab>
      </v-tabs>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  name: "TheFooter",
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick(type) {
      this.$emit("click", type)
    }
  }
}
</script>
