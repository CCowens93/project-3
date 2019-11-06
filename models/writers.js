const mongoose = require('./connection.js')

global.sampleModel = [];

const WritersSchema = new mongoose.Schema({
 name: String
})


const WritingCollection = mongoose.model('Writers', WritersSchema)


const getAllWritings = () => {
  return WritingCollection.find()
}

const getOneWriting = (writingId) => {
  return WritingCollection.findById(writingId)
}

const createWriting = (newWriting) => {
  return WritingCollection.create.apply(newWriting)
}

const updateWriting = (writingId, updatedWriting) => {
  return WritingCollection.updatedWriting({_id: writingId}, updatedWriting)
}

const deleteWriting = (writingId) => {
  return WritingCollection.deleteOne({_id: writingId})
}



module.exports = {
  getAllWritings,
  getOneWriting,
  createWriting,
  updateWriting,
  deleteWriting
}
