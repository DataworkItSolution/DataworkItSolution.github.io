<template>
  <v-footer dark color="black" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
        >{{ link }}</v-btn
      >
      <v-col class="text-center" dark cols="12">
        {{ new Date().getFullYear() }} —
        <strong>DataWorks</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),
};
</script>
