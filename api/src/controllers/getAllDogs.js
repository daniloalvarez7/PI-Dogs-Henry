const { default: axios, all } = require('axios');
const { Dog, Temperament } = require('../db')

const getAllDogs = async (req, res) => {
    const { name } = req.query;

    try {
        if(name){
            const dogsApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=live_qQWZtRxVexywr7hq7iWj1gYIcQdOMxmFNshbWHHFhBVkjW9qfioShByJicFoXoAe `)).data;

            const dogApiFiltered = dogsApi.filter(dog => dog.name === name)

            const dogDbFiltered = await Dog.findAll({where: {name: name}})

            const allDogs = [...dogApiFiltered, ...dogDbFiltered]
            
            res.status(200).json(allDogs);
        } 
        else{
            const dogsDb = await Dog.findAll();
            
            let dogsApi = (await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=live_qQWZtRxVexywr7hq7iWj1gYIcQdOMxmFNshbWHHFhBVkjW9qfioShByJicFoXoAe`)).data;
            
            const allDogs = [...dogsDb, ...dogsApi]
            
            res.status(200).json(allDogs);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }

}
module.exports = getAllDogs;