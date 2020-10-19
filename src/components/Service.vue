<template>
  <v-container fluid id="service" class="blue--text">
  
    <v-row class="text-center">
      <v-col>
        <h1 class="pt-16">WebService</h1>
      </v-col>
    </v-row>

    <v-row class="text-center" v-for="item in 4" :key="item" >
      <v-col>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Voluptate odit quibusdam aut ut itaque vitae unde, architecto distinctio magnam, 
          voluptatibus amet pariatur doloribus incidunt nisi 
          minima libero perspiciatis totam mollitia?
        </div>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col>
        <v-btn  class="blue--text white">
          <v-icon small>mdi-information</v-icon>
          WebService
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
  font-size: 20px;
}
div {
  font-family: "Raleway", sans-serif;
}
</style>
