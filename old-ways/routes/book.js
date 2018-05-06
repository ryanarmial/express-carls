const router = require('express').Router()
const { show, detail } = require('../controllers/bookController')
const cekAngka = require('../middleware/cekAngka')
const cekDB = require('../middleware/cekDB')
// const router = express().Router()

router.get('/', show)

router.get('/:id', cekAngka, cekDB, detail)

module.exports = router