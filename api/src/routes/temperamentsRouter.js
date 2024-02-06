const { Router } = require('express');
const getAllTemperaments = require('../controllers/getAllTemperaments');

const temperamentsRouter = Router();

temperamentsRouter.get('/', getAllTemperaments);

module.exports = temperamentsRouter;