const express = require('express')

const writingsApi = require('../models/writings.js')

const writingsRouter = express.Router()


//getAll
writingsRouter.get('/', (req, res) => {
  writingsApi.getAllWritings()
      .then((allWritings) => {
          res.json(allWritings)
      })
      .catch(error => {
          console.log(error)
          res.json(error)
      })
})


//getOneWritingByArtist
writingsRouter.get('/byArtistId/:artistId', (req, res) => {
    writingsApi.getOneWriting(req.params.writingId)
        .then((oneWriting) => {
            res.json(oneWriting)
        })
        .catch(error => {
          console.log(error)
          res.json(error)
      })
  })


//getOne
writingsRouter.get('/:writingid', (req, res) => {
  writingsApi.getOneWriting(req.params.writingId)
      .then((oneWriting) => {
          res.json(oneWriting)
      })
      .catch(error => {
        console.log(error)
        res.json(error)
    })
})

//update
writingsRouter.put('/:writingid', (req, res) => {
    writingsApi.updateWriting(req.params.writerId, req.body)
        .then(() => {
            res.json("updated")
        })
        .catch(error => {
          console.log(error)
          res.json(error)
      })
  })

//create
writingsRouter.post('/', (req, res) => {
  writingsApi.createWriting(req.body)
      .then(() => {
          res.json("created")
      })
      .catch(error => {
        console.log(error)
        res.json(error)
    })
})



//delete
writingsRouter.delete('/:writingid', (req, res) => {
  writingsApi.deleteWriting(req.params.id)
      .then(() => {
          res.json("deleted")
      })
      .catch(error => {
        console.log(error)
        res.json(error)
    })
})



module.exports = {
  writingsRouter
}
