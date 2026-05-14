const express = require('express');
const router = express.Router();
const { getHome, getAbout, getSkills, getStatus } = require('../controllers/general');

router.get('/', getHome);
router.get('/about', getAbout);
router.get('/skills', getSkills);
router.get('/status', getStatus);

module.exports = router;