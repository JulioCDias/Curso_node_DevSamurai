const express = require("express");
const server = express();

server.use(express.json());

let customers = [
  { id: 1, nome: "Dev Samurai", site: "https://devsamurai.com.br" },
  { id: 2, nome: "Google", site: "https://google.com" },
  { id: 3, nome: "UOL", site: "https://uol.com.br" },
];
//get all customers
server.get("/customers", (req, res) => {
  res.json(customers);
});

//get customer by id
server.get("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customer = customers.find((c) => c.id === id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ error: "Customer not found" });
  }
});

//create a new customer
server.post("/customers", (req, res) => {
  const { nome, site } = req.body;
  if (!nome || !site) {
    return res.status(400).json({ error: "Nome and site are required" });
  }
  const newCustomer = {
    id: customers.length + 1,
    nome,
    site,
  };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

//update a customer
server.put("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, site } = req.body;
  const customerIndex = customers.findIndex((c) => c.id === id);
  if (customerIndex === -1) {
    return res.status(404).json({ error: "Customer not found" });
  }
  if (!nome || !site) {
    return res.status(400).json({ error: "Nome and site are required" });
  }
  customers[customerIndex] = { id, nome, site };
  res.json(customers[customerIndex]);
});

//delete a customer
server.delete("/customers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const customerIndex = customers.findIndex((c) => c.id === id);
  if (customerIndex === -1) {
    return res.status(404).json({ error: "Customer not found" });
  }
  customers.splice(customerIndex, 1);
  res.status(200).send();
});

server.listen(3000);
