const getDogsById = (req, res) => {
    const { id } = req.params;
    res.status(200).send(`Detalle del usuario ${id}`)
};


module.exports = getDogsById;