<template>
  <container fluid id="landing">
    <v-row class="grey lighten-3">
      <v-col align="center">
        <v-img
          :height="logoHeigth"
          :width="logoWidth"
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
          class="blue--text animate__animated animate__bounce animate__repeat-3"
          ><v-icon x-large> mdi-chevron-double-down </v-icon></v-btn
        >
      </v-col>
    </v-row>
  </container>
</template>

<script>
export default {
  computed: {
     logoHeigth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 150
        case 'sm': return 300
        case 'md': return 300
        case 'lg': return 300
        case 'xl': return 600
      }
    },
    logoWidth () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 250
        case 'sm': return 500
        case 'md': return 500
        case 'lg': return 500
        case 'xl': return 1000
      }
    }
  }


};
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

.animate__animated.animate__bounce {
  --animate-duration: 2s;
  --animate-delay: 0.9s;
}
</style>
