<template>
  <v-container id="product" class="grey lighten-3 blue--text">
    <h1 class="pt-16">WebTrack</h1>
    <v-layout row wrap>
      <v-flex md1> </v-flex>
      <v-flex md8 class="">
        <p class="pt-5">
          <span>
            Kommunikation ist ein häufiger Gegner von fehlerfreien
            Prozessketten. <br />Deshalb schaffen wir Kundenbindung durch
            Klarheit und Durchsicht. <br />
          </span>
          <span>
            Wir bieten ein Werkzeug, welches die Kommunikation auf eine neue
            Ebene bringt.<br /><br />
          </span>
          <span>Dieses Werkzeug nennt sich</span>
          <span class="font-weight-bold"> WebTrack <br /><br /></span>
          <span
            >WebTrack bietet Ihnen die Möglichkeit, Ihren Kunden, <br />
            den Status einer Bestellung in Echtzeit wiederzugeben.<br />
          </span>
          <span
            >Durch intuitive Bedienung einer Benutzeroberfläche kann<br />
            WebTrack einfach und schnell in den Bestellvorgang integriert
            werden.<br
          /></span>
          <span
            >Sie sind genauso begeistert wie wir, dann erfahren Sie hier mehr
            davon.</span
          >
        </p>
      </v-flex>
      <v-flex md3>
        <v-btn
          large
          elevation="4"
          dark
          class="blue animate__animated animate__bounceIn animate__repeat-3"
        >
          <v-icon left small>mdi-omega</v-icon>
          <span>WebTrack</span>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
}
p {
  font-size: 24px;
}
div {
  width: 100vw;
  height: 100vh;
  font-family: "Raleway", sans-serif;
}

.animate__animated.animate__bounceIn {
  --animate-duration: 4s;
  --animate-delay: 3s;
}
</style>
