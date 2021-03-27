<template>
  <div id="app">
    <h1>Hello World!</h1>
    <table-variants />
    <data-table />
  </div>
</template>

<script>
import DataTable from "./components/Table/DataTable.vue";
import TableVariants from "@/components/Table/TableVariants";

export default {
  name: "App",
  components: {
    DataTable,
    TableVariants,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
