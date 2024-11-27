# Study-App

O **Study-App** é um projeto desenvolvido utilizando **React Native** e **Firebase** para autenticação e gerenciamento de dados. Este aplicativo visa fornecer uma plataforma simples para realizar login, registro e exibir dados com a integração do Firebase.

## Funcionalidades
- **Autenticação:** O aplicativo permite que os usuários se registrem e façam login utilizando o Firebase Authentication.
- **Gerenciamento de Dados:** Com o Firebase Firestore, o aplicativo pode armazenar e recuperar dados.
- **React Navigation:** Navegação entre telas utilizando o React Navigation.
  
## Tecnologias Utilizadas
- **React Native:** Para a criação da interface móvel.
- **Firebase:** Para autenticação e armazenamento de dados.
- **React Navigation:** Para gerenciar a navegação entre as telas.
- **Expo:** Ambiente de desenvolvimento e execução do React Native.
  
## Funcionalidades Implementadas
1. **Tela de Login:**
   - Permite que o usuário faça login usando e-mail e senha.
   - Se o usuário não tiver uma conta, pode se registrar através de um link para a tela de registro.
   
2. **Tela de Registro:**
   - Permite que o usuário crie uma nova conta com e-mail e senha.
   
3. **Tela Home:**
   - Exibe a lista de usuários (ou outros dados) provenientes do Firebase Firestore.

4. **Tela de Detalhes:**
   - Exibe informações detalhadas de um item específico (usuário, por exemplo).

## Como Configurar o Firebase

Para usar o Firebase no seu projeto, siga os seguintes passos:

### 1. Crie um Projeto no Firebase
- Acesse o [console do Firebase](https://console.firebase.google.com/).
- Crie um novo projeto e configure os serviços que deseja utilizar (Autenticação, Firestore, etc.).

### 2. Adicione um App ao Projeto Firebase
- No painel do Firebase, clique em "Adicionar app" e selecione a plataforma **Web**.
- Siga as instruções para registrar o app e obtenha as **credenciais** do Firebase.

### 3. Instale o Firebase no Projeto
Execute o seguinte comando no terminal para adicionar o Firebase como dependência do seu projeto:
npm install firebase

### 4. Configurar as credenciais no projeto:
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
