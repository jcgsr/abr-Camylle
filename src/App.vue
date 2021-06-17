<template>
  <div id="app">
    <Header id="header" />
    <main>
      <transition
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: { Header, Footer },
  watch: {
    $route: {
      handler: (to) => {
        document.title = to.meta.title || "Camylle Azevedo";
      },
      immediate: true,
    },
  },
  metaInfo() {
    return {
      meta: [
        {
          name: "description",
          content:
            "Camylle Azevedo é psicóloga infantil na cidade de Aracaju-SE.",
        },
        // Twitter Card
        { name: "twitter:card", content: "Camylle Azevedo" },
        {
          name: "twitter:title",
          content: "Site de Camylle Azevedo - Psicóloga Infantil",
        },
        {
          name: "twitter:description",
          content: "Site de Camylle Azevedo",
        },
        // image must be an absolute path
        { name: "twitter:image", content: this.logo },
        // Facebook OpenGraph
        {
          property: "og:title",
          content: "Site de Camylle Azevedo - Psicóloga Infantil",
        },
        { property: "og:site_name", content: "Camylle Azevedo" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: this.logo },
        { property: "og:image:width", content: "400" },
        { property: "og:image:height", content: "300" },
        {
          property: "og:description",
          content: "Site de Camylle Azevedo",
        },
        { name: "robots", content: "index, follow" },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,400;0,700;1,400&display=swap");
html,
*,
body {
  color: #919da7;
  font-family: "Bitter", Georgia, Times, "Times New Roman", serif;
}
</style>
