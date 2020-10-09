<template>
  <div id="landing">
    <v-row class="grey lighten-3">
      <v-col align="center">
        <v-img
          height="300px"
          width="500px"
          src="../assets/Logo_muster_blau.png"
        ></v-img>
        <p class="grey--text text--darken-4 pt-5">
          <span> Durch </span>
          <span class="font-weight-bold"> Begeisterung </span>
          <span>
            an Technik und Vertrauen in die Medien, <br />
            verändern wir die Industrie mit digitalen
          </span>
          <span class="font-weight-bold"> Softwarelösungen! </span>
        </p>

        <v-btn
          @click="$vuetify.goTo('#team')"
          outlined
          fab
          text
          border
          class="blue--text animate__animated animate__slideInDown animate__repeat-3"
          ><v-icon x-large> mdi-chevron-double-down </v-icon></v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  /* background-image: url("../assets/versuch1.jpg"); */
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

p {
  font-size: 25px;
}

.animate__animated.animate__slideInDown {
  --animate-duration: 2s;
  --animate-delay: 0.9s;
}
</style>
