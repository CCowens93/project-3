const mongoose = require('./connection.js')

const ArtistSchema = new mongoose.Schema({
    artistName: String,
    style: String,
    location: String
})

const ArtistCollection = mongoose.model('Artists', ArtistSchema)



const getProfileByArtistId = () => {
    return ArtistCollection.find({ artistId: artistId})
}

const getAllArtists = () => {
    return ArtistCollection.find()
}

const getOneArtist = (artistId) => {
    return ArtistCollection.findById(artistId)
}

const updateArtist = (artistId, updatedArtist) => {
    return ArtistCollection.updateOne({_id: artistId}, updatedArtist)
}

const createArtist = (newArtist) => {
    return ArtistCollection.create(newArtist)
}

const deleteArtist = (artistId) => {
    return ArtistCollection.deleteOne({_id: artistId})
}

module.exports = {
    getAllArtists,
    getOneArtist,
    updateArtist,
    createArtist,
    deleteArtist,
    getProfileByArtistId
}


