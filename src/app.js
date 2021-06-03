"use strict";

const express = require("express");
const app = express();
const mongoose = require('mongoose');

//Carregar os Models
const Product = require('./models/product');
const Costumer = require('./models/customer');
const Order = require('./models/order');

//Carregar rotas
const indexRoute = require('./routes/index-route')
const productsRoute = require('./routes/product-route')
const customersRoute = require('./routes/customer-route')

// Anteriormente era comum o uso do body-parser para converter o conteúdo do body para JSON, agora o express já faz esse trabalho
// Mais informações: https://stackoverflow.com/a/59892173/5522115
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conectar ao MongoDB
mongoose.connect('mongodb://wurthmann:5777308@localhost:27017/ndstr?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// Carregar rotas
app.use("/", indexRoute);
app.use("/products", productsRoute);
app.use("/customers", customersRoute);

module.exports = app;
