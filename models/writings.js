const mongoose = require('./connection.js')

const WritingSchema = new mongoose.Schema({
 title: String,
 content: String,
 themes: String,
 dateWritten: Date
})


const WritingCollection = mongoose.model('Writers', WritingSchema)



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
