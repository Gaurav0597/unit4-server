
const mongoose = require('mongoose')
const menSchema = new mongoose.Schema(
  {
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    image3: { type: String, required: true },
    image4: { type: String, required: true },
    image5: { type: String, required: true },
    BrandName: { type: String, required: true },
    ProductName: { type: String, required: true },
    Price: { type: Number, required: true },
    strikeoffPrice: { type: Number, required: true },
    offer: { type: String, required: true },
    countryOrigin: { type: String, required: true },
    Sleeves: { type: String, required: true },
    Fit: { type: String, required: true },
    Neckline: { type: String, required: true },
    Pattern: { type: String, required: true },
    Fabric: { type: String, required: true },
    PackOf: { type: String, required: true },
    Occasion: { type: String, required: true },
  },
  {
    timestamp: true,
    versionKey: false,
  },
)

module.exports = mongoose.model('mendata', menSchema)
