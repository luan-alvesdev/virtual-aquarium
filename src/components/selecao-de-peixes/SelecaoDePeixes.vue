<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import { indexDaImagem, selecionarPeixe, enviarForm, nomeDoPeixe } from './SelecaoDePeixes'
</script>

<template>
  <main>
    <section>
      <h1>Fish Types</h1>
      <ul>
        <li :class="['elemento', { clicado: indexDaImagem === 0 }]" @click="selecionarPeixe(0)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_0.webp" alt="Peixe 1" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 1 }]" @click="selecionarPeixe(1)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_1.webp" alt="" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 2 }]" @click="selecionarPeixe(2)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_2.webp" alt="" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 3 }]" @click="selecionarPeixe(3)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_3.webp" alt="" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 4 }]" @click="selecionarPeixe(4)">
          <img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_4.webp" alt="" />
        </li>
      </ul>
    </section>

    <section>
      <form @submit.prevent="enviarForm">
        <div class="containerForm">
          <label for="">Name</label>
          <InputText type="text" v-model="nomeDoPeixe" />
          <Button type="submit" label="Add Fish" severity="danger"></Button>
        </div>
      </form>
    </section>
  </main>
</template>

<style scoped>
main {
  color: white;
}

.containerForm {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 95%;
  padding-top: 2em;
}

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
