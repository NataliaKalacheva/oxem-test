<template>
  <div class="toggle-form">
    <button @click="toggleForm" class="btn waves-effect waves-light">
      <slot name="button">
        <span class="valign-wrapper">
          <i class="material-icons">add</i> Добавить
        </span>
      </slot>
    </button>

    <div v-if="isVisible" class="row">
      <slot name="content" />
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
  padding-top: 40px;
  text-align: right;
}
</style>
