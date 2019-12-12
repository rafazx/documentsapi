const express = require('express');
const router = express.Router();

const DocumentController = require('../controllers/DocumentController');

router.post('/document/create', DocumentController.create);
router.put('/document/:id', DocumentController.update)
router.get('/' , DocumentController.getAll)

module.exports = router;