const { Router } = require('express');
const getAllDogs = require('../controllers/getAllDogs');
const getDogsById = require('../controllers/getDogsById');
const createDogs = require('../controllers/createDogs');

const dogsRouter = Router();

dogsRouter.get('/', getAllDogs);

dogsRouter.get('/:id', getDogsById);

dogsRouter.post('/', createDogs);

module.exports = dogsRouter;