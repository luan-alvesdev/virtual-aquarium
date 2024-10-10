<script setup lang="ts">
import { ref } from 'vue'

// Array de estado reativo para controlar o clique de cada item da lista
const isClicked = ref<number | null>(null)

// Função para alternar o efeito de clique baseado no índice do item
const toggleEffect = (index: number) => {
  isClicked.value = index
}
</script>

<template>
  <main>
    <section>
      <h1>Fish Types</h1>
      <ul>
        <li :class="['elemento', { clicado: isClicked === 0 }]" @click="toggleEffect(0)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_1.webp" alt="Peixe 1" />
        </li>
        <li :class="['elemento', { clicado: isClicked === 1 }]" @click="toggleEffect(1)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_2.webp" alt="" />
        </li>
        <li :class="['elemento', { clicado: isClicked === 2 }]" @click="toggleEffect(2)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_3.webp" alt="" />
        </li>
        <li :class="['elemento', { clicado: isClicked === 3 }]" @click="toggleEffect(3)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_4.webp" alt="" />
        </li>
        <li :class="['elemento', { clicado: isClicked === 4 }]" @click="toggleEffect(4)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_5.webp" alt="" />
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
h1 {
  color: white;
  font-weight: bold;
  font-size: 24px;
  padding: 1.5em 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  gap: 1.25rem;
  padding-left: 0;
}

li {
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

.clicado {
  filter: drop-shadow(0 0 5px #9fe2ea) drop-shadow(0 0 5px #4397b9) drop-shadow(0 0 8px #9fe2ea);
}

img {
  width: 9.3em;
}
</style>
