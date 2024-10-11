export class Peixe {
  nome = ''
  tamanho = ''
  imagem = ''
  tempoParaAlimentar = 10
  barraDeFome = 0
  posicaoInicial = ''
  direcao = ''
  fome = false
  contador = 0
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
    this.direcao = `scaleX(${numeroAleatorio})`
  }

  alimentarPeixe() {
    this.barraDeFome = 0
    this.contador = 0
    this.fome = false
  }

  pedirComida() {
    this.intervaloId = setInterval(() => {
      this.barraDeFome += 10
      this.contador++

      if (this.contador >= 7) {
        this.fome = true
      }

      // Após 10 segundos (10 iterações), parar o intervalo e executar o evento final
      if (this.contador > this.tempoParaAlimentar) {
        clearInterval(this.intervaloId)
        this.imagem = 'src/assets/imagens/modelo_peixe_morto.webp'
        this.fome = false
        setTimeout(() => {
          this.removerPeixeMorto(this.id)
        }, 1000)
      }
    }, 1000)
  }
}
