import express from "express";
import routes from "./routes"; // Assuming you have a routes file

class App {
  /**
   * Creates an instance of the App class.
   * Initializes the Express server.
   */
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Middleware to parse JSON request bodies
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server; // Export the server instance
