const mongoose = require('mongoose');
const clienteSchema = mongoose.Schema({
  nome: {type: String, required: true},
  fone: {type: String, required: true, default: '000000000'},
  email: {type: String, required: true}
});

module.exports = mongoose.model ('Cliente', clienteSchema);
