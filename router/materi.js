const materiController = require('../controllers/materi');
const router = require('express').Router();

router.get('/materi', materiController.getAll);
router.get('/materi/:id', materiController.findOne);

module.exports = router;