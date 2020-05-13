<template>
  <v-card :class="{ 'pb-12': listCategory === 'checkbox' }" class="pt-12 mt-4">
    <v-list class="pt-0">
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="index === 0 || item.subheader !== items[index - 1].subheader"
          :key="item.subheader"
        >
          {{ item.subheader }}
        </v-subheader>
        <v-list-item
          :key="item.name"
          :to="listCategory === 'link' ? item.to : ''"
        >
          <template v-if="listCategory === 'link'">
            {{ item.name }}
          </template>
          <v-checkbox
            v-else
            :label="item.name"
            :input-value="item.checked"
            @click.stop="handleClick(index)"
          />
        </v-list-item>
        <v-divider v-if="index + 1 < items.length" :key="index" />
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  name: "TheList",
  props: {
    items: {
      type: Array,
      required: true,
    },
    listCategory: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleClick(index) {
      this.$emit("click", index)
    },
  },
}
</script>
