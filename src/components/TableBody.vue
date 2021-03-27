<template>
  <tbody>
    <tr
      class="table-row"
      v-for="(data, i) in bodyData"
      :key="`${data.id}-${i}`"
      tabindex="0"
      @click="onRowSelected(data)"
      @focus="onRowSelected(data)"
    >
      <td>{{ data.id }}</td>
      <td>{{ data.firstName }}</td>
      <td>{{ data.lastName }}</td>
      <td>{{ data.email }}</td>
      <td>{{ data.phone }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "TableBody",
  props: {
    bodyData: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRowSelected(data) {
      this.$emit("row-selected", data);
    },
  },
};
</script>

<style scoped>
.table-row:focus {
  outline-color: #4db6ac;
}
</style>
