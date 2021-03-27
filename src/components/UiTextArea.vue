<template>
  <div class="row">
    <form>
      <div class="input-field">
        <i class="material-icons prefix">mode_edit</i>
        <textarea
          :id="id"
          class="materialize-textarea"
          :value="data"
          @input="updateValue($event.target.value)"
        ></textarea>
        <label :for="id"></label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "UiTextArea",
  props: {
    data: {
      type: String,
      default: "",
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
.materialize-textarea {
  min-height: 6rem;
  color: inherit;
}
.input-field {
  margin-bottom: 0;
}
</style>
