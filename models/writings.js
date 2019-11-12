const mongoose = require('./connection.js')

const WritingSchema = new mongoose.Schema({
 aboutMe: String,
 title: String,
 content: String,
 dateWritten: Date,
 contact: String
})


const WritingCollection = mongoose.model('Writings', WritingSchema)



const getWritingByArtistId = () => {
  return WritingCollection.find({ artistId: artistId })
}

const getAllWritings = () => {
  return WritingCollection.find()
}

const getOneWriting = (writingId) => {
  return WritingCollection.findById(writingId)
}

const updateWriting = (writingId, updatedWriting) => {
  return WritingCollection.updateOne({_id: writingId}, updatedWriting)
}

const createWriting = (newWriting) => {
  return WritingCollection.create(newWriting)
}

const deleteWriting = (writingId) => {
  return WritingCollection.deleteOne({_id: writingId})
}



module.exports = {
  getAllWritings,
  getOneWriting,
  createWriting,
  updateWriting,
  deleteWriting,
  getWritingByArtistId
}
