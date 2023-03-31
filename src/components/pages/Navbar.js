import React from 'react'
import Logo from '../../assets/mobile_logo.png'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar_container'>
        <div className='navbar_title'>
          <img className='logo' src={Logo} alt='Sufni Gsm logo' />
          <p className='title'>Sufni GSM</p>
        </div>

        <div className='navbar_links'>
          <Link to='/home' className='home'>
            Kezdőlap
          </Link>
          <Link to='/products' className='products'>
            Termékek
          </Link>
          <Link to='/calculation' className='calculation'>
            Kalkuláció
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
