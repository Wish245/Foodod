import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Foodo App</p>
        <div className="app-download-platforms">
            <img src={assets.GooglePlay} alt="" />
            <img src={assets.AppStore} alt="" />
        </div>
    </div>
  )
}

export default AppDownload