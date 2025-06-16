import { Router } from "express";
import customers from "./app/controllers/CustomersController"; // Import the customers routes

const routes = new Router();

routes.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Define the routes for customers
routes.get("/customers", customers.index); // List all customers
routes.get("/customers/:id", customers.show); // Show a specific customer
routes.post("/customers", customers.create); // Create a new customer
routes.put("/customers/:id", customers.update); // Update an existing customer
routes.delete("/customers/:id", customers.destroy); // Delete a customer

export default routes; // Export the routes
