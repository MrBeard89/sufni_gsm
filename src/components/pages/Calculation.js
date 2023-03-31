import React from 'react'
import '../styles/Calculation.css'
import axios from 'axios'
import { useState, useContext, useEffect } from 'react'
import { CurrencyContext, CurrencyContextDefaults } from '../../context/CurrencyContext'

import { SelectedPhoneContext, SelectedPhoneDefault } from '../../context/SelectedPhoneContext'

export default function Calculation(props) {
  const { selectedPhone, setSelectedPhone } = useContext(SelectedPhoneContext)

  const [phoneData, setPhoneData] = useState(null)
  const [values, setValues] = useState([])
  const { currency, setCurrency } = useContext(CurrencyContext)

  useEffect(() => {
    axios.get('https://api.coinstats.app/public/v1/fiats').then((res) => setValues(res.data))
  }, [])

  {
    /**************** HandleCurrency Function ****************/
  }
  function handleCurrency(event) {
    event.preventDefault()
    setCurrency(values.find((c) => c.name === event.target.value))
  }

  {
    /**************** HandleSubmit Function ****************/
  }

  function handleSubmit(event) {
    event.preventDefault()

    let user = {
      brand: event.target.brand.value,
      model: event.target.model.value,
      os: event.target.os.value,
      releaseYear: event.target.releaseYear.value,
      startPrice: event.target.startPrice.value,
      score: event.target.startScore.value,
      condition: event.target.condition.value,
    }

    {
      /**************** Axios Get Request ****************/
    }

    axios
      .get(
        `https://softcamp.hu/webler/arkalkulator.php?brand=${user.brand}&model=${user.model}&os=${user.os}&releaseYear=${user.releaseYear}&startScore=${user.score}&startPrice=${user.startPrice}&condition=${user.condition}`
      )
      .then((res) => {
        res.data.error === null ? setPhoneData(res.data.data) : alert(res.data.error)
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      {/**************** Main Div ****************/}
      <p className='calculation_title'>Beszámitatná telefonját? Kérem töltse ki az űrlapot</p>
      <hr className='line' />
      <div className='calculation_main'>
        {/**************** Form ****************/}
        <div className='calculation_form'>
          <form onSubmit={handleSubmit}>
            <label for='brand'>Válasza ki a márkát:*</label>
            <select
              name='brand'
              autoComplete='off'
              defaultValue={selectedPhone ? selectedPhone.brand : ''}
              required
            >
              <option value=''>--Kérem válaszon--</option>
              <option value='Apple iPhone'>iPhone</option>
              <option value='Samsung'>Samsung</option>
              <option value='Huawei'>Huawei</option>
            </select>

            <label for='model'>Válasza ki az modelt:*</label>
            <select
              name='model'
              autoComplete='off'
              defaultValue={selectedPhone ? selectedPhone.model : ''}
              required
            >
              <option value=''>--Kérem válaszon--</option>
              <option value='4'>4</option>
              <option value='4s'>4s</option>
              <option value='5'>5</option>
              <option value='8'>8</option>
              <option value='X'>X</option>
              <option value='XS'>XS</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
              <option value='13'>13</option>
              <option value='P30'>P30</option>
              <option value='P40'>P40</option>
              <option value='Galaxy S20'>Galaxy S20</option>
              <option value='Galaxy S21'>Galaxy S21</option>
              <option value='Galaxy S22'>Galaxy S22</option>
            </select>

            <label htmlFor='os'>Válaszon egy rendszert:*</label>
            <select
              name='os'
              autoComplete='off'
              defaultValue={selectedPhone ? selectedPhone.os : ''}
              required
            >
              <option value=''>--Kérem válaszon--</option>
              <option value='ios'>Ios</option>
              <option value='android'>Android</option>
            </select>

            <label htmlFor='releaseYear'>Válasza ki az évjáratott:*</label>
            <select
              name='releaseYear'
              autoComplete='off'
              defaultValue={selectedPhone ? selectedPhone.releaseYear : ''}
              required
            >
              <option value=''>--Kérem válaszon--</option>
              <option value='2012'>2012</option>
              <option value='2013'>2013</option>
              <option value='2014'>2014</option>
              <option value='2015'>2015</option>
              <option value='2016'>2016</option>
              <option value='2017'>2017</option>
              <option value='2018'>2018</option>
              <option value='2019'>2019</option>
              <option value='2020'>2020</option>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
            </select>

            <label htmlFor='startScore'>Kezdő értékelés:*</label>
            <select
              name='startScore'
              defaultValue={selectedPhone ? selectedPhone.score : ''}
              required
            >
              <option value=''>--Kérem válaszon--</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>

            <label htmlFor='startPrice'>Válasza ki a kezdő árat:*</label>
            <select
              name='startPrice'
              autoComplete='off'
              defaultValue={selectedPhone ? selectedPhone.startPrice : ''}
              required
            >
              <option value=''>--Kérem válaszon--</option>
              <option value='199'>199</option>
              <option value='699'>699</option>
              <option value='799'>799</option>
              <option value='899'>899</option>
              <option value='999'>999</option>
            </select>

            <label htmlFor='condition'>Válasza ki a kondiciót:*</label>
            <select
              name='condition'
              autoComplete='off'
              defaultValue={selectedPhone ? selectedPhone.condition : ''}
              required
            >
              <option value=''>--Kérem válaszon--</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <button type='submit' className='btn'>
              Adatok betöltése
            </button>
          </form>
        </div>

        {/**************Calculation Data ***************/}

        <div className='calculation_mobile'>
          {phoneData && (
            <div className='calc_data_main'>
              <h2>Az Ön által választott termék</h2>
              <div>
                <span>Gyártó:</span> {phoneData.brand}
              </div>
              <div>
                <span>Model:</span> {phoneData.model}
              </div>
              <div>
                <span>Operációs rendszer:</span> {phoneData.os}
              </div>
              <div>
                {phoneData.details.map((e, index) => (
                  <div key={index}>
                    <span>Gyártva:</span> {e.year}, <span>Eladási ár:</span>{' '}
                    {Math.round((e.price * currency.rate * 1000) / 1000)}
                    {currency.symbol}{' '}
                  </div>
                ))}
              </div>
              <div>
                <span>Javasolt eladási ár:</span>{' '}
                {Math.round((phoneData.recommendedPrice * currency.rate * 1000) / 1000)}
                {currency.symbol}
              </div>
              <hr className='currency_line' />
              <p className='currency_title'>Kérem válaszon valutát</p>
              <select defaultValue={currency.name} onChange={handleCurrency}>
                {values.map((options, i) => (
                  <option key={i}>{options.name}</option>
                ))}
              </select>
              <p className='thanks'>Köszönjük hogy használta kalkulátorunkat</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
