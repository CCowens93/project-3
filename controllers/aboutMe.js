const express = require('express')

const aboutMeApi = require('../models/aboutMe.js')

const aboutMeRouter = express.Router()



aboutMeRouter.get('/', (req, res) => {
    aboutMeApi.getAllAboutMe()
        .then((allAboutMe) => {
            res.json(allAboutMe)
        })
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

aboutMeRouter.get('/:aboutMeId', (req, res) => {
    aboutMeApi.getOneAboutMe(req.params.aboutMeId)
    .then((oneAboutMe) => {
        res.json(oneAboutMe)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

aboutMeRouter.put('./:aboutMeId', (req, res) => {
    aboutMeApi.updateAboutMe(req,params.aboutMeId, req.body)
    .then(() => {
        res.json("updated")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

aboutMeRouter.post('/', (req, res) => {
    aboutMeApi.createAboutMe(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json
    })
})

aboutMeRouter.delete('/:aboutMeId', (req, res) => {
    aboutMeApi.deleteAboutMe(req.params.id)
    .then(() => {
        res.json("deleted")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = {
    aboutMeRouter
}