export class Peixe {
  nome = ''
  tamanho = ''
  imagem = ''
  tempoParaAlimentar = 0
  posicaoInicial = ''
  direcao = ''

  constructor(nome: string, imagem: string) {
    this.nome = nome
    this.imagem = imagem
    this.direcaoInicial()
  }

  direcaoInicial() {
    const numeroAleatorio = Math.random() < 0.5 ? -1 : 1
    this.direcao = `scaleX(${numeroAleatorio})`
  }
}
