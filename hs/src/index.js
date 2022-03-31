const express = require('express')

const app = express()
const WomonRoute = require('./Router/women.router')

app.use(express.json())



app.use('/', WomonRoute)

module.exports = app
