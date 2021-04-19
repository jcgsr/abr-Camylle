<template>
  <div class="treinamento">
    <div class="card mt-2 mb-2 shadow">
      <img :src="require('../assets/clients.jpg')" alt="Camylle" />
      <div class="card-body">
        <h5 class="card-title">TREINAMENTO PARENTAL</h5>
        <div class="card-text">
          <p>
            O Treinamento Parental é um conjunto de orientações realizadas pelo
            terapeuta em sessões com os pais, responsáveis ou cuidadores do
            paciente em tratamento. Essas sessões podem ser focadas em
            comportamento, comunicação, psicoeducação ou para fatores
            específicos como problemas relacionados ao sono, alimentação ou
            rotinas individuais, por exemplo. A eficácia desse tipo de
            metodologia está descrita na literatura com resultados positivos,
            especialmente para pacientes do TEA.
          </p>
          <p>
            O serviço consiste em 2 sessões por mês com duração de 02hrs cada e
            em cada sessão serão feitos questionários pré-intervenção com o
            intuito de mapear as demandas de orientação e ao final da sessão
            materiais de suporte para o feedback da intervenção.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Treinamento",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="css">
h1 {
  text-align: center;
}
img {
  width: 100%;
}
</style>
