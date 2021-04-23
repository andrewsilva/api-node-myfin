const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const router = express.Router();

//conecta no banco
mongoose.connect('mongodb+srv://andrew:dasilva@cluster0.32eay.mongodb.net/myFin?retryWrites=true&w=majority');

const Categories = require('./models/categories')

//carrega rotas
const indexRoute = require('./routes/index-route');
const categoriesRoute = require('./routes/categories-route')

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const create = router.post('/', (req, res, next) => {
  res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  res.status(201).send({
    id: id,
    item: req.body
  });
});

const del = router.delete('/', (req, res, next) => {
  res.status(200).send(req.body);
});

app.use('/', indexRoute);
app.use('/api/v1/categories', categoriesRoute);

module.exports = app;