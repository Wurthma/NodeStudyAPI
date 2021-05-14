"use strict";

const express = require("express");
const app = express();
const router = express.Router();

// Anteriormente era comum o uso do body-parser para converter o conteúdo do body para JSON, agora o express já faz esse trabalho
// Mais informações: https://stackoverflow.com/a/59892173/5522115
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const route = router.get("/", (req, res, next) => {
  res.status(200).send({
    title: "Node Store API",
    version: "0.0.2",
  });
});

const create = router.post("/", (req, res, next) => {
  res.status(201).send(req.body);
});

const put = router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(200).send({
    id: id,
    item: req.body,
  });
});

const del = router.delete("/", (req, res, next) => {
    res.status(200).send(req.body);
  });

app.use("/", route);
app.use("/products", create);
app.use("/products", put);
app.use("/products", del);

module.exports = app;
