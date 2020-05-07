const express = require("express");
const { uuid } = require("uuidv4");

const app = express();

const projects = [];

app.get("/projects", (request, response) => {
  return response.json(projects);
});

app.post("/projects", (request, response) => {
  return response.json(["Projeto1", "Projeto 2", "Projeto 3"]);
});

app.put("/projects/:id", (request, response) => {
  return response.json(["Projeto4", "Projeto 2", "Projeto 3"]);
});

app.delete("/projects/:id", (request, response) => {
  return response.json(["Projeto 2", "Projeto 3"]);
});

app.listen(3333, () => {
  console.log("Backend started! 🚀");
});
