import { ref } from 'vue'
import { adicionarPeixes } from '../aquario-fundo/AquarioFundo'
// Array de estado reativo para controlar o clique de cada item da lista
export const indexDaImagem = ref<number | null>(null)

export const nomeDoPeixe = ref('')

export const enviarForm = () => {
  const nome = nomeDoPeixe.value
  const caminhoDaImagem = `src/assets/imagens/modelo_peixe_${indexDaImagem.value}.webp`
  adicionarPeixes(nome, caminhoDaImagem)
}

export const selecionarPeixe = (index: number) => {
  indexDaImagem.value = index
  console.log(indexDaImagem.value)
}
