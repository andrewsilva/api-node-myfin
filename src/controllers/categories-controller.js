const mongoose = require('mongoose');
const Categories = mongoose.model('Categories')

exports.get = (req, res, next) => {
  Categories.find({}).then(data=>{
    res.status(201).send(data);
  }).catch(e=>{
    res.status(400).send(e);
  })
}

exports.getById = (req, res, next) => {
  Categories
  .findById(req.params.id)
  .then(data=>{
    res.status(201).send(data);
  }).catch(e=>{
    res.status(400).send(e);
  })
}

exports.post = (req, res, next) => {
  var categories = new Categories(req.body);
  categories.save().then(x=>{
    res.status(201).send({message: 'teste nome categoria'});
  }).catch(e=>{
    res.status(400).send({message: 'teste nome catasdsadegoria', data: e});
  })
  
}

exports.put = (req, res, next) => {
  Categories
  .findByIdAndUpdate(req.params.id, {
    $set: {
      name: req.body.name,
      description: req.body.description,
      valorTotal: req.body.valorTotal,
      valorParcela: req.body.valorParcela,
      numeroParcelas: req.body.numeroParcelas,
      parcelasFaltantes: req.body.parcelasFaltantes
    }
  }).then(x => {
    res.status(201).send({
      message: 'Categoria atualizado com sucesso!'
    });
  }).catch(e => {
    res.status(400).send({
      message: 'Falha ao atualizar',
      data: e
    })
  })
};

exports.delete = (req, res, next) => {
  console.log("deletedentrodaapi", req.params.id)
  Categories
    .findByIdAndRemove(req.params.id)
    .then(x => {
      res.status(200).send({
        message: 'Categoria removida com sucesso'
      });
    }).catch(e => {
      res.status(400).send({
        message: 'Falha ao remover produto',
        data: e
      })
    })
};