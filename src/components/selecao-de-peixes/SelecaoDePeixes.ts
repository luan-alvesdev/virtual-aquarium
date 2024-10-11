import { ref } from 'vue'
import { adicionarPeixes } from '../aquario-fundo/AquarioFundo'
// Array de estado reativo para controlar o clique de cada item da lista
export const indexDaImagem = ref<number | null>(null)

export const nomeDoPeixe = ref('')

export const enviarForm = () => {
  const nome = nomeDoPeixe.value
  if (indexDaImagem.value === null) {
    console.log(indexDaImagem.value)
    alert('Por favor, selecione um peixe.')
    return
  }
  const caminhoDaImagem = `src/assets/imagens/modelo_peixe_${indexDaImagem.value}.webp`
  adicionarPeixes(nome, caminhoDaImagem)
  nomeDoPeixe.value = ''
  indexDaImagem.value = null
}

export const selecionarPeixe = (index: number) => {
  indexDaImagem.value = index
}
