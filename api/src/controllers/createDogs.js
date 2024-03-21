const { Dog } = require('../db');

const createDogs = async (req, res) => {
    const { name, height, weight, life_span, temperament } = req.body;

    try {
        console.log('Datos recibidos en el servidor:', req.body);

        if (!temperament) {
            return res.status(400).json({ message: 'Debe otorgar al menos un temperamento' });
        }

        // Convertir la cadena de temperamentos en un array
        const temperamentsString = temperament.join(', ');

        const createDog = await Dog.create({
            name: name,
            height: height,
            weight: weight,
            life_span: life_span,
            temperament: temperamentsString
        });

        res.status(200).json(createDog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createDogs;
