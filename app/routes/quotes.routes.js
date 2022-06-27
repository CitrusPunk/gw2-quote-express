module.exports = (app) => {
  const quotes = require("../controllers/quote.controller.js");
  var router = require("express").Router();
  // Create a new Quote
  router.post("/", quotes.create);
  // Retrieve all Quotes
  router.get("/", quotes.findAll);
  // Retrieve all published Quotes
  router.get("/authored", quotes.findAllFromAuthor);
  // Retrieve a single Quote with id
  router.get("/:id", quotes.findOne);
  // Update a Quote with id
  router.put("/:id", quotes.update);
  // Delete a Quote with id
  router.delete("/:id", quotes.delete);
  // Create a new Quote
  router.delete("/", quotes.deleteAll);
  app.use("/api/quotes", router);
};
