<template>
  <div id="landing">
    <h1
      class="display-3 red--text font-weight-bold text--darken-5 text-uppercase pt-16"
    >
      DataWork
    </h1>
    <h1 class="display-3 red--text text--darken-5 text-uppercase pt-5">
      IT Solutions
    </h1>
    <hr class="red" />
    <p class="lime--text font-weight-bold pt-10">
      Durch Begeisterung an Technik und Vertrauen in die Medien, <br />
      verändern wir die Industrie mit digitalen Softwarelösungen!
    </p>
    <v-btn
      @click="$vuetify.goTo('#team')"
      outlined
      fab
      text
      border
      x-large
      class="blue--text my-5"
      ><v-icon> mdi-chevron-double-down </v-icon></v-btn
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background-image: url("../assets/hintergrund1.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

p {
  font-size: 30px;
}

hr {
  width: 15%;
  height: 4px;
  text-align: center;
  margin: 2% auto 3% auto;
  border: none;
}
</style>
