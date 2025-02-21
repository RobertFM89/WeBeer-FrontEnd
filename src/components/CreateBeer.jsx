import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig.js';
import { useNavigate } from 'react-router-dom';

const CreateBeer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [type, setType] = useState('');
  const [family, setFamily] = useState('');
  const [pais, setPais] = useState('');
  const [alcohol, setAlcohol] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [message, setMessage] = useState('');
  const [nextId, setNextId] = useState(null);

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axiosInstance.get('/beers');
        const beers = response.data;
        setNextId(beers.length + 1);
      } catch (error) {
        console.error('Error fetching beers:', error);
      }
    };
    fetchBeers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBeer = {
        id: Number(nextId),
        name,
        img,
        type,
        family,
        pais,
        alcohol: Number(alcohol),
        favorite: Boolean(favorite),
      };
      await axiosInstance.post('/beers', newBeer);
      setMessage('Beer created successfully!');
      navigate('/beers');
      // Clear the form
      setName('');
      setImg('');
      setType('');
      setFamily('');
      setPais('');
      setAlcohol('');
      setFavorite(false);
      setNextId(nextId + 1); // Increment the next ID
    } catch (error) {
      console.error('Error creating beer:', error);
      setMessage('Error creating beer.');
    }
  };

  return (
    <div className="createBeer">
      <h2>Create New Beer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Image URL</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Family</label>
          <input
            type="text"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Country</label>
          <input
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Alcohol Content</label>
          <input
            type="text"
            value={alcohol}
            onChange={(e) => setAlcohol(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Favorite</label>
          <input
            type="checkbox"
            checked={favorite}
            onChange={(e) => setFavorite(e.target.checked)}
          />
        </div>
        <button type="submit" className='button'>Create Beer</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateBeer;
