<template>
  <thead>
    <tr>
      <template v-for="item in columns">
        <th :key="item">
          <button @click="sortTable(item)" class="btn-flat">
            {{ item }}
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
  },
  methods: {
    sortTable: function (key) {
      this.$emit("sort-table", key);
    },
  },
};
</script>
