const mongoose = require('./connection.js')

glocal.sampleModel = [];

const BrandSchema = new mongoose.Schema ({
    brandStatement: String

})

const BrandCollection = mongoose.model('Brand', BrandSchema)

const getAllBrands = () => {
    return BrandCollection.find()
}

const getOneBrand = (brandId) => {
    return BrandCollection.findById(brandId)
}

const createBrand = (newBrand) => {
    return BrandCollection.create.apply(newBrand)
}

const updateBrand = (brandId, updatedBrand) => {
    return BrandCollection.updatedBrand({_id: brandId}, updatedBrand)
}

const deleteBrand = (brandId) => {
    return BrandCollection.deleteOne({_id: brandId})
}


module.exports = {
    getAllBrands,
    getOneBrand,
    createBrand,
    updateBrand,
    deleteBrand
}