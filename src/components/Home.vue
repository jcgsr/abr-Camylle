<template>
  <div>
    <img :src="require('../assets/camylle_1.jpeg')" alt=""> 
  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      metaInfo() {
      return {
        meta: [
        // Twitter Card
        { name: "twitter:card", content: "Camylle Azevedo" },
        { name: "twitter:title", content: "Site de Camylle Azevedo - Psicóloga Infantil" },
        {
          name: "twitter:description",
          content: "Site de Camylle Azevedo",
        },
        // image must be an absolute path
        { name: "twitter:image", content: this.logo },
        // Facebook OpenGraph
        { property: "og:title", content: "Site de Camylle Azevedo - Psicóloga Infantil" },
        { property: "og:site_name", content: "Camylle Azevedo" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: this.logo },
        { property: "og:image:width", content: "400" },
        { property: "og:image:height", content: "300"},
        {
          property: "og:description",
          content: "Site de Camylle Azevedo",
        },
        ],
      };
    },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  text-align: center;
}
img {
  width: 100%;
  height: 50%;
}
</style>
