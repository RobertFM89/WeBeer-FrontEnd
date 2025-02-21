import React, { useEffect, useState } from 'react'
import axiosInstance from '../axiosConfig'
import { useNavigate, useParams } from 'react-router-dom';
import loadingBeer from '../assets/public/biercelona-beer.gif';
import UpdateBeer from '../components/UpdateBeer';
import CardBeerDetails from '../components/CardBeerDetails';
import Button from '../components/Button';
import '../App.css';



const BeerDetails = () => {

const { id } = useParams();
const navigate = useNavigate();
const [showUpdate, setShowUpdate] = useState(false);
const [beer, setBeer] = useState(null);

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
    <div className="beerDetails">
    {showUpdate ? (
      <UpdateBeer />
    ) : (
      <>
        <CardBeerDetails beer={beer} />
        <Button onClick={() => setShowUpdate(true)} className="button mt-2">Update Beer</Button>
        <Button onClick={() => navigate('/beers')} className="button mt-2">Dashboard</Button>
        <Button onClick={() => navigate('/table')} className="button mt-2">Periodic Table</Button>
      </>
    )}
  </div>
  )
}

export default BeerDetails
