<p align="center">
  <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" width="99">
  <img src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000" width="99">
</p>
<h1 align="center">API REST - NODE E TYPESCRIPT</h1>
<p align="center">
  <em>Este projeto é uma <code>API Rest</code> em NodeJS e Typescript desenvolvida para fins de aprendizado no curso  
    <a href="https://www.youtube.com/playlist?list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP">
      API Rest em NodeJS e Typescript
    </a> 
     do canal
    <a href="https://www.youtube.com/@LucasSouzaDev">
      Lucas Souza Dev
    </a>
      no YouTube.
  </em>
</p>

---

## 📍 Visão Geral

**_Objetivo_**

Meu principal objetivo é entender o funcionamento básico do backend para ter uma visão mais clara do fluxo das aplicações. Além disso, isso tem sido um ótimo ponto de partida para a implementação de testes E2E.

**_Motivação_**

Minha motivação é me tornar um desenvolvedor cada vez mais completa, capaz de resolver problemas cada vez mais complexos.

---

## 🧬 Funcionalidades

- Criar usuário
- Fazer login com usuário usando email e senha.
- Criar, pegar, atualizar e deletar cidades.
- Criar, pegar, atualizar e deletar pessoas relacionadas com a cidade.

---

## 🚀 Começando

### ⚙️ Instalação

#### [![yarn](https://img.shields.io/badge/Yarn-3775A9.svg?style=flat&logo=Yarn&logoColor=white)](https://github.com/jessicasantosb/api-rest)

```sh
❯ git clone git@github.com:amsterdan-vasconcelos/cities-api-express-prisma-postgress.git
```

```sh
❯ cd cities-api-express-prisma-postgress
```

```sh
❯ yarn
```

```sh
❯ yarn dev
```

---

### 🤖 Uso

#### Variáveis de Ambiente

Crie o arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:

```sh
❯ PORT=<your_key>
❯ NODE_ENV=<your_key>
❯ JWT_SECRET=<your_key>
```

---

### 🧪 Teste E2E

#### [![jest](https://img.shields.io/badge/Jest-0A9EDC.svg?style=flat&logo=Jest&logoColor=white)](https://github.com/jessicasantosb/api-rest)

```sh
❯ yarn test
```

---

## 💻 Tecnologias

- Typescript
- NodeJS
- Zod
- BcyrptJS
- JSONWebToken
- Prisma
- Jest
- PostgreSQL

---

## 🤝 Contribuições

- 🔰 Mencione quaisquer problemas conhecidos ou limitações.
- 🐛 Esboce seus planos para melhorias futuras.

## Rotas

### Users

<details>
  <summary><span style="color: #28A745;">Post</span> - /signup</summary>

Dados esperados:

```json
{
  "name": "fulano",
  "email": "fulano@email.com",
  "password": "password"
}
```

Se o usuário for criado com sucessso a resposta recebida será um numéro, o id do registro no banco. E o status será 201.

```json
1
```

</details>

<details>
  <summary><span style="color: #28A745;">Post</span> - /signin</summary>
  
  Dados esperados:
  
  ```json
  {
    "email": "fulano@email.com",
    "password": "password"
  }
  ```

Se o usuário for logado com sucesso, um objeto contendo um token será retornado. E o status será 200.

```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjMsImlhdCI6MTczNTkzNTU0MCwiZXhwIjoxNzM2MDIxOTQwfQ.K3i9ZHOr2yz4HYXv2VTUj_0-lzG88_zX1ktH_wtuMlg"
}
```

</details>

---

### Cities 🔒

<details>
  <summary><span style="color: #28A745;">Post</span> - /cities</summary>
  
  Dados esperados:
  
  ```json
  {
	  "name": "Cidade qualquer"
  }
  ```
  
  Se a cidade for criada com sucesso, será retornando um número, o id da cidade no banco.
  
  ```json
	  1
  ```
</details>
<details>
  <summary><span style="color: #FFC107;">Get</span> - /cities</summary>
  
  Se a busca for concluída com sucesso, será retornando um array vazio ou contendo todas as cidades.

```json
[]
```

</details>
<details>
  <summary><span style="color: #FFC107;">Get</span> - /cities/:id</summary>
  
  Dados esperados:
  Passe o id da cidade nos params da URL

Se a busca for concluída com sucesso, será retornado a cidade buscada.

```json
{
  "id": 1,
  "name": "Cidade Qualquer"
}
```

</details>
<details>
  <summary><span style="color: #1E90FF;">Put</span> - /cities/:id</summary>
  
  Conteúdo que ficará escondido até ser expandido.
</details>
<details>
  <summary><span style="color: #DC143C;">Delete</span> - /cities/:id</summary>
  
  Conteúdo que ficará escondido até ser expandido.
</details>

---

### People 🔒

<details>
  <summary><span style="color: #28A745;">Post</span> - /people</summary>
  
  Conteúdo que ficará escondido até ser expandido.
</details>
<details>
  <summary><span style="color: #FFC107;">Get</span> - /people</summary>
  
  Conteúdo que ficará escondido até ser expandido.
</details>
<details>
  <summary><span style="color: #FFC107;">Get</span> - /people/:id</summary>
  
  Conteúdo que ficará escondido até ser expandido.
</details>
<details>
  <summary><span style="color: #1E90FF;">Put</span> - /people/:id</summary>
  
  Conteúdo que ficará escondido até ser expandido.
</details>
<details>
  <summary><span style="color: #DC143C;">Delete</span> - /people/:id</summary>
  
  Conteúdo que ficará escondido até ser expandido.
</details>

---
