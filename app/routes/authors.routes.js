module.exports = (app) => {
  const authors = require("../controllers/author.controller.js");
  var router = require("express").Router();
  // Create a new Author
  router.post("/", authors.create);
  // Retrieve all Authors
  router.get("/", authors.findAll);

  // Retrieve all published Authors
  // router.get("/quotes", authors.findAllFromAuthor);
  
  // Retrieve a single Author with id
  router.get("/:id", authors.findOne);
  // Update a Author with id
  router.put("/:id", authors.update);
  // Delete a Author with id
  router.delete("/:id", authors.delete);
  // Create a new Author
  router.delete("/", authors.deleteAll);
  app.use("/api/authors", router);
};
