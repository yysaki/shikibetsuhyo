<template>
  <v-footer class="pa-0" fixed height="auto" color="primary">
    <v-container class="pa-0">
      <v-row class="justify-center">
        <v-tabs
          background-color="primary"
          dark
          slider-color="yellow"
          fixed-tabs
          show-arrows
        >
          <v-tab
            v-for="list in lists"
            :key="list.type"
            @click="handleSelectType(list.type)"
          >
            {{ list.name }}
          </v-tab>
        </v-tabs>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
export default {
  name: "TheFooter",
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleSelectType(type) {
      this.$emit("selectType", type)
    },
  },
}
</script>
