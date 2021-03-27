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
            v-model="data.description"
            class="materialize-textarea"
          ></ui-text-area>
        </p>
        <template v-if="data.address">
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
        </template>
      </span>
    </div>
  </div>
</template>

<script>
import UiTextArea from "@/components/Ui/UiTextArea";

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
};
</script>

<style scoped>
.card-panel {
  text-align: left;
}
</style>
