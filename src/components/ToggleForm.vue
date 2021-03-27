<template>
  <div class="toggle-form">
    <button
      @click="toggleForm"
      class="btn-floating btn-large waves-effect waves-light"
    >
      <i class="material-icons">add</i>
    </button>

    <div v-if="isVisible" class="row">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ToggleForm",
  data: () => ({
    isVisible: false,
  }),
  methods: {
    toggleForm() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.toggle-form {
  text-align: right;
}
</style>
