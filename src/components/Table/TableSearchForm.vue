<template>
  <form @submit="onSubmitForm" novalidate class="row valign-wrapper">
    <ui-input
      name="search"
      type="text"
      :label="'Search'"
      v-model="query"
      class="col s8"
      @input="onInput"
    />
    <input class="btn col s4" type="submit" value="Найти" />
  </form>
</template>

<script>
import UiInput from "@/components/Ui/UiInput";

export default {
  name: "TableSearchForm",
  components: {
    UiInput,
  },
  data: () => ({
    query: "",
  }),
  methods: {
    onSubmitForm(e) {
      e.preventDefault();
      this.$emit("submit", this.query);
    },
    onInput() {
      if (this.query === "") {
        this.$emit("cleared", this.query);
      }
    },
  },
};
</script>
