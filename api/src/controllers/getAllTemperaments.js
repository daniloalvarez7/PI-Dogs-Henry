// TRAIGO TODAS LAS DEPENDENCIAS //

const axios = require('axios');
const { Temperament } = require('../db');
const { DataTypes, UUIDV4 } = require('sequelize');
const { log } = require('console');

const getAllTemperaments = async (req, res) => {

try {
    //   EXTRAIGO DATA DE LA API //
    const apiData = await axios.get(`https://api.thedogapi.com/v1/breeds`);
    
    //  MAPEO LA DATA DE LA API PARA QUEDARME SOLO CON LOS TEMPERAMENTS. ESTOS, AL SER UN STRING CON VARIOS TEMPERAMENTS, LOS SPLITEO EN UN ARRAY //
    let everyTemperament = apiData.data.map(dog => dog.temperament ? dog.temperament : "No info").map(dog => dog?.split(', '));
     
    //   ME ASEGURO DE QUE CADA TEMPERAMENT SEA ÚNICO CON EL '...NEW SET' Y APLANARLOS EN UN ARRAY UNIDIRECCIONAL CON EL .FLAT //
    let eachTemperament = [...new Set(everyTemperament.flat())];
    
    // 
    eachTemperament.forEach(temperament => {
        if(temperament){
            Temperament.findOrCreate({
                where: {name: temperament}
            });
        }
    })
    
    eachTemperament = await Temperament.findAll();

    console.log(eachTemperament);
    res.status(200).json(eachTemperament); 
} catch (error) {
    res.status(400).json({error: error.message});
}

}


module.exports = getAllTemperaments;