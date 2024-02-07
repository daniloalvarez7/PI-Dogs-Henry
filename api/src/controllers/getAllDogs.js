const getAllDogs = (req, res) => {
    const { name } = req.query;
    console.log(req.query);
    if(name) return res.status(200).send(`mostrando raza ${name}`)
    
    return res.status(200).send('Todo va saliendo bien perri')};


module.exports = getAllDogs;