const { Router } = require('express');
const getAllDogs = require('../controllers/getAllDogs');
const getDogsById = require('../controllers/getDogsById');
const postDogs = require('../controllers/postDogs');

const dogsRouter = Router();

dogsRouter.get('/', getAllDogs);

dogsRouter.get('/:id', getDogsById);

dogsRouter.post('/', postDogs);

module.exports = dogsRouter;