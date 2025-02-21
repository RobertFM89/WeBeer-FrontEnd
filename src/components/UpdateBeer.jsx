import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../axiosConfig.js';
import '../App.css';
import Button from './Button';

const UpdateBeer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [type, setType] = useState('');
  const [family, setFamily] = useState('');
  const [pais, setPais] = useState('');
  const [alcohol, setAlcohol] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await axiosInstance.get(`/beers/${id}`);
        const beer = response.data;
        setName(beer.name);
        setImg(beer.img);
        setType(beer.type);
        setFamily(beer.family);
        setPais(beer.pais);
        setAlcohol(beer.alcohol);
        setFavorite(beer.favorite);
      } catch (error) {
        console.error('Error fetching beer:', error);
      }
    };
    fetchBeer();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedBeer = {
        name,
        img,
        type,
        family,
        pais,
        alcohol,
        favorite,
      };
      await axiosInstance.put(`/beers/${id}`, updatedBeer);
      setMessage('Beer updated successfully!');
      navigate('/beers');
    } catch (error) {
      console.error('Error updating beer:', error);
      setMessage('Error updating beer.');
    }
  };

  return (
    <div className="update-beer">
      <h2>Update Beer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen URL</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tipo</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Familia</label>
          <input
            type="text"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Pais</label>
          <input
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Alcohol %</label>
          <input
            type="text"
            value={alcohol}
            onChange={(e) => setAlcohol(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Favorita</label>
          <input
            type="checkbox"
            checked={favorite}
            onChange={(e) => setFavorite(e.target.checked)}
          />
        </div>
        <Button type="submit">Actualizar cerveza</Button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateBeer;