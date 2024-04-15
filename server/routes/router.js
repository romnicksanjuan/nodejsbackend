const express = require('express');
const {Welcome, Register} = require('../controller/userController')

const router = express.Router();
router.get('/', Welcome)
router.post('/register', Register)
module.exports = router