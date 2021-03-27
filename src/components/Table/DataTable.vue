<template>
  <div class="container">
    <loader v-if="isTableLoading" />

    <template v-if="tableData.length">
      <div class="row">
        <div class="col s12 m4">
          <search-input
            v-model="filteredBy"
            @input="onSearch"
            :label="'Search'"
          />
        </div>
        <div class="col s12 m8">
          <toggle-form>
            <template v-slot:content><table-form /></template>
          </toggle-form>
        </div>
      </div>

      <table class="responsive-table highlight centered">
        <table-head
          :columns="columns"
          :curSortKey="curSortedBy"
          :reverse="reverse"
          @sort-table="onSortTable"
        />
        <table-body :bodyData="displayedTable" @row-selected="onRowSelected" />
      </table>
      <pagination
        :total="filteredData.length"
        :per-page="perPage"
        :cur-page="curPage"
        @page-change="onPageChange"
      />
      <table-row-details :data="selectedRow" />
    </template>

    <template v-else-if="!isTableLoading">
      <empty-msg />
    </template>
  </div>
</template>

<script>
import Loader from "@/components/Ui/UiLoader";
import TableHead from "@/components/Table/TableHead";
import TableBody from "@/components/Table/TableBody";
import TableRowDetails from "@/components/Table/TableRowDetails";
import Pagination from "@/components/Common/Pagination";
import EmptyMsg from "@/components/Common/EmptyMsg";
import SearchInput from "@/components/Ui/UiSearchInput";
import ToggleForm from "@/components/Common/ToggleForm";
import TableForm from "@/components/Table/TableForm";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DataTable",
  components: {
    TableHead,
    TableBody,
    TableRowDetails,
    Pagination,
    EmptyMsg,
    Loader,
    SearchInput,
    TableForm,
    ToggleForm,
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
    perPage: 50,
    selectedRow: {},
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
    onSearch() {
      this.curPage = 1;
    },
    onPageChange(page) {
      this.curPage = page;
    },
    onRowSelected(data) {
      this.selectedRow = data;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
}
</style>
