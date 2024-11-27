# Aula 03 - Desafio: Aplicativo de Perfil de Usuário

Neste desafio, foi proposto desenvolver um aplicativo simples com duas telas: uma tela Home que exibe uma lista de usuários e uma tela de Detalhes que exibe informações detalhadas do usuário selecionado.

## Objetivo

O objetivo deste desafio é praticar a navegação entre telas usando o **React Navigation**, bem como a passagem de parâmetros entre componentes em **React Native**.

## Desafio

### Tela Home: Lista de Usuários
- Exibe uma lista de usuários com informações básicas (nome e idade).
- Cada usuário na lista é representado por um botão ou `<TouchableOpacity>`.
- Ao clicar em um usuário, o aplicativo navega para a tela de Detalhes e passa as informações do usuário selecionado como parâmetros.

### Tela de Detalhes: Perfil do Usuário
- Recebe os parâmetros passados pela tela Home.
- Exibe as informações detalhadas do usuário (nome, idade, etc.) usando componentes `<Text>`.

## Passos para Implementação

1. **Configuração do Navegador:**
   - Definir um **StackNavigator** no projeto React Native.
   - Configurar as rotas para as duas telas: Home e Detalhes.

2. **Tela Home:**
   - Criar um array de objetos representando os usuários, com informações como nome e idade.
   - Renderizar a lista de usuários usando um componente de lista (`FlatList` ou map).
   - Envolver cada item da lista em um `<Button>` ou `<TouchableOpacity>`, e ao clicar, navegar para a tela de Detalhes, passando os dados do usuário como parâmetros.

3. **Tela de Detalhes:**
   - Receber os parâmetros passados pela tela Home.
   - Exibir as informações do usuário (nome, idade) em componentes `<Text>`.

## Como Executar

1. Clone este repositório:
   git clone https://github.com/thiaagomeira/react-native-2024-2.git

2. Navegue até a pasta do exercício que deseja executar:
   cd aula-01

3. Instale as dependências:
   npm install

4. Crie uma conta no Firebase e configure uma autenticação para ser utilizado no arquivo firebaseConfig.js.

5. Execute o projeto:
   npm start ou expo start
   Obs: O npm start vai abrir um QR Code e uma lista de opções. Você escanear o QR no app Expo Go e testar a aplicação no celular, no computadores você pode apertar a opção "w" que vai abrir o navegador web com a     aplicação para testar.

Tecnologias Utilizadas
React Native
React Navigation
Flexbox para layout

Licença
Este projeto está sob a licença MIT.
