<script setup lang="ts"></script>

<template>
  <main>
    <h1>Fish Types</h1>
    <ul>
      <li><img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_1.webp" alt="" /></li>
      <li><img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_2.webp" alt="" /></li>
      <li><img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_3.webp" alt="" /></li>
      <li><img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_4.webp" alt="" /></li>
      <li><img class="ImagemPeixe" src="../../assets/imagens/modelo_peixe_5.webp" alt="" /></li>
    </ul>
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

li:hover {
  filter: drop-shadow(0 0 15px rgba(0, 123, 255, 0.8)) drop-shadow(0 0 25px rgba(0, 123, 255, 0.6));
}

img {
  width: 9.3em;
}
</style>
