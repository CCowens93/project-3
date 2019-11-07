const express = require('express')

const brandApi = require('../models/brand.js')

const brandRouter = express.Router()


//getAll
brandRouter.get('/brand', (req, res) => {
  brandApi.getAllBrands()
      .then((allWritings) => {
          res.render('allBrands', { allBrands })
      })
})

//getOne
brandRouter.get('/brand/:id', (req, res) => {
  brandApi.getOneBrand(req.params.id)
      .then((oneBrand) => {
          res.render('oneBrand', oneBrand)
      })
})

//create
brandRouter.post('/brand', (req, res) => {
  brandApi.createBrand(req.body)
      .then((createdBrand) => {
          res.redirect('/brand')
      })
})

//update
brandRouter.put('/brand/:id', (req, res) => {
  brandApi.updateBrand(req.params.id, req.body)
      .then((updatedBrand) => {
          res.redirect(`/brand/${req.params.id}`)
      })
})

//delete
brandRouter.delete('/brand/:id', (req, res) => {
  brandApi.deleteBrand(req.params.id)
      .then((deletedBrand) => {
          res.redirect('/brand')
      })
})



module.exports = {
  brandRouter
}
