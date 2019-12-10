const express = require('express');
const router = express.Router();

const DocumentController = require('../controllers/DocumentController');

router.get('/test', (req, res) => {
    res.render('index.ejs');
});

router.post('/document/create', DocumentController.create);

module.exports = router;