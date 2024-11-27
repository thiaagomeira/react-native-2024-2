# Repositório de Exercícios de React Native

Este repositório contém exercícios desenvolvidos durante as aulas de React Native, organizados em 4 pastas, cada uma referente a um dia de aula. Todos os exercícios foram criados utilizando **React Native**.

## Estrutura do Repositório

- **Aula 01:**
  - **Tópicos abordados:** prop, counter, `<TextInput>`, `<Text>`.
  - **Descrição:** Nesta aula, foram explorados os conceitos básicos de props e estados em React Native. Os exercícios incluíram a criação de um contador, o uso de entradas de texto com `<TextInput>`, e a exibição de informações com o componente `<Text>`.

- **Aula 02:**
  - **Tópicos abordados:** `<View>`.
  - **Descrição:** Nesta aula, foram realizados exercícios focados no componente `<View>`, explorando a organização de layout e estrutura de componentes dentro da aplicação.

- **Aula 03:**
  - **Tópicos abordados:** React Navigation, Stack Navigator.
  - **Descrição:** A aula teve como objetivo a implementação de navegação entre telas utilizando a biblioteca **React Navigation**. Os exercícios incluíram a criação de um Stack Navigator para gerenciar as rotas entre diferentes telas.

- **Aula 04:**
  - **Tópicos abordados:** Context API.
  - **Descrição:** Na quarta aula, foi introduzido o uso da **Context API** para gerenciar o estado global da aplicação, permitindo o compartilhamento de dados entre componentes sem a necessidade de prop drilling.

## Como Executar

1. Instale o node vv18.20.5:
   https://nodejs.org/dist/v18.20.5/node-v18.20.5-x64.msi
   
3. Clone este repositório:
   git clone https://github.com/thiaagomeira/react-native-2024-2.git

4. Navegue até a pasta do exercício que deseja executar:
   cd pasta-do-exercicio

5. Instale as dependências:
   - Exercícios Aula 01
       npm install
       npm install -g expo
       npx expo install react-native-web react-dom -- --legacy-peer-deps
       npx expo install @expo/metro-runtime -- --legacy-peer-deps
   - Exercícios Aula 03
       npm install @react-navigation/native
       npm install react-native-screens react-native-safe-area-context
       npm install @react-navigation/native-stack
   - Exercícios Aula 04  
       npm install react-native-picker/picker
       npm install react-native-modal-datetime-picker

7. Execute o projeto:
   npm start
   Obs: O npm start vai abrir um QR Code e uma lista de opções. Você escanear o QR no app Expo Go e testar a aplicação no celular, no computadores você pode apertar a opção "w" que vai abrir o navegador web com a aplicação para testar.
