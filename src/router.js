import Vue from "vue";
import Router from "vue-router";
import Meta from "vue-meta";

import Home from "./components/Home";
import Acolhimento from "./components/Acolhimento";
import Psicoterapia from "./components/Psicoterapia";
import Avaliacao from "./components/Avaliacao";
import Intervencao from "./components/Intervencao";
import Treinamento from "./components/Treinamento";
import Supervisao from "./components/Supervisao";
import Cursos from "./components/Cursos";
import Fale from "./components/Fale";

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: "history",
  linkExactActiveClass: "link-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        auth: false,
        title: "Camylle Azevedo",
      },
    },
    {
      path: "/acolhimento",
      name: "acolhimento",
      component: Acolhimento,
      meta: {
        auth: false,
        title: "Acolhimento",
      },
    },
    {
      path: "/psicoterapia",
      name: "psicoterapia",
      component: Psicoterapia,
      meta: {
        auth: false,
        title: "Psicoterpia",
      },
    },
    {
      path: "/avaliacao",
      name: "avaliacao",
      component: Avaliacao,
      meta: {
        auth: false,
        title: "Avaliação",
      },
    },
    {
      path: "/intervencao",
      name: "intervencao",
      component: Intervencao,
      meta: {
        auth: false,
        title: "Intervenção ABA Intensiva",
      },
    },
    {
      path: "/treinamento",
      name: "treinamento",
      component: Treinamento,
      meta: {
        auth: false,
        title: "Treinamento Parental",
      },
    },
    {
      path: "/supervisao",
      name: "supervisao",
      component: Supervisao,
      meta: {
        auth: false,
        title: "Supervisão Profissional",
      },
    },
    {
      path: "/cursos",
      name: "cursos",
      component: Cursos,
      meta: {
        auth: false,
        title: "Cursos",
      },
    },
    {
      path: "/fale",
      name: "fale",
      component: Fale,
      meta: {
        auth: false,
        title: "Fale Conosco",
      },
    },
  ],
});

