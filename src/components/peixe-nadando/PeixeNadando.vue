<script setup lang="ts">
import { defineProps } from 'vue'
import ProgressBar from 'primevue/progressbar'
import './PeixeNadando.css'

// Definir a prop 'peixe' para receber os dados do componente pai
defineProps({
  peixe: Object // 'peixe' é o nome da prop que você espera
})
</script>

<template>
  <figure>
    <div class="tooltip-container">
      <img
        @click="peixe?.alimentarPeixe()"
        :src="peixe?.imagem"
        alt="Peixe"
        :style="{ transform: peixe?.direcao }"
      />
      <div class="tooltip-box" v-if="peixe?.fome">Feed me !</div>
    </div>
    <figcaption>
      {{ peixe?.nome }}
      <ProgressBar :showValue="false" :value="peixe?.barraDeFome" style="height: 3px"></ProgressBar>
    </figcaption>
  </figure>
</template>
