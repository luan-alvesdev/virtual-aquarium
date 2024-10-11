import imagem_peixe_morto from '@/assets/imagens/imagem_peixe_morto.webp'
export class Peixe {
  nome = ''
  imagem = ''
  tempoParaAlimentar = 10
  barraDeFome = 0
  direcao = ''
  statusFome = 'hidden'
  contador = 0
  movimentacao = 0
  intervaloId: any
  removerPeixeMorto: Function
  id: number

  constructor(nome: string, imagem: string, removerPeixeMorto: Function, id: number) {
    this.nome = nome
    this.imagem = imagem
    this.removerPeixeMorto = removerPeixeMorto
    this.id = id
    this.direcaoInicial()
  }

  direcaoInicial() {
    const numeroAleatorio = Math.random() < 0.5 ? -1 : 1
    this.movimentacao = numeroAleatorio
    this.direcao = `scaleX(${numeroAleatorio})`
  }

  alimentarPeixe() {
    this.barraDeFome = 0
    this.contador = 0
    this.statusFome = 'hidden'
  }

  pedirComida() {
    this.intervaloId = setInterval(() => {
      this.barraDeFome += 10
      this.contador++

      if (this.contador >= 7) {
        this.statusFome = 'visible'
      }

      // Após 10 segundos (10 iterações), parar o intervalo e executar o evento final
      if (this.contador > this.tempoParaAlimentar) {
        clearInterval(this.intervaloId)
        this.imagem = imagem_peixe_morto
        this.statusFome = 'hidden'
        setTimeout(() => {
          this.removerPeixeMorto(this.id)
        }, 1000)
      }
    }, 1000)
  }
}
