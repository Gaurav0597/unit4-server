const express = require('express')

const router = express.Router()
const kidSchema = require('../Schema/kids.schema')

router.get('/', async (req, res) => {
  try {
    const data = await kidSchema.find({})

    res.status(200).send(data)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router