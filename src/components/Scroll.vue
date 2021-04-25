<template>
  <div class="scroll">
    <button type="button" class="btn btn-info rounded-circle">
      <a
        href="#"
        class="animate__animated animate__tada"
        v-scroll-to="'#header'"
        ><i class="fas fa-arrow-up"></i
      ></a>
    </button>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {};
  },
};
</script>

<style>
.scroll {
  padding: 1rem;
  font-weight: bolder;
  z-index: 9999999999;
  bottom: 0;
  right: 20px;
  position: fixed;
}

.zap a:hover {
  text-decoration: none;
}
i {
  font-size: 1rem;
  color: white;
  transition: 0.3s;
}
i:hover {
  color: #869bac;
}
</style>
