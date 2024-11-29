const express = require('express')
const { getAllData, loginRoute, signUpRoute } = require('../controllers/controller')

const router = express.Router()

router.route('/products').get(getAllData)
router.route('/login').post(loginRoute)
router.route('/register').post(signUpRoute)


module.exports = router