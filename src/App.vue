<template>
  <div id="app">    
    <Header />
    <main>
      <transition
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
      >
      <router-view></router-view>
    </transition>
  </main>
</div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
html,
*,
body {
  color: #869bac;
  font-family: "Montserrat", sans-serif;
}
</style>
