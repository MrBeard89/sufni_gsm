import '../styles/Footer.css'
import React from 'react'
import 'boxicons'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer_container'>
        <p className='footer_copyright'>
          Minden jog fenntartva 2022 &copy; Sufni GSM
        </p>
        <box-icon className='tada' name='mobile' animation='tada'></box-icon>
        <div className='icons'>
          <box-icon type='logo' name='facebook-circle'></box-icon>
          <box-icon name='twitter' type='logo'></box-icon>
          <box-icon name='github' type='logo'></box-icon>
        </div>
      </div>
    )
  }
}

export default Footer
