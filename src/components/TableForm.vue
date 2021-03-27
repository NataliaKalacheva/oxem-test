<template>
  <form @submit="onSubmitForm" class="col s12 table-form">
    <div class="row">
      <p class="input-field col s4">
        <label for="id">Id</label>
        <input id="id" v-model="formData.id" type="number" name="id" />
        <span v-if="errors.id" class="helper-text">{{ errors.id }}</span>
      </p>
      <p class="input-field col s4">
        <label for="firstName">First Name</label>
        <input
          id="firstName"
          v-model="formData.firstName"
          type="text"
          name="firstName"
        />
        <span v-if="errors.firstName" class="helper-text">{{
          errors.firstName
        }}</span>
      </p>
      <p class="input-field col s4">
        <label for="lastName">Last Name</label>
        <input
          id="lastName"
          v-model="formData.lastName"
          type="text"
          name="lastName"
        />
        <span v-if="errors.lastName" class="helper-text">{{
          errors.lastName
        }}</span>
      </p>
    </div>
    <div class="row">
      <p class="input-field col s6">
        <label for="email">Email</label>
        <input id="email" v-model="formData.email" type="text" name="email" />
        <span v-if="errors.email" class="helper-text">{{ errors.email }}</span>
      </p>
      <p class="input-field col s6">
        <label for="phone">Phone</label>
        <input id="phone" v-model="formData.phone" type="text" name="phone" />
        <span v-if="errors.phone" class="helper-text">{{ errors.phone }}</span>
      </p>
    </div>
    <div class="row">
      <p>
        <input
          class="btn"
          type="submit"
          value="Submit"
          :disabled="!isFormFilled"
        />
      </p>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "TableForm",
  data: () => ({
    errors: {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
      phone: null,
    },
    formData: {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
    },
  }),
  computed: {
    isFormFilled() {
      return Object.keys(this.formData).every(
        (key) => this.formData[key] && this.formData[key].length
      );
    },
  },
  methods: {
    ...mapActions("table", ["addNewItem"]),
    clearErrors() {
      Object.keys(this.errors).forEach((key) => (this.errors[key] = null));
    },
    onSubmitForm(e) {
      e.preventDefault();
      this.clearErrors();
    },
    validateForm() {},
    submitForm() {},
  },
};
</script>

<style>
.table-form {
  text-align: left;
}
</style>
