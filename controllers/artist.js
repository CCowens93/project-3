const express = require('express')

const artistApi = require('../models/artist.js')

const artistRouter = express.Router()

//getAll
artistRouter.get('/', (req, res) => {
    artistApi.getAllArtists()
        .then((allArtists) => {
            res.json(allArtists)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
  })


//getOne
artistRouter.get('/:artistid', (req, res) => {
    artistApi.getOneArtist(req.params.artistId)
        .then((oneArtist) => {
            res.json(oneArtist)
        })
        .catch(error => {
          console.log(error)
          res.json(error)
      })
  })



//update
artistRouter.put('/:artistid', (req, res) => {
    artistApi.updateArtist(req.params.artistId, req.body)
        .then(() => {
            res.json("updated")
        })
        .catch(error => {
          console.log(error)
          res.json(error)
      })
  })



//create
artistRouter.post('/', (req, res) => {
    artistApi.createArtist(req.body)
        .then(() => {
            res.json("created")
        })
        .catch(error => {
          console.log(error)
          res.json(error)
      })
  })


//delete
artistRouter.delete('/:artistId', (req, res) => {
    artistApi.deleteArtist(req.params.id)
        .then(() => {
            res.json("deleted")
        })
        .catch(error => {
          console.log(error)
          res.json(error)
      })
  })


module.exports = {
    artistRouter
}