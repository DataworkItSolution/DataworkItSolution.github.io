<template>
  <div class="home animate__animated animate__fadeIn">
   <Background />
    <Persons />
    <Software />
    <Service />
  </div>
</template>

<script>
import Background from "../components/Background";
import Persons from "../components/Persons";
import Software from "../components/Software";
import Service from "../components/Service";

export default {
  components: {
    Background,
    Persons,
    Software,
    Service,
  },
};
</script>

<style scoped>
</style>
