"use strict";
var config = require("../config");
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(config.sendgridKey);

exports.send = async (to, subject, body) => {
  sendgrid.send({
    to: to,
    from: "ge_h_w@hotmail.com",
    subject: subject,
    html: body
  }).then(() => {
    console.log('Email enviado')
  })
  .catch((error) => {
    console.error(error)
  });
};
