const express = require("express");
const server = express();

server.use(express.json());

let customers = [
  { id: 1, nome: "Dev Samurai", site: "https://devsamurai.com.br" },
  { id: 2, nome: "Google", site: "https://google.com" },
  { id: 3, nome: "UOL", site: "https://uol.com.br" },
];

server.listen(3000);
