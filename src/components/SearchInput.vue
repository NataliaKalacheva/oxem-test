<template>
  <div class="row">
    <div class="input-field col s6">
      <input
        id="first_name2"
        type="text"
        class="validate"
        :value="searchText"
        @input="updateValue($event.target.value)"
      />
      <label class="active" for="first_name2">Search</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    searchText: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>
