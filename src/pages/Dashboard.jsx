import React, { useState } from 'react';
import ListCards from '../components/ListCards';
import loadingBeer from '/public/data/biercelona-beer.gif';
import { Link } from 'react-router-dom';
import '../App.css';


const Dashboard = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalBeers, setTotalBeers] = useState(0);
  const beersPerPage = 10;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  
  const totalPages = Math.ceil(totalBeers / beersPerPage);

  if (!<ListCards/>) {
    return (
      <div className='loading-container'>
        <img src={loadingBeer} alt="Loading..." />
      </div>
    );
  }

  return (
    <div className="dashboard">
      
      <ListCards currentPage={currentPage} beersPerPage={beersPerPage} setTotalBeers={setTotalBeers}/>
      <div className='pagination'>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
     
    </div>
  );
};

export default Dashboard;
