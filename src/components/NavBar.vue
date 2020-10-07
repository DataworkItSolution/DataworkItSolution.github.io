<template>
  <v-app-bar v-if="this.$route.name == 'Home'" app dark>
    <!-- <v-app-bar-nav-icon> </v-app-bar-nav-icon> -->

    <v-btn text @click="$vuetify.goTo('#landing')">
      <span class="font-weight-bold">Data</span>
      <span class="font-weight-light">Work</span>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn text @click="$vuetify.goTo('#team')">
      <v-icon color="blue" small left>mdi-account-group</v-icon>
      <span class="grey--text text--lighten-1">Team</span>
    </v-btn>

    <v-btn text @click="$vuetify.goTo('#product')">
      <v-icon left color="blue" small>mdi-laptop-chromebook</v-icon>
      <span class="grey--text text--lighten-1">Produkt</span>
    </v-btn>

    <v-btn text @click="$vuetify.goTo('#service')">
      <v-icon left color="blue" small>mdi-offer</v-icon>
      <span class="grey--text text--lighten-1">Service</span>
    </v-btn>
    <Contact />
  </v-app-bar>

  <v-app-bar v-else app dark>
    <v-spacer></v-spacer>
    <v-btn text to="/">
      <v-icon color="blue" large>mdi-home</v-icon>
      <!-- <span right class="font-weight-bold">Data</span>
      <span class="font-weight-light">Work</span> -->
    </v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>


<script>
import Contact from "../components/Contact";

export default {
  components: { Contact },
};
</script>

<style scoped></style>
