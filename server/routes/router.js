const express = require('express')
const { getAllData, loginRoute, signUpRoute, newProducts } = require('../controllers/controller')

const router = express.Router()

router.route('/login').post(loginRoute)
router.route('/register').post(signUpRoute)

router.route('/newproducts').get(newProducts)


module.exports = router