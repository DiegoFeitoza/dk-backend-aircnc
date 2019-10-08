const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors')

const path = require('path')

const app = express();

require('dotenv/config');
//GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.body = Acessar corpo da requisição (para criação e edição)
//req.params = Acessar route params (para edição e delete)

var urlVirt = process.env.MONGODB_URL;

mongoose.connect(urlVirt, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

const port = (process.env.PORT) ? process.env.PORT : 3333
console.log('Porta atual:', port);
app.listen(port);