
# Conceitos básicos NodeJS

  
## Criando um projeto
- Para iniciar um projeto apenas execute `npm init -y`
	- O parâmetro `-y` evitará as perguntas e criará o arquivo `package.json` com as informações padrões do node. O arquivo pode ser alterado manualmente, se necessário.
- Execute também o comando `npm install http express debug` pra instalar os pacotes básicos para desenvolvimento web.
- Para executar a API apenas execute o comando `node .\bin\server.js` ou apenas execute `npm start` (script armazenado no package.json)

## Depêndencias (npm installs)
- Package `nodemon` (apenas para dev), para que a API atualize em tempo de execução conforme alteramos a mesma.
	- `npm install nodemon --save-dev`
	- Para executar o nodemon execute: `nodemon .\bin\server.js`