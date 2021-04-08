<template>
  <div>
    <Header />
    <img :src="require('../assets/capa3.jpg')" alt="Camylle" />
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
img {
  width: 100%;
}
</style>
