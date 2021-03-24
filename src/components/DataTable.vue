<template>
  <div>
    <table class="table">
      <table-head :columns="columns" @sortTable="sortTable" />
      <tbody>
        <tr v-for="data in sortedData" :key="data.id">
          <td>{{ data.id }}</td>
          <td>{{ data.firstName }}</td>
          <td>{{ data.lastName }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableHead from "@/components/TableHead";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataTable",
  components: {
    TableHead,
  },
  created() {
    this.fetchTableData();
  },
  data: () => ({
    curSortedBy: "id",
    reverse: false,
    columns: ["id", "firstName", "lastName", "email", "phone"],
  }),
  computed: {
    ...mapGetters("table", ["tableData"]),
    sortedData() {
      const key = this.curSortedBy;
      return [...this.tableData].sort((a, b) => {
        let modifier = this.reverse ? -1 : 1;

        if (a[key] < b[key]) return -1 * modifier;
        if (a[key] > b[key]) return 1 * modifier;

        return 0;
      });
    },
  },
  methods: {
    ...mapActions("table", ["fetchTableData"]),
    sortTable(sortBy) {
      this.reverse = this.curSortedBy == sortBy ? !this.reverse : false;
      this.curSortedBy = sortBy;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
