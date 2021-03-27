<template>
  <div v-if="data.id" class="row">
    <div class="card-panel teal">
      <span class="white-text">
        <p>
          Выбран пользователь: <b>{{ fullName }}</b>
        </p>
        <p>
          Описание:
          <ui-text-area
            :data="data.description"
            @input="onInput"
            class="materialize-textarea"
          ></ui-text-area>
        </p>
        <p>
          Адрес проживания: <b>{{ data.address.streetAddress }}</b>
        </p>
        <p>
          Город: <b>{{ data.address.city }}</b>
        </p>
        <p>
          Провинция/штат: <b>{{ data.address.state }}</b>
        </p>
        <p>
          Индекс: <b>{{ data.address.zip }}</b>
        </p>
      </span>
    </div>
  </div>
</template>

<script>
import UiTextArea from "@/components/UiTextArea";

export default {
  name: "TableRowDetails",
  components: {
    UiTextArea,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.data.firstName} ${this.data.lastName}`;
    },
  },
  methods: {
    onInput(value) {
      this.data.description = value;
    },
  },
};
</script>

<style scoped>
.card-panel {
  text-align: left;
}
</style>
