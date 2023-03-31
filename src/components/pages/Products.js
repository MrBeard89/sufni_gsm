import React from 'react'
import Phones from '../../config/phones_schema.json'
import { SelectedPhoneContext } from '../../context/SelectedPhoneContext'
import '../styles/Products.css'
import { useContext } from 'react'

export const Products = () => {
  const { selectedPhone, setSelectedPhone } = useContext(SelectedPhoneContext)
  function handleClick(phone) {
    setSelectedPhone(phone)
  }

  return (
    <>
      <div className='phones_main'>
        <p className='phones_title'>Válasza ki készülékét</p>
        <hr className='line' />
        <div className='phones_container'>
          {Phones.map((phone, key) => {
            return (
              <div className='phones' key={key} onClick={() => handleClick(phone)}>
                <p className='phone_text'>
                  Márka:<span className='phone_data'>{phone.brand}</span>
                </p>
                <p className='phone_text'>
                  Os:<span className='phone_data'>{phone.os}</span>
                </p>
                <p className='phone_text'>
                  Model:<span className='phone_data'>{phone.model}</span>
                </p>
                <p className='phone_text'>
                  Kiadás Éve:
                  <span className='phone_data'>{phone.releaseYear}</span>
                </p>
                <p className='phone_text'>
                  Kezdő Ár:
                  <span className='phone_data'>{phone.startPrice}</span>
                </p>
                <p className='phone_text'>
                  Pontszám:<span className='phone_data'>{phone.score}</span>
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Products
