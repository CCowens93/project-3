const mongoose = require('./connection.js')

const PortfolioSchema = new mongoose.Schema({
    title: String,
    content: String,
    dateWritten: Date
})

const PortfolioCollection = mongoose.model('Portfolio', PortfolioSchema)



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
}