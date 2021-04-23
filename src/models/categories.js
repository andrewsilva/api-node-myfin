const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  valorTotal: {
    type: Number,
  },
  valorParcela: {
    type: Number,
  },
  numeroParcelas: {
    type: Number,
  },
  parcelasFaltantes: {
    type: Number,
  }  
});


module.exports = mongoose.model('Categories', schema);