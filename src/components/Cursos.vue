<template>
  <div class="cursos">
    <div class="card mb-2 shadow">
      <img :src="require('../assets/cursos.jpeg')" alt="Camylle" />
      <div class="card-body">
        <h5 class="card-title">CURSOS</h5>
        <div class="card-text">
          <p>
            <ul type="square">
              <li>Formação em AT.</li>
              <li>Do estágio ao consultório.</li>
              <li>Do consultório à clínica.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cursos",
};
</script>

<style lang="css">
h1 {
  text-align: center;
}
</style>
