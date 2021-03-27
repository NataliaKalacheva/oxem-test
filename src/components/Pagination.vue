<template>
  <div v-if="showPagination" class="row">
    <nav class="col">
      <ul class="pagination">
        <li>
          <button
            @click="goToPage(1)"
            :disabled="isActive(1)"
            type="button"
            class="waves-effect btn"
            area-label="First"
          >
            First
          </button>
        </li>
        <li>
          <button
            @click="goToPevious"
            :disabled="isActive(1)"
            type="button"
            class="waves-effect btn"
            area-label="Previous"
          >
            <i class="material-icons">keyboard_arrow_left</i>
          </button>
        </li>
        <li v-for="page in pagesToShow" :key="page">
          <button
            type="button"
            class="waves-effect btn btn-flat"
            @click="goToPage(page)"
            :disabled="isActive(page)"
          >
            {{ page }}
          </button>
        </li>
        <li>
          <button
            @click="goToNext"
            :disabled="isActive(pagesQty)"
            type="button"
            class="waves-effect btn"
            area-label="Next"
          >
            <i class="material-icons">keyboard_arrow_right</i>
          </button>
        </li>
        <li>
          <button
            @click="goToPage(pagesQty)"
            :disabled="isActive(pagesQty)"
            type="button"
            class="waves-effect btn"
            area-label="Last"
          >
            Last
          </button>
        </li>
      </ul>
    </nav>
  </div>
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
    visibleQty: 3,
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
      console.log(page);
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

.material-icons {
  height: auto;
  line-height: 0;
}

@media only screen and (max-width: 768px) {
  .btn {
    padding: 5px 7px;
    line-height: 1;
  }
}
</style>
