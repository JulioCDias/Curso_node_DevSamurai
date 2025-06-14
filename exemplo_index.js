const express = require("express"); // Importando o módulo express
const app = express(); // Criando uma instância do express
const port = 3000; // Definindo a porta do servidor

/*
Difernça entre Query Parameters e Route Parameters:
Query Parameters são usados para passar dados na URL após o ponto de interrogação (?), enquanto Route Parameters são partes dinâmicas da rota que são definidas entre barras (/).
*/
/*Exemplo de uso de Query Parameters
app.get("/search", (req, res) => {
   // Definindo uma rota para buscar dados
   const query = req.query.q; // Obtendo o parâmetro de consulta 'q'
   res.json({
     message: `You searched for: ${query}`, // Enviando uma resposta JSON
   }); // Enviando uma resposta simples
}); */

/* Exemplo de uso de Route Parameters
app.get("/users/:id", (req, res) => {
   // Definindo uma rota para obter um usuário específico
   const userId = req.params.id; // Obtendo o parâmetro de rota 'id'
   res.json({
     message: `User ID is: ${userId}`, // Enviando uma resposta JSON
   }); // Enviando uma resposta simples
}); */

app.get("/", (req, res) => {
  // Definindo uma rota para o caminho raiz
  const { nome, idade } = req.query; // Obtendo o parâmetro de consulta 'nome'
  res.json({
    title: "Hello, World!", // Enviando uma resposta JSON
    message: `Hello, ${nome}! how are you?`, // Enviando uma mensagem personalizada
    idade: `and you are ${idade} years old!`, // Enviando a idade
  }); // Enviando uma resposta simples
});

app.get("/hello/:nome", (req, res) => {
  // Definindo uma rota para o caminho /hello/:nome
  const { nome } = req.params; // Obtendo o parâmetro de rota 'nome'
  res.json({
    title: "Hello, World!", // Enviando uma resposta JSON
    message: `Hello, ${nome}! how are you?`, // Enviando uma mensagem personalizada
  }); // Enviando uma resposta simples
});

app.listen(port, () => {
  // Iniciando o servidor na porta definida
  console.log(`Server is running on http://localhost:${port}`);
});
