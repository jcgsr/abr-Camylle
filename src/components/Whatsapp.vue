<template>
  <div class="zap">
    <button type="button" class="btn btn-success">
   <a class="animate__animated animate__tada" :href="linkWhatsapp"
        ><i class="fab fa-whatsapp"></i></a
      >

    </button>
     </div>
</template>

<script>
export default {
  name: "Whatsapp",
  data() {
    return {
       linkWhatsapp:
      "https://api.whatsapp.com/send?phone=557999824006&text=Olá! Gostaria de mais informações sobre o atendimento da Drª Camylle Azevedo",
    }
  }
}
</script>

<style>
.zap {
  padding: 1rem;
  font-weight: bolder;
  z-index: 9999999999;
  bottom: 0;
  left: 0;
  position: fixed;
}

.zap a:hover {
  text-decoration: none;
}
i {
  font-size: 3rem;
  color: white;
  transition: 0.3s;
}
i:hover {
  color: #869bac;
}
</style>
