<template>
  <div>
    <template v-if="sortedData.length">
      <table class="table">
        <table-head :columns="columns" @sort-table="onSortTable" />
        <table-body :bodyData="displayedTable" />
      </table>
      <pagination
        :total="sortedData.length"
        :per-page="perPage"
        :cur-page="curPage"
        @page-change="onPageChange"
      />
    </template>
    <template v-else>
      <empty-msg />
    </template>
  </div>
</template>

<script>
import TableHead from "@/components/TableHead";
import TableBody from "@/components/TableBody";
import Pagination from "@/components/Pagination";
import EmptyMsg from "@/components/EmptyMsg";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataTable",
  components: {
    TableHead,
    TableBody,
    Pagination,
    EmptyMsg,
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
