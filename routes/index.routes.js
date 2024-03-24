const express = require('express')
const router = express.Router()

/**
*   @swagger
*   /api/profile:
*   get:
*       summary: Fetches user profile details
*       description: Fetches profile details of the user
*       tags:
*           - profile
*       responses: 
*           '200':
*               description: User profile fetched successfully
*               content:
*                   application/json:
*                       schema:
*                           type: object
*                           properties:
*                               name:
*                                   type: string
*                                   example: Otavie Okuoyo
*                               email:
*                                   type: string
*                                   example: otavieokuoyo@gmail.com
*           '400':
*               description: Unable to fetch user profile data
*
*   post:
*       summary: Creates a new user profile
*       description: Create a new profile for the user
*       tags:
*           - profile
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       type: object
*                       properties:
*                           name:
*                               type: string
*                               example: Otavie Okuoyo
*                           email:
*                               type: string
*                               example: otavieokuoyo@gmail.com
*       responses:
*           '201':
*               description: User profile created successfully!
*               content:
*                   application/json:
*                       schema:
*                           type: object
*                           properties:
*                               message:
*                                   type: string
*                                   example: User profile created successfully 
*           '400':
*               description: Unable to create user profile
*/

router.get('/profile', (req, res) => {
    const demoUser = {
        name: 'Otavie Okuoyo',
        email: 'otavieokuoyo@gmail.com'
    }
    res.status(200).send(demoUser)
})

router.post('/profile', async(req, res) => {
    const { name, email } = req.body

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required!'})
    }

    const newUser = {
        'name': 'Blessing John',
        'email': 'blessingjohn@gmail.com'
    }

    res.status(201).send(newUser)
})

module.exports = router