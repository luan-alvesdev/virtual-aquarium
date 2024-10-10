<script setup lang="ts">
import AquarioFundo from './components/aquario-fundo/AquarioFundo.vue'
import MenuLateral from './components/menu-lateral/MenuLateral.vue'
</script>

<template>
  <main id="CorFundo">
    <section class="containerFundo">
      <div id="formulario">
        <MenuLateral />
      </div>
      <div id="AquarioFundo">
        <AquarioFundo />
      </div>
    </section>
  </main>
</template>

<style scoped>
.containerFundo {
  display: flex;
}

#formulario {
  width: 20vw;
}

#AquarioFundo {
  height: 100vh;
  width: 80vw;
  background-color: lightblue;
}
</style>
