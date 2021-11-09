import express from 'express';
const router = express.Router();

const search = require('../controllers/search');

router.get('/photos', search.getPhotos);

export default router;