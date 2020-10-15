<template>
  <v-container fluid id="team" class="sizeBackground grey lighten-4">
    <h1 class="blue--text font-weight-bold pt-1">Gründer und Team</h1>
    <v-row wrap class="pb-5 pt-5" align="center" no-gutters>
        <v-col v-for="leader in leaders" :key="leader.name" cols="12"
          xs="12"
          sm="6"
          md="3"
          lg="3"
          xl="3"
          class="pa-1">
          <v-hover close-delay="200" v-slot:default="{ hover }"
            ><v-card
              class="pa-1 mx-auto"
              dark
              width="300px"
              height="450px"
              :elevation="hover ? 20 : 2"
              align="center"
            >
              <v-card-title :class="{ 'blue--text': hover }">
                {{ leader.name }}
              </v-card-title>

              <v-avatar size="200">
                  <v-img
                    class="white--text align-end"
                    :src="require(`@/assets/${leader.bild}`)" :alt="leader.name"
                  />
              </v-avatar>

              <v-card-subtitle class="pb-4" align="center">
                {{leader.skill }}
              </v-card-subtitle>

              <v-card-text align="center" class="white--text">
                <p>{{ leader.title }}<br>{{leader.job}}</p>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="">
                <v-spacer></v-spacer>
                <v-btn text color="blue" :href="leader.linkedin" target="_blank">
                  <v-icon left color="">mdi-linkedin</v-icon>
                  <span>contact</span>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    leaders: [
      {
        name: "Thomas Sindlinger",
        skill: "Website und Frontend",
        title: "Bachelor Student",
        job:"Maschinenbau",
        company:"Hochschule Esslingen - University of Applied Sciences",
        bild: "Profilbild/Profilbild_thomas.jpg",
        linkedin: "https://www.linkedin.com/in/thomas-sindlinger-38b0721b8",
      },
      {
        name: "Michael Sindlinger",
        skill: "Patentrechte und AGBs",
        title: "Master Student",
        job: "Technologie Management",
        company: "Universität Stuttgart",
        bild: "Logo_muster_blau.png",
        linkedin: "https://www.linkedin.com/in/michael-sindlinger-3a33a51b9/",
      },
      {
        name: "Marius Walz",
        skill: "Canvas und Business-Plan",
        title: "Master Student",
        job:"Mechanical Engineering",
        company:"Konstanz - Hochschule für Technik, Wirtschaft und Gestaltung",
        bild: "Profilbild/Profilbild_marius.jpg",
        linkedin: "https://www.linkedin.com/in/marius-walz-5980801b4/",
      },
      {
        name: "Dominik Ratzel",
        skill: "Backend und Frontend",
        title: "Bachelor Student",
        job: "Medieninformatik",
        company: "Hochschule der Medien - Stuttgart",
        bild: "Profilbild/Profilbild_dominik.jpeg",
        linkedin: "https://www.linkedin.com/in/dominik-ratzel-19652a1a3/",
      },
    ],
    show: false,
  }),

  methods: {},
  computed: {
    getImg(path) {
      return require(path);
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
h1 {
  text-align: center;
}

// .sizeBackground{
//  width: 100vw;
//   height: 100vh;
// }

div {
  font-family: "Raleway", sans-serif;
}
</style>
