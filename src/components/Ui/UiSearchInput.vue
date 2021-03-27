<template>
  <div class="row">
    <div class="input-field col s12 m8">
      <input :id="id" type="text" @input="updateValue($event.target.value)" />
      <label class="active" :for="id">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: {
    label: {
      type: String,
      default: "Search",
    },
  },
  data: () => ({
    id: null,
  }),
  mounted() {
    this.id = this._uid;
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.input-field.col {
  padding: 0 0;
}
</style>
