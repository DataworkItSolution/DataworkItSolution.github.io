<template>
  <v-app>
    <NavBarMobile v-if="mobileVersion" />
    <NavBar v-if="normalVersion" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Foot />
  </v-app>
</template>

<script>
import NavBarMobile from "./components/NavBarMobile";
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";

export default {
  name: "App",

  components: {
    NavBar,
    NavBarMobile,
    Foot,
  },

  data: () => ({
    NavbarMobile: true,
  }),

  computed:{
    mobileVersion () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
      }
    },
    normalVersion () {
      switch (this.$vuetify.breakpoint.name) {
        case 'md': return true
        case 'lg': return true
        case 'xl': return true
      }
    }
}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&display=swap");
</style>
