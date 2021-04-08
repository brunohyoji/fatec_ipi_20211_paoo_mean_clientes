const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const Cliente = require('./models/cliente')
const env = require('./env')
const cliente = require('./models/cliente')

const dbName = "db_clientes";

mongoose.connect(`mongodb+srv://fatec_ipi_20211_paoo:${env.mongoPassword}@cluster0.asdpx.mongodb.net/${dbName}?retryWrites=true&w=majority`,
{ useNewUrlParser: true })
.then(() => console.log('MongoDB: Conexao OK'))
.catch(() => console.log('MongoDB: Conexao NOK'))

app.use(express.json())
app.use(cors())

const clientes = [
  {
    id: '1',
    nome: 'Jose',
    fone: '11223344',
    email: 'jose@email.com'
  },
  {
    id: '2',
    nome: 'Jaqueline',
    fone: '44332211',
    email: 'jaqueline@email.com'
  }
]


app.post("/api/clientes", (req, res, next) => {
  const cliente = new Cliente ({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email
  })
  cliente.save();
  res.status(201).json({mensagem: 'Cliente inserido'})
})

app.get("/api/clientes", (req, res, next) => {
  cliente.find().then(documents => {
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents
    })
  })
})




module.exports = app;
