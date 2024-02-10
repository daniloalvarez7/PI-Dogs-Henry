const { Dog, Temperament } = require('../db')
const axios = require('axios');

const getDogsById = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'db' : 'api'
    try {
        const dogById = source === 'api' ? (await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`)).data 
        : await Dog.findByPk(id);
        res.status(200).json(dogById);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = getDogsById;