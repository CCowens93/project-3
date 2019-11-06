const express = require('express')

const writersApi = require('../models/writers.js')

const writersRouter = express.Router()


//getAll
writersRouter.get('/writers', (req, res) => {
  writersApi.getAllWritings()
      .then((allWritings) => {
          res.render('allWritings', { allWritings })
      })
})

//getOne
writersRouter.get('/writers/:id', (req, res) => {
  writersApi.getOneWriting(req.params.id)
      .then((oneWriting) => {
          res.render('oneWriting', oneWriting)
      })
})

//create
writersRouter.post('/writers', (req, res) => {
  writersApi.createWriting(req.body)
      .then((createdWritings) => {
          res.redirect('/writers')
      })
})

//update
writersRouter.put('/writers/:id', (req, res) => {
  writersApi.updateWriting(req.params.id, req.body)
      .then((updatedWriting) => {
          res.redirect(`/writers/${req.params.id}`)
      })
})

//delete
writersRouter.delete('/writers/:id', (req, res) => {
  writersApi.deleteWriting(req.params.id)
      .then((deletedWriting) => {
          res.redirect('/writers')
      })
})



module.exports = {
  writersRouter
}
