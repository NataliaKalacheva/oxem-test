<template>
  <p class="ui-input__container">
    <label :for="id">{{ label }}</label>
    <input :id="id" @input="updateValue($event.target.value)" v-bind="$attrs" />
    <span v-if="helper" class="helper-text">{{ helper }}</span>
  </p>
</template>

<script>
export default {
  name: "UiInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    helper: {
      type: String,
      default: null,
    },
  },
  mounted() {
    this.id = this._uid;
  },
  data: () => ({
    id: null,
  }),
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
.ui-input__container::v-deep .helper-text {
  color: #ee6e73;
}
</style>
