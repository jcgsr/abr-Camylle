<template>
  <div class="acolhimento">
    <Header />
    <img :src="require('../assets/capa2.jpg')" alt="Camylle" />
    <h1>Acolhimento</h1>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Acolhimento",
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
  width: 100%;
}
</style>