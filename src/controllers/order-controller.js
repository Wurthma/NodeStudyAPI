const repository = require('../repositories/order-repository');
const guid = require('uuid');
const authService = require('../services/auth-service');

exports.get = async(req, res, next) => {
    try
    {
      var data = await repository.get();
      res.status(200).send(data);
    } catch (e) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição',
        data: e
      });
    }
  }

exports.post = async(req, res, next) => {
    try {
      //Recupera o token
      const token = req.body.token || req.query.token || req.headers['x-access-token'];
      // Decodifica o token
      const data = await authService.decodeToken(token);
      
      await repository.create({
        customer: data.id,
        number: guid.v4().substring(0, 6),
        items: req.body.items
    });
      res.status(201).send({message: 'Pedido cadastrado com sucesso!'});
    } catch (e) {
      res.status(500).send({
        message: 'Falha ao processar sua requisição',
        data: e
      });
    }
  };