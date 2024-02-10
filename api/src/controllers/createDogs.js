const { Dog, Temperament } = require('../db')

const createDogs = async (req, res) => {
    const { name, height, weight, life_span, image, temperament } = req.body;

    try {

        if(!temperament){
            return res.status(400).json({message: 'Debe otorgar al menos un temperamento'})
        }

        const createDog = await Dog.create({
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
            image: image,
            temperament: temperament
        })
        res.status(200).json(createDog);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


module.exports = createDogs;