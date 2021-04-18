<template>
  <footer class="footer">
    <div class="contatos">
        <a class="animate__animated animate__tada" :href="linkInsta"
            ><i class="fab fa-instagram"></i></a>
        <a class="animate__animated animate__tada" :href="linkFB"
        ><i class="fab fa-facebook-f"></i></a
      >
        <a class="animate__animated animate__tada" :href="linkYoutube">
          <i class="fab fa-youtube"></i>
        </a>

    </div> <br><br>
  <hr class="mb-4">

      &copy;{{ footer }} <br />
      {{ footer2 }}
      <Whatsapp />
    </footer>
 </template>

<script>
import Whatsapp from './Whatsapp.vue';
export default {
  name: "Footer",
  components: { Whatsapp },
   data() {
      return {
         footer: '2021 - Camylle Azevedo',
         footer2: "Psicóloga Infantil",
         linkFB: "https://www.facebook.com/manuela.queiroz.79274089",
        linkInsta:
        "https://instagram.com/camylleazevedopsi?igshid=1w3m8n6nmvosk",
        linkYoutube: "https://youtube.com/channel/UC7NjOFKua9sCRyo_2Auvk8Q"

      }
   }
}
</script>

<style lang="css" scoped>
   .footer {
      text-align: center;
      background-color: #869bac;
      padding: 4rem;
      color: #fff;
   }
  .contatos a {
    color: #86b198;
    transition: 0.3s;
    text-align: center;
    padding: 1rem;
    font-weight: bolder;
    font-size: 2rem;
  }

  .contatos a:hover {
    text-decoration: none;
    color: red;
  }
  i {
    font-size: 3rem;
    color: #fff;
    transition: 0.3s;
  }
  i:hover {
    color: gray;
  } 
</style>
