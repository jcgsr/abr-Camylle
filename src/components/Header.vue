<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="contents">
        <router-link to="/" class="navbar-brand">
          <img id="sign" :src="require('../assets/signature.jpeg')" />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                <router-link to="/acolhimento">ACOLHIMENTO</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                <router-link to="/avaliacao">AVALIAÇÃO</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                <router-link to="/intervencao"
                  >INTERVENÇÃO ABA INTENSIVA</router-link
                >
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                <router-link to="/treinamento"
                  >TREINAMENTO PARENTAL</router-link
                >
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                <router-link to="/supervisao"
                  >SUPERVISÃO PROFISSIONAL</router-link
                >
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                <router-link to="/cursos">CURSOS</router-link>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                <router-link to="/fale">FALE CONOSCO</router-link>
              </button>
            </li>
          </ul>
        </div>
      </div>
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
}
.navbar-toggler {
  background-color: #869bac;
}
.contents {
  display: flex;
  align-items: center;
}
</style>
