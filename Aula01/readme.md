# Aula 01: Conceitos Básicos de React Native

Nesta aula, foram desenvolvidos quatro exercícios focados nos fundamentos do **React Native**, explorando o uso de `props`, estado com `useState`, e componentes básicos como `<TextInput>`, `<Text>`, e o método `.map()`.

## Exercícios

### Exercício 01: Saudação com Props
- **Objetivo:** Criar um componente funcional que aceita um nome como prop e exibe uma mensagem de saudação.
- **Descrição:** O componente recebe o nome como uma `prop` e exibe uma mensagem personalizada, por exemplo: "Olá, Thiago! Seja bem-vindo(a)!".
- **Conceitos Utilizados:** `props`, componente funcional.

### Exercício 02: Contador com useState
- **Objetivo:** Implementar um componente **Counter** que exibe um número (inicialmente 0) e dois botões para incrementar e decrementar o valor. Utilize o hook `useState`.
- **Descrição:** O componente exibe um contador que pode ser incrementado ou decrementado através de dois botões, com o estado do número sendo gerenciado pelo hook `useState`.
- **Conceitos Utilizados:** `useState`, gerenciamento de estado, eventos de clique.

### Exercício 03: Entrada de Texto com TextInput
- **Objetivo:** Criar um componente que inclui um `<TextInput>` para entrada de texto e um `<Text>` para exibir o texto digitado. Use `useState` para armazenar e atualizar o valor do texto.
- **Descrição:** À medida que o usuário digita no campo de texto, o valor inserido é exibido em tempo real abaixo, utilizando `useState` para atualizar o texto dinamicamente.
- **Conceitos Utilizados:** `useState`, `<TextInput>`, `<Text>`, eventos de mudança de texto.

### Exercício 04: Lista Dinâmica com .map()
- **Objetivo:** Desenvolver um componente que renderiza uma lista de itens (`<Text>`) a partir de um array de strings. Utilize `.map()` para criar os elementos da lista dinamicamente.
- **Descrição:** O componente recebe um array de strings e gera uma lista de elementos `<Text>`, exibindo cada item do array dinamicamente.
- **Conceitos Utilizados:** `.map()`, renderização de listas, arrays.

## Como Executar

1. Clone este repositório:
   git clone https://github.com/thiaagomeira/react-native-2024-2.git

2. Navegue até a pasta do exercício que deseja executar:
   cd aula-01

3. Instale as dependências:
   npm install

5. Execute o projeto:
   npm start ou expo start
   Obs: O npm start vai abrir um QR Code e uma lista de opções. Você escanear o QR no app Expo Go e testar a aplicação no celular, no computadores você pode apertar a opção "w" que vai abrir o navegador web com a     aplicação para testar.

Tecnologias Utilizadas
React Native
Hooks do React (useState)

Licença
Este projeto está sob a licença MIT.
