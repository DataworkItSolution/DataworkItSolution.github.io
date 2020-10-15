<template>

  <v-footer dark color="black" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        color="white"
        text
        rounded
        class="my-2 font-weight-light"
        :to="link.route">{{ link.name }}</v-btn>

      <v-col class="text-center" dark cols="12">
        <v-divider></v-divider>
        {{ new Date().getFullYear() }} — 
        <v-icon small>mdi-copyright</v-icon>
        <strong>DataWork IT Solutions</strong>
      </v-col>
    </v-row>
  </v-footer>

</template>

<script>
export default {
  data: () => ({
    links: [
      { name: "Home", route: "/" },
      { name: "Impressum", route: "/impressum" },
      { name: "Datenschutz", route: "/datenschutz" },
      { name: "AGB", route: "/agb" },
    ],
  }),
};
</script>
