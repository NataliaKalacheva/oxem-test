<template>
  <ul class="table-variants">
    <li v-for="variant in tableVariants" :key="variant.value">
      <button
        :disabled="variant.value === selectedVariant.value"
        @click="setTableVariant(variant.value)"
      >
        {{ variant.name }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TableVariants",
  data: () => ({
    variants: ["Mini Data", "Big Data"],
  }),
  watch: {
    selectedVariant: "fetchTableData",
  },
  computed: {
    ...mapGetters("table", ["tableVariants", "selectedVariant"]),
  },
  methods: {
    ...mapActions("table", ["setTableVariant", "fetchTableData"]),
  },
};
</script>

<style>
.table-variants {
  list-style: none;
  display: flex;
  justify-content: center;
}
</style>
