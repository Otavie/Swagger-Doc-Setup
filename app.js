require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Server is hale and healthy!')
})

app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})