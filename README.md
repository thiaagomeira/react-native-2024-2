# Repositório de Exercícios da Disciplina Programação de Dispositivos Moveis

Este repositório contém exercícios desenvolvidos durante as aulas da Disciplina Programação de Dispositivos Moveis, organizados em 5 pastas, 4 pastas referentes a um dia de aula e uma pasta referente ao projeto desenvolvido na disciplina. Todos os exercícios foram criados utilizando **React Native**.

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

- **Aula 03 desafio:**
  - **Objetivo:** 
  - **
  - **Tela de Detalhes (Perfil do Usuário):** Exibe informações detalhadas do usuário selecionado.
  - **Tópicos abordados:** Construir um aplicativo com duas telas utilizando React Navigation, Stack Navigator.
  - **Descrição:** O objetivo desta aula é consturir um tela home e uma tela detalhes. Tela Home (Lista de Usuários) que mostra uma lista de usuários. Ao clicar em um usuário, navega para a tela de detalhes, passando informações do usuário como parâmetro.

- **Aula 04:**
  - **Tópicos abordados:** Context API.
  - **Descrição:** Na quarta aula, foi introduzido o uso da **Context API** para gerenciar o estado global da aplicação, permitindo o compartilhamento de dados entre componentes sem a necessidade de prop drilling.

- **Study-App:**
  - **Tópicos abordados:** Foram abordados todos os componentes das aulas anteriores.
  - **Descrição:** Este exercício utiliza o **Firebase** para autenticação e gerenciamento de dados. Abaixo estão as instruções para configurar o Firebase no projeto **Study-App**.
      1. **Crie um projeto no Firebase:**
         - Acesse a página do [Firebase](https://firebase.google.com/) e crie uma conta.
         - Acesse o [console do Firebase](https://console.firebase.google.com/).
         - Crie um novo projeto e configure os serviços que você deseja utilizar (Autenticação, Firestore, etc.).

      3. **Adicione um app ao projeto Firebase:**
         - No painel do Firebase, clique em "Adicionar app" e selecione a plataforma **Web**.
         - Siga as instruções para registrar o app e obtenha as **credenciais** do Firebase.

      4. **Instale o Firebase no projeto:**
         - No terminal, execute o seguinte comando para adicionar o Firebase às dependências:
         - npm install firebase

      5. Configurar as credenciais no projeto:
         - Com as credenciais do Firebase (API key, Auth domain, etc.), crie um arquivo **firebaseConfig.js** no caminho **src/config** com o seguinte conteúdo:
      
        const firebaseConfig = {
          apiKey: "SUA_API_KEY",
          authDomain: "SEU_AUTH_DOMAIN",
          projectId: "SEU_PROJECT_ID",
          storageBucket: "SEU_STORAGE_BUCKET",
          messagingSenderId: "SEU_MESSAGING_SENDER_ID",
          appId: "SEU_APP_ID"
        };
        
        export default firebaseConfig;


## Como Executar

1. Instale o node v18.20.5:
   https://nodejs.org/dist/v18.20.5/node-v18.20.5-x64.msi
   
3. Clone este repositório:
   git clone https://github.com/thiaagomeira/react-native-2024-2.git

4. Navegue até a pasta do exercício que deseja executar:
   cd pasta-do-exercicio

5. Instale as dependências:
   npm install

6. Crie uma conta no Firebase e configure uma autenticação para ser utilizado no arquivo firebaseConfig.js.

7. Execute o projeto:
   npm start ou expo start
   Obs: O npm start vai abrir um QR Code e uma lista de opções. Você escanear o QR no app Expo Go e testar a aplicação no celular, no computadores você pode apertar a opção "w" que vai abrir o navegador web com a     aplicação para testar.

Licença
Este projeto está sob a licença MIT.
