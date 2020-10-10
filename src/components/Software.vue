<template>
  <v-container fluid id="product" class="grey lighten-3 blue--text">
  
        <h1 class="pt-16">WebTrack</h1>

        <v-progress-linear
      buffer-value="60"
      value="40"
      stream
      color="orange"
    ></v-progress-linear>
  
  <v-row wrap align="center" no-gutters>
    <!-- //Left Space (1/12) -->
    <v-col 
          xs="12"
          sm="12"
          md="1"
          lg="1"
          xl="1"
          class="pa-1">
          
    </v-col>

    <!-- //Content (9/12) -->
    <v-col  cols="12"
          xs="12"
          sm="12"
          md="9"
          lg="9"
          xl="9"
          class="pa-1">
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
          
    </v-col>

    <!-- //Button (2/12) -->
    <v-col
          xs="12"
          sm="12"
          md="2"
          lg="2"
          xl="2"
          class="pa-1"
          align="start"
          justify="center">
        <v-btn
          large
          elevation="4"
          dark
          class="blue animate__animated animate__bounceIn animate__repeat-3">
          <v-icon left small>mdi-omega</v-icon>
          <span>WebTrack</span>
        </v-btn>
          
    </v-col>
  </v-row>
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
  
  font-family: "Raleway", sans-serif;
}

.animate__animated.animate__bounceIn {
  --animate-duration: 4s;
  --animate-delay: 3s;
}
</style>
