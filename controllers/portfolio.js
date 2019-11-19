const express = require('express')

const portfolioApi = require('../models/portfolio.js')

const portfolioRouter = express.Router()



portfolioRouter.get('/byPortfolioId/:portfolioId', (req, res) =>{
    portfolioApi.getOnePortfolio(req.params.portfolioId)
    .then((onePortfolio) => {
        res.json(onePortfolio)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

portfolioRouter.get('/', (req, res) => {
    portfolioApi.getAllPortfolio()
    .then((allPortfolio) => {
        res.json(allPortfolio)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

portfolioRouter.get('/:portfolioId', (req, res) =>{
    portfolioApi.getOnePortfolio(req.params.portfolioId)
    .then((onePortfolio) => {
        res.json(onePortfolio)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

portfolioRouter.post('/', (req, res) => {
    portfolioApi.createPortfolio(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json (error)
    })
})


portfolioRouter.delete('/:portfolioId', (req, res) => {
    portfolioApi.deletePortfolio(req.params.id)
    .then(() => {
        res,json("deleted")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = {
    portfolioRouter
}