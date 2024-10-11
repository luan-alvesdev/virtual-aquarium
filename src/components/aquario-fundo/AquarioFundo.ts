import { ref } from 'vue'
import { reactive } from 'vue'
import { Peixe } from '../peixe-nadando/PeixeNadando'

// Defina o tipo do array como um array de Peixe
export const aquarioArray = reactive<Peixe[]>([])

export const imageWidth = ref(0)
export const imageHeight = ref(0)
export const medidas = {
  largura: 0,
  altura: 0
}

export const adicionarPeixes = (nome: string, imagem: string) => {
  aquarioArray.push(new Peixe(nome, imagem))
  aquarioArray[aquarioArray.length - 1].pedirComida()
}

export function pegarDimensoes(element: HTMLElement) {
  const { width, height } = element.getBoundingClientRect()
  medidas.altura = height
  medidas.largura = width
}
