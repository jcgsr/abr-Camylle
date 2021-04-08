<template>
	<div class="header">
		<b-navbar toggleable="lg" type="dark">

			<b-navbar-brand >
				<router-link to="/home">
					<img :src="require('../assets/signature.jpeg')" />
				</router-link>
			</b-navbar-brand>

			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<b-collapse id="nav-collapse" is-nav>     

				<b-navbar-nav class="m-auto">
					<router-link to="/acolhimento">
						Acolhimento
					</router-link>

					<b-nav-item-dropdown text="Lang" right>
						<b-dropdown-item href="#">EN</b-dropdown-item>
						<b-dropdown-item href="#">ES</b-dropdown-item>
						<b-dropdown-item href="#">RU</b-dropdown-item>
						<b-dropdown-item href="#">FA</b-dropdown-item>
					</b-nav-item-dropdown>

					<b-nav-item-dropdown right>
						<!-- Using 'button-content' slot -->
						<template #button-content>
							<em>User</em>
						</template>
						<b-dropdown-item href="#">Profile</b-dropdown-item>
						<b-dropdown-item href="#">Sign Out</b-dropdown-item>
					</b-nav-item-dropdown>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
	</div>
</template>

<script>
	export default {
		name: 'Header', 
	}
</script>

<style lang="css" scoped>
img {
	height:80px;
}
/*.bg-info {
    background-color: white !important;
    color: #869bac;
 }*/
 .navbar {
	position: fixed;
	width: 100%;
 }
.navbar a {
color: yellow;
 }
</style>