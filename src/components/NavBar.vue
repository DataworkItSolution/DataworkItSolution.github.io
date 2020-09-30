<template>
  <v-app-bar app dark>
    <v-app-bar-nav-icon> </v-app-bar-nav-icon>

    <div @click="$vuetify.goTo('#landing')">
      <span class="font-weight-bold">Data</span>
      <span class="font-weight-light">Work</span>
    </div>

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
</template>


<script>
import Contact from "../components/Contact";

export default {
  components: { Contact },
};
</script>

<style scoped></style>
