import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import BeerDetails from './pages/BeerDetails'
import PeriodicTable from './pages/PeriodicTable'
import History from './pages/History'
import NotFound from './pages/NotFound'
import './App.css'
import CreateBeer from './components/CreateBeer'

function App() {

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/beers' element={<Dashboard />} />
        <Route path='/beers/:id' element={<BeerDetails />} />
        <Route path='/table' element={<PeriodicTable />} />
        <Route path='/history' element={<History />} />
        <Route path='/createbeer' element={<CreateBeer />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </Router>
  )
}

export default App
