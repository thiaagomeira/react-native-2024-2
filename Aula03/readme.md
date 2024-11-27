# Aula 03: Navegação com React Navigation em React Native

Nesta aula, foram desenvolvidos quatro exercícios focados na implementação de navegação entre telas utilizando o **React Navigation** em projetos React Native. A navegação foi implementada com o Stack Navigator.

## Exercícios

### Exercício 01: Configuração do React Navigation
- **Objetivo:** Configurar o React Navigation em um novo projeto React Native.
  - Inicie um novo projeto React Native.
  - Instale o React Navigation e suas dependências.
  - Configure um StackNavigator simples com pelo menos duas telas.
- **Conceitos Utilizados:** Configuração de navegação, StackNavigator.

### Exercício 02: Centralização de View
- **Objetivo:** Repetir o exercício de centralização, onde um item filho `<View>` deve ser centralizado vertical e horizontalmente dentro de um container `<View>`, com dimensões de 50x50 pixels e uma cor de fundo.
- **Conceitos Utilizados:** Flexbox, centralização de itens.

### Exercício 03: Passagem de Parâmetros entre Telas
- **Objetivo:** Modificar a **HomeScreen** para passar parâmetros para a **DetailsScreen** e exibi-los.
  - Na HomeScreen, defina parâmetros para passar ao navegar para a DetailsScreen.
  - Na DetailsScreen, exiba os parâmetros recebidos (como um nome ou idade, por exemplo).
- **Conceitos Utilizados:** Stack Navigator, passagem de parâmetros entre telas.

### Exercício 04: Aplicativo de Perfil de Usuário
- **Desafio:** Criar um aplicativo com duas telas: uma tela de lista de usuários e uma tela de detalhes do perfil.
  - **Tela Home (Lista de Usuários):** Mostra uma lista de usuários. Ao clicar em um usuário, navega para a tela de detalhes, passando as informações do usuário como parâmetro.
  - **Tela de Detalhes (Perfil do Usuário):** Exibe as informações detalhadas do usuário selecionado.
  - **Passos:**
    - Defina o StackNavigator para navegação.
    - Crie a lista de usuários com um array de objetos (nome e idade).
    - Use um componente `Button` ou `TouchableOpacity` para permitir a navegação ao clicar no usuário.
    - Passe os dados do usuário para a tela de detalhes e exiba-os com componentes `<Text>`.
- **Conceitos Utilizados:** Navegação Stack, passagem de parâmetros, renderização de listas.

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
