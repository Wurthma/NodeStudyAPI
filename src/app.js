"use strict";

const express = require("express");
const app = express();
const mongoose = require('mongoose');

//Carregar os Models
const Product = require('./models/product');
const Costumer = require('./models/customer');
const Order = require('./models/order');

//Carregar rotas
const indexRoute = require('./routes/index-route');
const productsRoute = require('./routes/product-route');
const customersRoute = require('./routes/customer-route');
const ordersRoute = require('./routes/order-route');

// Anteriormente era comum o uso do body-parser para converter o conteúdo do body para JSON, agora o express já faz esse trabalho
// Mais informações: https://stackoverflow.com/a/59892173/5522115
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '5mb'}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
// Conectar ao MongoDB
mongoose.connect('mongodb://wurthmann:5777308@localhost:27017/ndstr?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// Carregar rotas
app.use("/", indexRoute);
app.use("/products", productsRoute);
app.use("/customers", customersRoute);
app.use("/orders", ordersRoute);

module.exports = app;
