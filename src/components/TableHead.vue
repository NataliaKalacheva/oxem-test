<template>
  <thead>
    <tr>
      <template v-for="item in columns">
        <th :key="item" class="no-padding">
          <button
            @click="sortTable(item)"
            :class="{ 'blue-grey lighten-5': isActive(item) }"
            class="btn-flat btn-full"
          >
            <span class="valign-wrapper">
              {{ item }}
              <i v-if="isReversed(item)" class="large material-icons">
                arrow_drop_up
              </i>
              <i v-else class="large material-icons">arrow_drop_down</i>
            </span>
          </button>
        </th>
      </template>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "TableHead",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    curSortKey: {
      type: String,
      default: "",
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    sortTable(key) {
      this.$emit("sort-table", key);
    },
    isReversed(key) {
      return this.curSortKey === key && this.reverse;
    },
    isActive(key) {
      return this.curSortKey === key;
    },
  },
};
</script>

<style scoped>
.btn-full {
  width: 100%;
}
.valign-wrapper {
  justify-content: center;
}
</style>
