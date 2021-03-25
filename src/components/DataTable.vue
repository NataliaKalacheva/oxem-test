<template>
  <div>
    <table class="table">
      <table-head :columns="columns" @sort-table="onSortTable" />
      <tbody>
        <tr v-for="(data, i) in displayedTable" :key="`${data.id}${i}`">
          <td>{{ data.id }}</td>
          <td>{{ data.firstName }}</td>
          <td>{{ data.lastName }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.phone }}</td>
        </tr>
      </tbody>
    </table>
    <pagination
      :total="sortedData.length"
      :per-page="perPage"
      :cur-page="curPage"
      @page-change="onPageChange"
    />
  </div>
</template>

<script>
import TableHead from "@/components/TableHead";
import Pagination from "@/components/Pagination";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataTable",
  components: {
    TableHead,
    Pagination,
  },
  created() {
    this.fetchTableData();
  },
  data: () => ({
    curSortedBy: "id",
    reverse: false,
    columns: ["id", "firstName", "lastName", "email", "phone"],
    curPage: 1,
    perPage: 10,
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
    displayedTable() {
      let from = this.curPage * this.perPage - this.perPage;
      let to = this.curPage * this.perPage;

      return this.sortedData.slice(from, to);
    },
  },
  methods: {
    ...mapActions("table", ["fetchTableData"]),
    onSortTable(sortBy) {
      this.reverse = this.curSortedBy == sortBy ? !this.reverse : false;
      this.curSortedBy = sortBy;
    },
    onPageChange(page) {
      console.log(page);
      this.curPage = page;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
