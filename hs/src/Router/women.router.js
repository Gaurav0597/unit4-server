const express = require('express')

const router = express.Router()
const WomenSchema = require('../Schema/women.schema')

router.get('/', async (req, res) => {
  try {
    const data = await WomenSchema.find({})

    res.status(200).send(data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
