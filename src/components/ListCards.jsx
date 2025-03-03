import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig.js';
import CardBeer from './CardBeer';
import loadingBeer from '../assets/public/biercelona-beer.gif';
import '../App.css';


const ListCards = ({ currentPage, beersPerPage, setTotalBeers }) => {
  
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('beers');
  
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axiosInstance.get('/beers');
        setBeers(response.data);
        setTotalBeers(response.data.length);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching beers:", error);
        setLoading(false);
      }
    };
    fetchBeers();
  }, [setTotalBeers]);

  const handleDelete = (id) => {
   const updatedBeers = beers.filter(beer => beer.id !== id)
    setBeers(updatedBeers)
    localStorage.setItem('beers', JSON.stringify(updatedBeers))
  }

      /*const handleDelete = (id) => {
        const updatedItems = items.filter(item => item.id !== id)
        setItems(updatedItems)
        localStorage.setItem('items', JSON.stringify(updatedItems))
      }*/
      
     
  
  

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  }

  const sortBeers = (beers) => {
    switch (sortOption) {
      case 'beers':
        return beers;
      case 'alphabetical':
        return beers.sort((a, b) => a.name.localeCompare(b.name));
      case 'family':
        return beers.sort((a, b) => a.family.localeCompare(b.family));
      case 'alcohol':
        return beers.sort((a, b) => a.alcohol - b.alcohol);
      default:
        return beers;
    }
  }
  const sortedBeers = sortBeers([...beers]);

  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = sortedBeers.slice(indexOfFirstBeer, indexOfLastBeer);


  if (loading) {
    return <div>
      <img src={loadingBeer} alt="Loading..." />
    </div>;
  }

  if (!beers.length) {
    return <div>
      <img src={loadingBeer} alt="Loading..." />
    </div>;
  }

  return (
    <div className="dashboard">
      <h2>Beer List</h2>
      <div className="sort-options">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="beers">Beers</option>
          <option value="alphabetical">Alphabetical</option>
          <option value="family">Family</option>
          <option value="alcohol">Alcohol</option>
        </select>
      </div>
      <ul>
        {currentBeers.map((beer) => (
          <CardBeer key={beer.id} beer={beer} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ListCards;