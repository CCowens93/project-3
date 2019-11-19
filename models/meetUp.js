const mongoose = require('./connection.js')

const MeetUpSchema = new mongoose.Schema({
    venue: String, 
    location: String,
    environment: String
})

const MeetUpCollection = mongoose.model('MeetUp', MeetUpSchema)

const getAllMeetUp = () => {
    return MeetUpCollection.find()
}

const getOneMeetUp = (meetUpId) => {
    return MeetUpCollection.findById(meetUpId)
}

const createMeetUp = (meetUpId) => {
    return MeetUpCollection.create(meetUpId)
}

module.exports = {
    getAllMeetUp,
    getOneMeetUp,
    createMeetUp
}