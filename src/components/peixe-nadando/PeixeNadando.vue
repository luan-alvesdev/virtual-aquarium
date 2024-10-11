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
        :class="peixe?.movimentacao > 0 ? 'peixe_modelo01' : 'peixe_modelo02'"
        :src="peixe?.imagem"
        alt="Peixe"
        :style="{ transform: peixe?.direcao }"
      />
      <div
        :class="['tooltip-box', peixe?.movimentacao > 0 ? 'label_modelo01' : 'label_modelo02']"
        :style="{ fontWeight: '800', visibility: peixe?.statusFome }"
      >
        Feed me <strong style="color: red">!</strong>
      </div>
    </div>
    <figcaption
      :class="['peixe-titulo', peixe?.movimentacao > 0 ? 'label_modelo01' : 'label_modelo02']"
    >
      {{ peixe?.nome }}
      <ProgressBar :showValue="false" :value="peixe?.barraDeFome" style="height: 3px"></ProgressBar>
    </figcaption>
  </figure>
</template>
