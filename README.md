# 🎬 Recomendador de Filmes com Inteligência Artificial

## 📌 Nome do Projeto
**Recomendador de Filmes com IA**

---

## 🎯 Objetivo do Projeto

Criar um site interativo onde o usuário possa pedir sugestões de filmes com base em seus interesses ou preferências.  
O sistema utiliza inteligência artificial (IA) para interpretar a mensagem e retornar recomendações relevantes, de forma automatizada e natural.

---

## 🛠️ Tecnologias e Ferramentas Utilizadas

### Front-end:
- React com TypeScript
- HTML5 e CSS3
- Fetch API

### Back-end:
- Node.js
- Express
- TypeScript
- dotenv
- OpenAI API

---

## ⚙️ Descrição do Funcionamento

1. O usuário acessa a página e digita uma pergunta como:
   > _"Me recomende filmes de aventura parecidos com Indiana Jones."_

2. O front-end envia essa pergunta para o back-end usando a Fetch API.

3. O servidor repassa a mensagem para a OpenAI (modelo GPT-3.5-turbo).

4. A IA interpreta a solicitação e retorna recomendações de filmes.

5. As sugestões são exibidas diretamente na tela para o usuário.

---

## ▶️ Como Executar/Testar o Projeto

### Pré-requisitos:
- [Node.js](https://nodejs.org/) instalado
- Conta gratuita na [OpenAI](https://platform.openai.com/) com chave da API

---

### 1. Clone o repositório

```bash
git clone https://github.com/Jonhs1/ProjetoIA.git
cd recomendador-filmes-ia 
```

### 🚀 2. Instale e inicie o back-end (Node.js)

```bash
cd server
npm install
```

Crie um arquivo .env com a seguinte variavel

```bash
OPENAI_API_KEY=sua_chave_aqui
```

E Inicie o servidor

```bash
cd server
npm install
```

### 🌐 3. Instale e inicie o front-end (React)

```bash
cd ../client
npm install
npm start
```
O site será iniciado automaticamente em http://localhost:3000


