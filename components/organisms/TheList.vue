<template>
  <v-card :class="{ 'pb-12 pt-4 mt-4': listCategory === 'checkbox' }">
    <v-list class="pt-0 pb-0">
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
          <template>
            <v-list-item-content v-if="listCategory === 'link'">
              {{ item.name }}
            </v-list-item-content>
            <v-list-item-action v-else>
              <v-checkbox
                :label="item.name"
                :input-value="item.checked"
                @click.stop="handleClick(index)"
              />
            </v-list-item-action>
          </template>
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
