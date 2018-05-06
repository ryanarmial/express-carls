const router = require('express').Router();
const { show, save, update } = require('../controllers/book.controller')

router.get('/', show)

router.post('/', save)

router.put('/:id', update)


module.exports = router;
