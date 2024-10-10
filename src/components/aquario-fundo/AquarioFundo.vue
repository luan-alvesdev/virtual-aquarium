<script setup lang="ts">
import PeixeNadando from '../peixe-nadando/PeixeNadando.vue'
import { aquarioArray } from './AquarioFundo'
</script>

<template>
  <main id="ImagemFundo">
    <PeixeNadando v-for="(item, index) in aquarioArray" :key="index" :peixe="item"> </PeixeNadando>
  </main>
</template>

<style scoped>
#ImagemFundo {
  background-image: url(../../assets/imagens/background.jpg);
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
