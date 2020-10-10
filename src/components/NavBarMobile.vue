<template>
  <v-app-bar v-if="this.$route.name == 'Home'" app dark>

    <v-spacer></v-spacer>

    <v-menu offset-y
    transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn fab dark v-bind="attrs" v-on="on">
          <v-icon color="blue">mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list dark>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="sectionScroll(item.section)"
        >
          <v-icon small left color="blue">{{ item.icon }}</v-icon>
          <v-list-item-title class ="grey--text text--lighten-1 text-uppercase"> <span>{{ item.title }} </span>  </v-list-item-title>
          
        </v-list-item>
        <Contact />
      </v-list>
      
    </v-menu>

    <v-btn text @click="$vuetify.goTo('#landing')">
      <span class="font-weight-bold">Data</span>
      <span class="font-weight-light">Work</span>
    </v-btn>

    <v-spacer></v-spacer>

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
  data: () => ({
    items: [
      { title: "Team", icon: "mdi-account-group", section: "#team" },
      { title: "Produkt", icon: "mdi-laptop-chromebook", section: "#product" },
      { title: "Service", icon: "mdi-offer", section: "#service" },
    ],
  }),
  components: { Contact },
    methods: {
      sectionScroll: function(sectionID) {
        this.$vuetify.goTo(sectionID);
      }, 
    },
};
</script>

<style scoped>
span{
  font-family: "Raleway", sans-serif;
}
</style>
