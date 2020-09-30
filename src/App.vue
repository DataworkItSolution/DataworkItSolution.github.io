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

<style scoped>
</style>
