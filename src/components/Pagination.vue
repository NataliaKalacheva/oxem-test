<template>
  <nav v-if="showPagination">
    <ul class="pagination">
      <li>
        <button @click="goToPevious" :disabled="isActive(1)">Previous</button>
      </li>

      <li v-for="page in pagesToShow" :key="page">
        <button
          type="button"
          @click="goToPage(page)"
          :disabled="isActive(page)"
        >
          {{ page }}
        </button>
      </li>

      <li>
        <button @click="goToNext" :disabled="isActive(pagesQty)">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    curPage: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    visibleQty: 10,
  }),
  computed: {
    showPagination() {
      return this.total !== this.perPage;
    },
    pagesQty() {
      return Math.ceil(this.total / this.perPage);
    },
    pagesToShow() {
      const row = [...Array(this.pagesQty).keys()]
        .map((item) => ++item)
        .slice(this.curPage - 1, this.curPage + this.visibleQty);

      return row;
    },
  },
  methods: {
    goToPevious() {
      this.$emit("page-change", this.curPage - 1);
    },
    goToPage(page) {
      this.$emit("page-change", page);
    },
    goToNext() {
      this.$emit("page-change", this.curPage + 1);
    },
    isActive(page) {
      return this.curPage === page;
    },
  },
};
</script>

<style scoped>
.pagination {
  list-style: none;
  display: flex;
  justify-content: center;
}
</style>
