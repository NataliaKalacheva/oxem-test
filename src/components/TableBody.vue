<template>
  <tbody>
    <tr v-for="(data, i) in bodyData" :key="`${data.id}-${i}`">
      <td>{{ data.id }}</td>
      <td>{{ data.firstName }}</td>
      <td>{{ data.lastName }}</td>
      <td>{{ data.email }}</td>
      <td>{{ data.phone }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "TableBody",
  props: {
    bodyData: {
      type: Array,
      required: true,
    },
  },
};
</script>
