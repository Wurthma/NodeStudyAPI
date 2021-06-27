
# Conceitos básicos NodeJS

## Criando um projeto
- Para iniciar um projeto execute `npm init -y`
	- O parâmetro `-y` evitará as perguntas e criará o arquivo `package.json` com as informações padrões do node. O arquivo pode ser alterado manualmente, se necessário.
- Execute também o comando `npm install http express debug` pra instalar os pacotes básicos para desenvolvimento web.
- Para executar a API apenas execute o comando `node .\bin\server.js` ou apenas execute `npm start` (script armazenado no package.json)

## Depêndencias (npm installs)
- Package `nodemon` (apenas para dev), para que a API atualize em tempo de execução conforme alteramos a mesma.
	- `npm install nodemon --save-dev`
	- Para executar o nodemon execute: `nodemon .\bin\server.js`
- Package `mongoose` para conexão com o MongoDB
	- `npm install mongoose --save`
- Package uuid para geração de GUIDs:
	- `npm install uuid --save`
- Package md5 para criptografia de senha de usuários:
	- `npm install md5 --save`
- Package sendgrid/mail para envio de e-mails:
	- `npm install --save @sendgrid/mail`
- Package JWT para envio autenticação:
	- `npm install jsonwebtoken --save`

## Banco de Dados - MongoDB e Docker
- A aplicação faz uso do MongoDB com docker. Para installar a versão mais recente do mongodb com docker (latest) use o comando:
	- `docker pull mongo`
- Para criar um container chamado mongodb, execute o comando abaixo substituindo os valores dos campos `MONGO_INITDB_ROOT_USERNAME` e `MONGO_INITDB_ROOT_PASSWORD` para o usuário e senha desejado.
	- `docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=dbuser -e MONGO_INITDB_ROOT_PASSWORD=myPassword mongo`
	- Comando pra parar a execução: `docker stop mongodb`
	- Para iniciar novamente o mesmo container: `docker start mongodb`

## Dados sensíveis
- Para o funcionamento correto da aplicação é necessário criar o arquivo secrets.js contendo os dados sensíveis usados pela aplicação. O arquivo deve conter as seguintes propriedades:

```javascript
module.exports = {
    mongodbUser: 'mongoDbUser',
    mongodbPassword: 'mongoDbPassword',
    mongodbHost: 'YouHost',
    mongodbPort: '27017',
    saltKey: 'SOME GUID SALT KEY'
}
```
