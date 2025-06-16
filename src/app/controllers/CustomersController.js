let customers = [
  { id: 1, nome: "Dev Samurai", site: "https://devsamurai.com.br" },
  { id: 2, nome: "Google", site: "https://google.com" },
  { id: 3, nome: "UOL", site: "https://uol.com.br" },
];

class CustomerController {
  //Listagem dos Customers
  index(req, res) {
    res.json(customers);
  }
  //Exibição de um Customer específico
  show(req, res) {
    const id = parseInt(req.params.id);
    const customer = customers.find((c) => c.id === id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ error: "Customer not found" });
    }
  }
  //Criação de um novo Customer
  create(req, res) {
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
  }
  //Atualização de um Customer existente
  update(req, res) {
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
  }
  //Exclusão de um Customer
  destroy(req, res) {
    const id = parseInt(req.params.id);
    const customerIndex = customers.findIndex((c) => c.id === id);
    if (customerIndex === -1) {
      return res.status(404).json({ error: "Customer not found" });
    }
    customers.splice(customerIndex, 1);
    res.status(200).send();
  }
}

export default new CustomerController();
