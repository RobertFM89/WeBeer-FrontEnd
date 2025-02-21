import React from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js';
import '../App.css';
import Button from './Button';

const CardBeer = ({ beer, onDelete }) => {
  const handleDelete = async () => {
    try {
      console.log(`Deleting beer with ID: ${beer.id}`); 
      await axiosInstance.delete(`/beers/${beer.id}`);
      onDelete(beer.id);
    } 
    catch (error) {
      console.error('Error deleting beer:', error);
    }
  };

  return (
    <div className="card-beer">
      <img src={beer.img} alt={beer.name} />
      <div >
        <h3 >{beer.name}</h3>
        <p>Familia de cerveza: {beer.family}</p>
        <p>País de origen: {beer.pais}</p>
        <p>Favorita: {beer.favorite ? '✔️' : '❌'}</p>
        <Link to={`/beers/${beer.id}`} className="button">View Details</Link>
        <Button onClick={handleDelete} className='button'>Delete</Button>
      </div>
    </div>
  );
};

export default CardBeer;
