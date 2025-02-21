import React, { useEffect } from 'react';
import '../App.css';
import axiosInstance from '../axiosConfig';
import loadingBeer from '../../public/data/biercelona-beer.gif';

const CardBeerDetails = ({ beer, id }) => {



    useEffect(() => {
        const fetchBeer = async () => {
          try {
            const response = await axiosInstance.get(`/beers/${id}`);
            setBeer(response.data);
          } catch (error) {
            console.error("Error fetching beer:", error);
          }
        }
        fetchBeer();
      }
      , [id]);

      if (!beer) {
        return <div>
          <div>
            <img src={loadingBeer} alt="Loading..." />
            </div>
      
        </div>
      }
    
  return (
    <div className="card-beer-details">
      <img src={beer.img} alt={beer.name} className="w-full max-h-24 object-cover mb-4" />
      <div className='card-body'>
      <h3 className="text-xl font-bold">{beer.name}</h3>
      <p>Tipo de cerveza: {beer.type}</p>
      <p>Familia de cerveza: {beer.family}</p>
      <p>País de origen: {beer.pais}</p>
      <p>Graduación alcohólica: {beer.alcohol}</p>
      <p>Favorita: {beer.favorite ? '✔️' : '❌'}</p>
     
      </div>
    </div>
  );
};

export default CardBeerDetails;