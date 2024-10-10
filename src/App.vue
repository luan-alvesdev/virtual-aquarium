<script setup lang="ts">
import AquarioFundo from './components/AquarioFundo/AquarioFundo.vue'
</script>

<template>
  <main id="CorFundo">
    <section class="containerFundo">
      <div id="formulario">
        <h1>Formulario</h1>
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
