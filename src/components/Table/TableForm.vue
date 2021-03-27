<template>
  <form @submit="onSubmitForm" class="col s12 table-form" novalidate>
    <div class="row">
      <ui-input
        class="input-field col s4"
        name="id"
        type="number"
        :label="'Id'"
        :helper="errors.id"
        v-model.number="formData.id"
      />
      <ui-input
        class="input-field col s4"
        name="first_name"
        type="text"
        :label="'First Name'"
        :helper="errors.firstName"
        v-model="formData.firstName"
      />
      <ui-input
        class="input-field col s4"
        name="last_name"
        type="text"
        :label="'Last Name'"
        :helper="errors.lastName"
        v-model="formData.lastName"
      />
    </div>
    <div class="row">
      <ui-input
        class="input-field col s6"
        name="email"
        type="email"
        :label="'Email'"
        :helper="errors.email"
        v-model="formData.email"
      />
      <ui-input-tel
        class="input-field col s6"
        name="phone"
        :label="'Phone'"
        :helper="errors.phone"
        v-model="formData.phone"
      />
    </div>
    <div class="row">
      <p>
        <input
          class="btn"
          type="submit"
          value="Добавить в таблицу"
          :disabled="!isFormFilled"
        />
      </p>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import "@/helpers/masks/phone.js";
import UiInput from "@/components/Ui/UiInput";
import UiInputTel from "@/components/Ui/UiInputTel";
import checkPhone from "@/helpers/validators/checkPhone.js";
import checkNumber from "@/helpers/validators/checkNumber.js";

export default {
  name: "TableForm",
  components: {
    UiInput,
    UiInputTel,
  },
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
      return Object.keys(this.formData).every((key) =>
        Boolean(this.formData[key])
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
      this.validateForm();
    },
    validateForm() {
      let valid = true;
      if (!checkNumber(this.formData.id)) {
        this.errors.id = "Please input digits greater than 0";
        valid = false;
      }
      if (!checkPhone(this.formData.phone)) {
        this.errors.phone = "Phone should contain 13 symbols as (999)888-7777";
        valid = false;
      }

      return valid;
    },
    submitForm() {},
  },
};
</script>

<style>
.table-form {
  text-align: left;
}
</style>
