<script setup lang="ts">
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import {
  indexDaImagem,
  selecionarPeixe,
  enviarForm,
  nomeDoPeixe,
  imagensArr
} from './SelecaoDePeixes'
</script>

<template>
  <main>
    <section>
      <h1>Fish Types</h1>
      <ul>
        <li :class="['elemento', { clicado: indexDaImagem === 0 }]" @click="selecionarPeixe(0)">
          <img class="ImagemPeixe" :src="imagensArr[0]" alt="Peixe 1" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 1 }]" @click="selecionarPeixe(1)">
          <img class="ImagemPeixe" :src="imagensArr[1]" alt="" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 2 }]" @click="selecionarPeixe(2)">
          <img class="ImagemPeixe" :src="imagensArr[2]" alt="" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 3 }]" @click="selecionarPeixe(3)">
          <img class="ImagemPeixe" :src="imagensArr[3]" alt="" />
        </li>
        <li :class="['elemento', { clicado: indexDaImagem === 4 }]" @click="selecionarPeixe(4)">
          <img class="ImagemPeixe" :src="imagensArr[4]" alt="" />
        </li>
      </ul>
    </section>

    <section>
      <form @submit.prevent="enviarForm">
        <div class="containerForm">
          <label for="">Name</label>
          <InputText
            type="text"
            v-model="nomeDoPeixe"
            required
            style="background: white; color: black"
          />
          <Button
            type="submit"
            label="Add Fish"
            severity="danger"
            style="background: red; color: white; border: none"
          ></Button>
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
