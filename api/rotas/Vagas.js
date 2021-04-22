const express = require('express')
const rotas = express.Router()

let vagas = []


rotas.get('/', (req, res) => {
  res.json(vagas)
  })

rotas.post('/', (req, res) => {
  const vaga = req.body
  vagas.push(vaga)
  vaga.id = vagas.length
  res.json(vaga)
})

rotas.put('/:id', (req, res) => {
  const id = req.params.id
  const vagaReq = req.body
  const vaga = vagas.find(v => v.id == id)

  if(!vaga)
    res.status(404).json({erro: "vaga não encontrada"})
  else{
    vagas = vagas.filter(v => v.id != id)
    vagas.push(vagaReq)
    vagaReq.id = id
    res.json(vagaReq)
  }
})

rotas.delete('/:id', (req, res) => {
  const id = req.params.id

  const vaga = vagas.find(v => v.id == id)

  if(!vaga)
    res.status(404).json({erro: "vaga não encontrada"})
  else{
    vagas = vagas.filter(v => v.id != id)
    res.json({sucesso: 'Vaga excluida com sucesso'})
  }
})

module.exports = rotas