<script setup lang="ts">
import { defineProps } from 'vue'

// Definir a prop 'peixe' para receber os dados do componente pai
const props = defineProps({
  peixe: Object // 'peixe' é o nome da prop que você espera
})
</script>

<template>
  <figure>
    <img
      class="customizacao"
      :src="peixe?.imagem"
      alt="Peixe"
      :style="{ transform: peixe?.direcao }"
    />
    <figcaption>{{ peixe?.nome }}</figcaption>
  </figure>
</template>

<style scoped>
figure {
  width: 9.3em;
}

img {
  width: 9.3em;
}

figcaption {
  background-color: rgba(68, 68, 68, 0.8);
  width: auto;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
}

.customizacao {
  transform: scaleX(0);
}
</style>
