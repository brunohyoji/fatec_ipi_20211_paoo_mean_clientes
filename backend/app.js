const express = require('express')
const cors = require('cors')
const app = express()
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
  const cliente = req.body
  res.status(201).json({mensagem: 'Cliente inserido'})
})

app.use("/api/clientes", (req, res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    clientes: clientes
  })
})

module.exports = app;
