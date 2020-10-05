<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Foot />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Foot from "./components/Foot";

export default {
  name: "App",

  components: {
    NavBar,
    Foot,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400&display=swap");
</style>
