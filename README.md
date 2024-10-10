# Virtual Aquarium

## Descrição do Projeto
O Virtual Aquarium é um projeto criado em Vue.js que simula um aquário virtual onde você pode adicionar diferentes peixes, dar nomes a eles e vê-los nadar. Além disso, os peixes ficam com fome com o tempo e precisam ser alimentados para ficarem bem.

## Funcionalidades
- Escolha de Peixes: Você pode selecionar diferentes tipos de peixes e dar um nome para cada um antes de colocá-los no aquário.
- Movimento: Os peixes nadam pelo aquário de maneira suave, simulando um ambiente real.
- Alimentação: Cada peixe tem um nível de fome que vai aumentando com o tempo. Quando alimentado, esse nível volta ao normal.

## Requisitos
- O design do aquário segue como referencial [este modelo visual](https://imgur.com/a/virtual-aquarium-E80Zkia). 
- Exibir diferentes tipos de peixes no aquário.
- O sistema deve permitir que os usuários:
  - Escolher o tipo de peixe.
  - Dar um nome ao peixe.
  - Adicionar o peixe ao aquário.
  - Os peixes adicionados devem se mover de forma animada pela tela, como se estivessem nadando.
  - Implementar um sistema onde os peixes ficam com fome ao longo do tempo e podem ser alimentados para zerar o nível de fome.

### Como rodar o projeto
- Clone o repositório:
  ``` 
  git clone https://github.com/luan-alvesdev/virtual-aquarium.git
  ```
- Entre na pasta do projeto:
  ```
  cd virtual-aquarium
  ```
- Instale as dependências:
  ```
  npm install
  ```
- Execute o projeto:
  ```
  npm run start
  ```
- Abra no seu navegador: [http://localhost:8080](http://localhost:8080)
