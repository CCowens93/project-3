const mongoose = require('./connection.js')

global.sampleModel = [];

const ArtistSchema = new mongoose.Schema({
    name: String
})

const ArtistCollection = mongoose.model('Artists', ArtistSchema)

const getAllArtists = () => {
    return ArtistCollection.find()
}

const getOneArist = () => {
    return ArtistCollection.findById(artistId)
}

const updateArtist = () => {
    return ArtistCollection.updateOne({_id: artistId}, updatedArtist)
}

const createArtist = () => {
    return ArtistCollection.create.apply(newArtist)
}

const deleteArtist = (artistId) => {
    return ArtistCollection.deleteOne({_id: artistId})
}

module.exports = {
    getAllArtists,
    getOneArist,
    updateArtist,
    createArtist,
    deleteArtist
}


