<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">
      <img id="sign" :src="require('../assets/signature.jpeg')" />
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <button type="button" class="btn btn-light">
            <router-link to="/acolhimento">ACOLHIMENTO</router-link>
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-light">
            <router-link to="/avaliacao">AVALIAÇÃO</router-link>
          </button>
        </li>
        <li class="nav-item dropdown">
          <button type="button" class="btn btn-light">
            <router-link to="/intervencao"
              >INTERVENÇÃO ABA INTENSIVA</router-link
            >
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-light">
            <router-link to="/treinamento">TREINAMENTO PARENTAL</router-link>
          </button>
        </li>

        <li>
          <button type="button" class="btn btn-light">
            <router-link to="/supervisao">SUPERVISÃO PROFISSIONAL</router-link>
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-light">
            <router-link to="/cursos">CURSOS</router-link>
          </button>
        </li>
        <li>
          <button type="button" class="btn btn-light">
            <router-link to="/fale">FALE CONOSCO</router-link>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="css">
img#sign {
  height: 8rem;
}
.navbar {
  position: fixed;
  width: 100%;
  background-color: rgba(252, 254, 255, 255);
}
.navbar li a {
  color: #869bac;
  text-decoration: none;
  display: flex;
}
ul li {
  text-align: left;
}
@media screen and (max-width: 456px) {
  img#sign {
    width: 250px;
    height: 100px;
  }
}
</style>
