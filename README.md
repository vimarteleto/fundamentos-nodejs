# Trilha Node.js do programa Rocketseat Ignite
## Fundamentos Node.js

Criação do package.json com yarn:
```bash
yarn init -y
```
<br>

Adição de dependencias com yarn:
```bash
yarn add express
```
<br>

Adição de dependencias de desenvolvimento com yarn:
```bash
yarn add nodemon -D
```
<br>

### Tipos de parâmetros
Parâmetros de rota: identificação de recurso, edição, exclusão ou busca
```js
'rota/api/recurso/:id'
response.params
``` 
<br>

Parâmetros de query: paginação ou filtro
```js
'rota/api/recurso?page=1&order=asc'
response.query
``` 
<br>

Parâmetros de body: inserção ou alteração de objetos
```js
'rota/api/recurso'
response.body
// é necessário utilizar o middleware express.json() para body em formato json
``` 
<br>
