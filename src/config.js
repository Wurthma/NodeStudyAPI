var secrets = require("../secrets");

global.SALT_KEY = secrets.saltKey;
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Node Store!';

module.exports = {
    connectionString: 'mongodb://wurthmann:'+secrets.mongodbPassword+'@localhost:27017/ndstr?authSource=admin',
    sendgridKey: secrets.sendgridKey,
    containerConnectionString: secrets.containerConnectionString
}