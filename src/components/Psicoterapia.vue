<template>
  <div class="psico">
    <div class="card mt-2 mb-2 shadow">
      <img
        class="card-img"
        :src="require('../assets/capa3.jpg')"
        alt="Camylle"
      />
      <div class="card-body">
        <h5 class="card-title">PSICOTERAPIA</h5>
        <div class="card-text">
          <p>
            A intervenção de um psicólogo se faz necessária quando a criança apresenta algum atraso na aquisição das habilidades estipuladas nos marcos de desenvolvimento correspondentes a sua faixa etária. 
          </p>
          <p>
            Nessa situação, a psicoterapia irá auxiliar a criança por meio de jogos, exercícios, atividades e outros recursos que visem a estimulação adequada da capacidade de aprendizagem da criança, promovendo sua adaptação às novas demandas inseridas no contexto terapêutico e fortalecendo seu potencial de assimilação de novos estímulos. 
          </p>
          <p>
           O processo de psicoterapia infantil usualmente envolve três momentos distintos:
           <ul>
             <li>
               A anamnese, que é a ação de levantamento de dados com o propósito de obter informações sobre o encaminhamento e o motivo da necessidade de acompanhamento psicológico para a criança; 
               </li>
               <li>
                 A avaliação inicial, com o objetivo de delimitar suas capacidades, habilidades e déficits para a formulação de hipóteses e identificação de áreas a serem trabalhadas durante a psicoterapia; 
               </li>
               <li>
                 A intervenção em si, que é o momento onde todos os dados levantados durante a anamnese e as hipóteses criadas durante a avaliação serão testados e colocados em prática por meio de atividades lúdicas e estratégias psicológicas. 
               </li>
            </ul>  
          </p>
          <p>
            Também faz parte da psicoterapia serviços de apoio familiar e de intervenção externa que visam o trabalho terapêutico nos ambientes distintos em que a criança está inserida como a orientação parental, reunião com os pais e visita escolar. Esses serviços buscam alinhar as ações praticadas durante a psicoterapia em contextos mais amplos que o do consultório com o intuito de maximizar os ganhos das intervenções psicológicas para outras esferas da vida da criança. 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Psicoterapia",
  data() {
    return {};
  },
};
</script>

<style lang="css">
h1 {
  text-align: center;
}
.card {
  width: 60%;
  margin: 0 auto;
}
.card p {
  max-width: 65ch;
}
</style>
