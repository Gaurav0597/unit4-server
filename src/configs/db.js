const mongoose = require('mongoose')

module.exports = () => {
  return mongoose.connect(
    'mongodb+srv://GauravPetkar:Gaurav@cluster0.harnf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  )
}
