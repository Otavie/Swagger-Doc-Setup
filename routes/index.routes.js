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
*/
router.get('/profile', (req, res) => {
    const demoUser = {
        name: 'Otavie Okuoyo',
        email: 'otavieokuoyo@gmail.com'
    }
    res.status(200).send(demoUser)
})

module.exports = router