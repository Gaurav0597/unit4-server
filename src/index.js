const express = require('express')

const app = express()
const WomenRoute = require('./Router/women.router')
const menRoute = require('./Router/men.router')
const kidRoute = require('./Router/kid.router')


app.use(express.json())



app.use('/women', WomenRoute)
app.use('/men', menRoute)
app.use('/kid', kidRoute)

module.exports = app
