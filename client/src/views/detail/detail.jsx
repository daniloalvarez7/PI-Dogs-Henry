import { useEffect, useState } from 'react';
import { getById} from '../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import './detail.css';
import Card from '../../components/card/card';

function Detail() {
  
  const dispatch = useDispatch()

  const dogsById = useSelector((state) => state.dogsById)
  
  useEffect(() => {
    dispatch(getById())
   }, [dispatch])
  
  return (
    <div>
      <h1>Este es el Detail de cada Dog</h1>
    </div>
  );
}

export default Detail;
