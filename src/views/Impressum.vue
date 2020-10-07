<template>
  <div class="impressum">
    <h1>This is an Impressum</h1>
    <v-btn small elevation="1" color="red" @click="route">
      <v-icon color="blue">mdi-heart</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    route: function () {
      console.log("Hallo ich bin ein Eumel 0.0");
    },
  },
};
</script>