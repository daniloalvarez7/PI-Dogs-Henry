import { Link } from 'react-router-dom';
import './card.css';

function Card({ dog }) {
  const { name, id, height, weight, life_span, temperament, image } = dog;

  return (
    <div className='card-container'>
      <Link to={`/home/${id}`}>
        <h2>{name}</h2>
        <h2>{life_span}</h2>
        <h2>{temperament}</h2>
        <img src={image.url} alt="perro" />
        <h2>Imperial Height: {height.imperial}</h2>
        <h2>Metric height: {height.metric}</h2>
        <h2>Imperial weight: {weight.imperial}</h2>
        <h2>Metric weight: {weight.metric}</h2>
      </Link>
    </div>
  );
}

export default Card;


