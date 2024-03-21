import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getByName, getDogs } from '../../redux/actions';

import './home.css';
import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';

function Home() {

const dispatch = useDispatch();
const allDogs = useSelector((state) => state.allDogs)
const [searchString, setSearchString] = useState('');

const handleChange = (event) => {
// METODO QUE SIRVE PARA QUE LA PÁGINA NO SE REFRESQUE //
    event.preventDefault()
    setSearchString(event.target.value)
};

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(searchString));
}


//*FILTRO SOBRE EL ESTADO *//
// CREACIÓN DE UN L.S QUE TOMA AL G.S //
// const [filtered, setFiltered] = useState(allDogs);

// CREACIÓN DE UN L.S QUE TOMA AL STRING QUE SE ESCRIBA POR INPUT//
// const [searchString, setSearchString] = useState('');

// const handleChange = (event) => {

//METODO QUE SIRVE PARA QUE LA PÁGINA NO SE REFRESQUE//

//     event.preventDefault()
//     setSearchString(event.target.value)
// };

// FUNCIÓN QUE CUANDO HAGA CLIC ME FILTRE POR EL NOMBRE QUE ASIGNE EN EL INPUT Y MODIFIQUE EL L.S //

// const handleSubmit = (event) => {
//     event.preventDefault();
//     const filtered = allDogs.filter(dog => dog.name.includes(searchString))
//     setFiltered(filtered);
// }

useEffect(() => {
    dispatch(getDogs())
}, [dispatch])

  return (
    <div className='home'>
      <h1 className='home-title'>Esta es la Home Page</h1>
      <Navbar handleChange = {handleChange} handleSubmit = {handleSubmit} />
      <Cards allDogs = {allDogs} />
    </div>

  );
}

export default Home;
