import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './components/Home'
import Acolhimento from './components/Acolhimento'
import Avaliacao from './components/Avaliacao'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
	mode: "history",
	linkExactActiveClass: 'link-active',
	routes: [{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			auth: false,
			title: 'Camylle Azevedo'
		}
	},
	{
		path: '/acolhimento',
		name: 'acolhimento',
		component: Acolhimento,
		meta: {
			auth: false,
			title: 'Acolhimento'
		}
	},
	{
		path: '/avaliacao',
		name: 'avaliacao',
		component: Avaliacao,
		meta: {
			auth: false,
			title: 'Avaliação'
		}
	}]
})