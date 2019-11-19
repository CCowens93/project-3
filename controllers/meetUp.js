const express = require ('express')

const meetUpApi = require('../models/meetUp.js')

const meetUpRouter = express.Router()


meetUpRouter.get('/', (req, res) => {
    meetUpApi.getAllMeetUp()
    .then((allMeetUp) => {
        res.json(allMeetUp)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

meetUpRouter.get('/:meetUpId', (req, res) => {
    meetUpApi.getOneMeetUp(req.params.meetUpId)
    .then((oneMeetUp) => {
        res.json(oneMeetUp)
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

meetUpRouter.post('/', (req, res) => {
    meetUpApi.createMeetUp(req.body)
    .then(() => {
        res.json("created")
    })
    .catch(error => {
        console.log(error)
        res.json(error)
    })
})

module.exports = {
    meetUpRouter
}