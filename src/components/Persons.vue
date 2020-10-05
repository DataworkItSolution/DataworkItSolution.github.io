<template>
  <div id="team" class="grey lighten-4">
    <h1 class="display-2 blue--text font-weight-bold text-uppercase pt-15">
      Gründer und Team
    </h1>

    <v-layout row wrap class="pb-16">
      <v-flex
        class="px-2"
        xs12
        sm6
        md3
        lg3
        xl3
        v-for="leader in leaders"
        :key="leader.name"
      >
        <v-card
          class="mx-auto pa-1"
          dark
          max-width="300px"
          max-height="700px"
          elevation="10"
        >
          <v-card-title>
            {{ leader.name }}
          </v-card-title>

          <v-row class="px-14">
            <v-avatar size="200">
              <v-img class="white--text align-end" :src="leader.bild"> </v-img>
            </v-avatar>
          </v-row>
          <v-card-subtitle class="pb-2">{{ leader.skill }}</v-card-subtitle>
          <v-card-text class="">
            <p>{{ leader.description }}</p>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="blue" :href="leader.linkedin" target="_blank">
              <v-icon left color="">mdi-linkedin</v-icon>
              <span>contact</span>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    leaders: [
      {
        name: "Thomas Sindlinger",
        skill: "Website und Frontend",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quos sed cumque magni natus animi perspiciatis necessitatibus veniam reiciendis placeat, odit molestias reprehenderit exercitationem facere! Fugiat corporis veritatis labore? Alias!",
        bild: "https://cdn.vuetifyjs.com/images/cards/store.jpg",
        linkedin: "https://www.linkedin.com/in/thomas-sindlinger-38b0721b8",
      },
      {
        name: "Michael Sindlinger",
        skill: "Patentrechte und AGBs",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quos sed cumque magni natus animi perspiciatis necessitatibus veniam reiciendis placeat, odit molestias reprehenderit exercitationem facere! Fugiat corporis veritatis labore? Alias!",
        bild: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        linkedin: "https://www2.hs-esslingen.de/~thsimb00/",
      },
      {
        name: "Marius Walz",
        skill: "Canvas und Business-Plan",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quos sed cumque magni natus animi perspiciatis necessitatibus veniam reiciendis placeat, odit molestias reprehenderit exercitationem facere! Fugiat corporis veritatis labore? Alias!",
        bild: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        linkedin: "https://www2.hs-esslingen.de/~thsimb00/",
      },
      {
        name: "Dominik Ratzel",
        skill: "Backend und Frontend",
        description:
          " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quos sed cumque magni natus animi perspiciatis necessitatibus veniam reiciendis placeat, odit molestias reprehenderit exercitationem facere! Fugiat corporis veritatis labore? Alias!",
        bild: "../assets/hintergrund1.jpg",
        linkedin: "https://www2.hs-esslingen.de/~thsimb00/",
      },
    ],
  }),

  methods: {
    linkedIn: function () {
      {
        href: leader.linkedin;
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  height: 30vh;
}
</style>
