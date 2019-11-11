const mongoose = require('./connection.js')

const AboutMeSchema = new mongoose.Schema({
    aboutMe: String
})

const AboutMeCollection = mongoose.model('AboutMe', AboutMeSchema)

const getAllAboutMe = () => {
    return AboutMeCollection.find()
}

const getOneAboutMe = (aboutMeId) => {
    return AboutMeCollection.findById(aboutMeId)
}

const updateAboutMe = (aboutMeId, updatedAboutMe) => {
    return AboutMeCollection.updateOne({_id: aboutMeId}, updatedAboutMe)
}

const createAboutMe = (newAboutMe) => {
    return AboutMeCollection.create(newAboutMe)
}

const deleteAboutMe = (aboutMeId) => {
    return AboutMeCollection.deleteOne({_id: aboutMeId})
}

module.exports = {
    getAllAboutMe,
    getOneAboutMe,
    updateAboutMe,
    createAboutMe,
    deleteAboutMe
}