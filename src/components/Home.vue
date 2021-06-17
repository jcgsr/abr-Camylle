<template>
	<div class="home">
		<img :src="require('../assets/capa.jpg')" alt="Camylle" />
	</div>
</template>

<script>
	export default {
		name: "Home",
	};
</script>

<style>
.home {
	width: 100%;
	margin-top:7rem;
}
h1 {
	text-align: center;
}
img{
	width: 100%;

}

/*@media screen and (max-width: 456px) {
	img {
		height: 40vh;
	}
}*/
</style>
