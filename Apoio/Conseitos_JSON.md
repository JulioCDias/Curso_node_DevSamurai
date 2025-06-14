# Estrutura do JSON

JSON (JavaScript Object Notation) é um formato leve de troca de dados, fácil de ler e escrever para humanos e fácil de interpretar e gerar por máquinas. Ele é muito utilizado para comunicação entre sistemas, principalmente em APIs.

## Estrutura Básica

- **Objetos**: delimitados por `{}` e compostos por pares `chave: valor`.
- **Arrays**: listas ordenadas, delimitadas por `[]`.
- **Valores**: podem ser string, número, booleano, array, objeto ou `null`.

### Exemplo Simples de JSON (API de Usuário)

```json
{
  "id": 1,
  "nome": "Maria",
  "email": "maria@email.com",
  "ativo": true
}
```

### Exemplo de JSON de API Simples (Lista de Produtos)

```json
[
  {
    "id": 101,
    "nome": "Teclado",
    "preco": 99.9
  },
  {
    "id": 102,
    "nome": "Mouse",
    "preco": 49.9
  }
]
```

## Exemplo de JSON Complexo

```json
{
  "empresa": "Tech Solutions",
  "endereco": {
    "rua": "Av. Central",
    "numero": 123,
    "cidade": "São Paulo",
    "estado": "SP"
  },
  "funcionarios": [
    {
      "id": 1,
      "nome": "Ana",
      "cargo": "Desenvolvedora",
      "skills": ["JavaScript", "Node.js", "React"]
    },
    {
      "id": 2,
      "nome": "Carlos",
      "cargo": "Designer",
      "skills": ["Photoshop", "Figma"]
    }
  ],
  "projetos": [
    {
      "nome": "Site Corporativo",
      "status": "em andamento",
      "entregas": [
        { "fase": "Design", "concluida": true },
        { "fase": "Desenvolvimento", "concluida": false }
      ]
    }
  ]
}
```

## Resumo

- JSON é formado por objetos e arrays.
- Chaves sempre entre aspas duplas.
- Muito usado para APIs e integração entre sistemas.
- Fácil de ler, escrever e manipular.
