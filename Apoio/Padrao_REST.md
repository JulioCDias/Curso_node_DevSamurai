# Padrão REST

## O que é REST?

REST (Representational State Transfer) é um padrão de arquitetura para construção de APIs que utilizam o protocolo HTTP para comunicação. Ele define um conjunto de restrições que facilitam a criação de sistemas escaláveis, simples e de fácil manutenção.

## Requisitos do Padrão REST

1. **Interface Uniforme**  
   Os recursos devem ser identificados por URLs únicas e acessados de forma consistente.

2. **Sem Estado (Stateless)**  
   Cada requisição do cliente para o servidor deve conter todas as informações necessárias para entender e processar o pedido. O servidor não armazena o estado do cliente entre as requisições.

3. **Cacheável**  
   As respostas devem informar se podem ser armazenadas em cache para melhorar o desempenho.

4. **Sistema em Camadas**  
   A arquitetura pode ser composta por camadas, cada uma com responsabilidades distintas (ex: autenticação, cache, lógica de negócios).

5. **Código sob Demanda (opcional)**  
   O servidor pode fornecer código executável ao cliente, como scripts JavaScript.

## Métodos HTTP Utilizados

- **GET**: Recupera informações de um recurso.
- **POST**: Cria um novo recurso.
- **PUT**: Atualiza um recurso existente.
- **DELETE**: Remove um recurso.
- **PATCH**: Atualiza parcialmente um recurso.

## Como Adotar REST com JavaScript

### Exemplo de Consumo de API REST com `fetch`

```javascript
// GET - Buscar dados
fetch("https://api.exemplo.com/usuarios")
  .then((response) => response.json())
  .then((data) => console.log(data));

// POST - Criar novo recurso
fetch("https://api.exemplo.com/usuarios", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nome: "João", idade: 30 }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

### Exemplo de Criação de API REST com Node.js e Express

```javascript
const express = require("express");
const app = express();
app.use(express.json());

let usuarios = [];

// GET
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// POST
app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).json(usuario);
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
```

## Conclusão

Adotar o padrão REST em aplicações JavaScript facilita a integração entre sistemas, promove boas práticas de desenvolvimento e torna a manutenção mais simples.
