<template>
  <div class="header">
    <b-navbar id="nav" toggleable="lg" type="dark">
      <b-navbar-brand>
        <router-link to="/">
          <img :src="require('../assets/signature.jpeg')" />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="m-auto">
          <b-button variant="light">
            <router-link to="/acolhimento">ACOLHIMENTO</router-link>
          </b-button>
          <b-button variant="light">
            <router-link to="/avaliacao">AVALIAÇÃO</router-link>
          </b-button>
          <b-button variant="light">
            <router-link to="/intervencao"
              >INTERVENÇÃO ABA INTENSIVA</router-link
            >
          </b-button>
          <b-button variant="light">
            <router-link to="/intervencao">TREINAMENTO PARENTAL</router-link>
          </b-button>
          <b-button variant="light">
            <router-link to="/intervencao">SUPERVISÃO PROFISSIONAL</router-link>
          </b-button>
          <b-button variant="light">
            <router-link to="/intervencao">CURSOS</router-link>
          </b-button>
          <b-button variant="light">
            <router-link to="/intervencao">FALE CONOSCO</router-link>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="css" scoped>
img {
  height: 80px;
}
/*.bg-info {
    background-color: white !important;
    color: #869bac;
 }*/
.navbar {
  position: fixed;
  width: 100%;
  background-color: white;
}
.navbar a {
  color: #869bac;
  text-decoration: none;
}
.navbar-toggler {
  background-color: #869bac;
}
</style>