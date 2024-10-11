import { ref } from 'vue'
import { adicionarPeixes } from '../aquario-fundo/AquarioFundo'

import imagem_peixe_0 from '@/assets/imagens/imagem_peixe_0.webp'
import imagem_peixe_1 from '@/assets/imagens/imagem_peixe_1.webp'
import imagem_peixe_2 from '@/assets/imagens/imagem_peixe_2.webp'
import imagem_peixe_3 from '@/assets/imagens/imagem_peixe_3.webp'
import imagem_peixe_4 from '@/assets/imagens/imagem_peixe_4.webp'

// Array de estado reativo para controlar o clique de cada item da lista
export const indexDaImagem = ref<number | null>(null)

export const nomeDoPeixe = ref('')

export const imagensArr = [
  imagem_peixe_0,
  imagem_peixe_1,
  imagem_peixe_2,
  imagem_peixe_3,
  imagem_peixe_4
]

export const enviarForm = () => {
  const nome = nomeDoPeixe.value
  if (indexDaImagem.value === null) {
    alert('Por favor, selecione um peixe.')
    return
  }

  const caminhoDaImagem = imagensArr[indexDaImagem.value]
  nomeDoPeixe.value = ''
  indexDaImagem.value = null
  adicionarPeixes(nome, caminhoDaImagem)
}

export const selecionarPeixe = (index: number) => {
  indexDaImagem.value = index
}
