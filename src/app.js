"use strict";

const express = require("express");
const app = express();
const router = express.Router();

//Carregar rotas
const indexRoute = require('./routes/index-route')
const productsRoute = require('./routes/product-route')

// Anteriormente era comum o uso do body-parser para converter o conteúdo do body para JSON, agora o express já faz esse trabalho
// Mais informações: https://stackoverflow.com/a/59892173/5522115
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRoute);
app.use("/products", productsRoute);

module.exports = app;
