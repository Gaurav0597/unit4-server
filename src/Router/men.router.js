const express = require('express')

const router = express.Router()
const menSchema = require('../Schema/men.schema')

router.get('/', async (req, res) => {
  try {
    const data = await menSchema.find({})

    res.status(200).send(data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router