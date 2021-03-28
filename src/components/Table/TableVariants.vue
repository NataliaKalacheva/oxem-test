<template>
  <ul class="table-variants">
    <li v-for="variant in variants" :key="variant.value">
      <button
        class="waves-effect waves-light btn"
        :disabled="isDisabled(variant)"
        @click="setTableVariant(variant.value)"
      >
        {{ variant.name }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import tableVariants from "@/constants/tableVariants";

export default {
  name: "TableVariants",
  data: () => ({
    variants: tableVariants,
  }),
  watch: {
    selectedVariant: "fetchTableData",
  },
  computed: {
    ...mapGetters("table", ["selectedVariant", "isTableLoading"]),
  },
  methods: {
    ...mapActions("table", ["setTableVariant", "fetchTableData"]),
    isDisabled(variant) {
      return (
        variant.value === this.selectedVariant.value || this.isTableLoading
      );
    },
  },
};
</script>

<style scoped>
.table-variants {
  list-style: none;
  display: flex;
  justify-content: center;
}
</style>
