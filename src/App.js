import './App.css'
import React from 'react'
import Navbar from './components/pages/Navbar'
import Products from './components/pages/Products'
import Calculation from './components/pages/Calculation'
import Home from './components/pages/Home'
import Footer from './components/pages/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CurrencyContext, CurrencyContextDefaults } from './context/CurrencyContext'
import { useState, useContext, useEffect } from 'react'
import { SelectedPhoneContext, SelectedPhoneContextDefault } from './context/SelectedPhoneContext'

function App() {
  const [currency, setCurrency] = useState(CurrencyContextDefaults)
  const [selectedPhone, setSelectedPhone] = useState(SelectedPhoneContextDefault.value)
  return (
    <div className='App'>
      <SelectedPhoneContext.Provider value={{ selectedPhone, setSelectedPhone }}>
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
          <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/calculation' element={<Calculation />} />
            </Routes>
            <Footer />
          </Router>
        </CurrencyContext.Provider>
      </SelectedPhoneContext.Provider>
    </div>
  )
}

export default App
