const { Router } = require('express');
const getAllDogs = require('../controllers/getAllDogs');
const getDogsById = require('../controllers/getDogsById');
const getDogsByName = require('../controllers/getDogsByName');
const postDogs = require('../controllers/postDogs');

const dogsRouter = Router();

dogsRouter.get('/', getAllDogs);

dogsRouter.get('/:idRaza', getDogsById);

dogsRouter.get('/name?=', getDogsByName);

dogsRouter.post('/', postDogs);

module.exports = dogsRouter;