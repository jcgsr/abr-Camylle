<template>
  <div class="avaliacao">
    <Header />
    <img :src="require('../assets/clients.jpg')" alt="Camylle" />
    <h1>Avaliação</h1>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Avaliacao",
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
h1 {
  text-align: center;
}
img {
  background-image: url("../assets/clients.jpg");
  width: 100%;
}
</style>