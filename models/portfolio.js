const mongoose = require('./connection.js')

const PortfolioSchema = new mongoose.Schema({
    genre: String,
    author: String,
    title: String
})

const PortfolioCollection = mongoose.model('Portfolio', PortfolioSchema)

const getPortfolioByArtistId = () => {
    return PortfolioCollection.find({ artistId: artistId})
}

const getAllPortfolio = () => {
    return PortfolioCollection.find()
}

const getOnePortfolio = (portfolioId) => {
    return PortfolioCollection.findById(portfolioId)
}

const createPortfolio = (newPortfolio) => {
    return PortfolioCollection.create(newPortfolio)
}

const deletePortfolio = (portfolioId) => {
    return PortfolioCollection.deleteOne({_id: portfolioId})
}

module.exports = {
    getAllPortfolio,
    getOnePortfolio,
    createPortfolio,
    deletePortfolio,
    getPortfolioByArtistId
}