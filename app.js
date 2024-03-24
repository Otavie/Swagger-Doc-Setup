require('dotenv').config()
const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const PORT = process.env.PORT

const app = express()

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'How to Use Swagger',
            description: 'Swagger documentation setup',
            contact: {
                name: 'Otavie Okuoyo'
            },
            servers: ['http://localhost:4210']
        },
        schemes: ['http', 'https'],
    },
    // Path to the API file
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.get('/', (req, res) => {
    res.status(200).send('Server is hale and healthy!')
})

app.listen((PORT), () => {
    console.log(`App is running on PORT http://localhost:${PORT}`)
})