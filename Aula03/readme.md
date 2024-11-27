# Aula 03: Navegação com React Navigation em React Native

Nesta aula, foram desenvolvidos três exercícios focados na implementação de navegação em **React Native** usando o **React Navigation**, além de revisitar conceitos de layout com `<View>`.

## Exercícios

### Exercício 01: Configuração do React Navigation
- **Objetivo:** Configurar o React Navigation em um novo projeto React Native.
- **Tarefas:**
  - Iniciar um novo projeto React Native.
  - Instalar o React Navigation e suas dependências.
  - Configurar um StackNavigator simples com duas telas.
- **Conceitos Utilizados:** Navegação entre telas, instalação de bibliotecas, StackNavigator.

### Exercício 02: Centralização de View em Container
- **Objetivo:** Dentro de um container `<View>`, posicionar um item filho `<View>` no centro vertical e horizontalmente. O item filho deve ter dimensões de 50x50 pixels e uma cor de fundo.
- **Conceitos Utilizados:** Flexbox, centralização de itens, alinhamento.

### Exercício 03: Passagem de Parâmetros entre Telas
- **Objetivo:** Modificar a HomeScreen para passar parâmetros para a DetailsScreen e exibi-los.
- **Tarefas:**
  - Atualizar a HomeScreen para enviar parâmetros ao navegar para a DetailsScreen.
  - Exibir os parâmetros recebidos na DetailsScreen.
- **Conceitos Utilizados:** Passagem de parâmetros entre telas, navegação com React Navigation.

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
React Navigation para navegação
Componentes básicos: <View>, <Text>, navegação com parâmetros.

Licença
Este projeto está sob a licença MIT.
