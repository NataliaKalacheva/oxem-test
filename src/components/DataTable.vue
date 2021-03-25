<template>
  <div class="container">
    <loader v-if="isTableLoading" />

    <template v-if="tableData.length">
      <search-input @input="onSearch" />
      <table class="responsive-table highlight centered">
        <table-head
          :columns="columns"
          :curSortKey="curSortedBy"
          :reverse="reverse"
          @sort-table="onSortTable"
        />
        <table-body :bodyData="displayedTable" />
      </table>
      <pagination
        :total="filteredData.length"
        :per-page="perPage"
        :cur-page="curPage"
        @page-change="onPageChange"
      />
    </template>

    <template v-else-if="!isTableLoading">
      <empty-msg />
    </template>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import TableHead from "@/components/TableHead";
import TableBody from "@/components/TableBody";
import Pagination from "@/components/Pagination";
import EmptyMsg from "@/components/EmptyMsg";
import SearchInput from "@/components/SearchInput";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataTable",
  components: {
    TableHead,
    TableBody,
    Pagination,
    EmptyMsg,
    Loader,
    SearchInput,
  },
  created() {
    this.fetchTableData();
  },
  data: () => ({
    filteredBy: "",
    curSortedBy: "id",
    reverse: false,
    columns: ["id", "firstName", "lastName", "email", "phone"],
    curPage: 1,
    perPage: 10,
  }),
  watch: {
    tableData: function () {
      this.curPage = 1;
    },
  },
  computed: {
    ...mapGetters("table", ["tableData", "isTableLoading"]),
    sortedData() {
      const key = this.curSortedBy;
      return [...this.tableData].sort((a, b) => {
        let modifier = this.reverse ? -1 : 1;

        if (a[key] < b[key]) return -1 * modifier;
        if (a[key] > b[key]) return 1 * modifier;

        return 0;
      });
    },
    filteredData() {
      return this.sortedData.filter((data) => {
        const string = JSON.stringify(data).toLowerCase();
        const filterKey = this.filteredBy.toLowerCase();
        return string.includes(filterKey);
      });
    },
    displayedTable() {
      let from = this.curPage * this.perPage - this.perPage;
      let to = this.curPage * this.perPage;

      return this.filteredBy.length
        ? this.filteredData.slice(from, to)
        : this.sortedData.slice(from, to);
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
    onSearch(value) {
      this.curPage = 1;
      this.filteredBy = value;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
