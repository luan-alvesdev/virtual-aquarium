<script setup lang="ts">
import PeixeNadando from '../peixe-nadando/PeixeNadando.vue'
import { ref, onMounted } from 'vue'
import { aquarioArray, pegarDimensoes } from './AquarioFundo'
import './AquarioFundo.css'

const minhaImagem = ref<HTMLElement | null>(null)

// Chama a função quando o componente for montado
onMounted(() => {
  if (minhaImagem.value) {
    pegarDimensoes(minhaImagem.value) // Chama a função pegarDimensoes passando o elemento
  }
})
</script>

<template>
  <main ref="minhaImagem" class="aquario-container">
    <div>
      <div>
        <PeixeNadando
          v-for="(item, index) in aquarioArray"
          :key="index"
          :peixe="item"
          :class="item?.movimentacao > 0 ? 'peixe_posicao01' : 'peixe_posicao02'"
        >
        </PeixeNadando>
      </div>
    </div>
  </main>
</template>
