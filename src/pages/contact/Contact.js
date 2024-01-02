import React from 'react'

// import davinciLogo from '../../images/Group 74.svg'
import whatsappLogo from '../../images/icons8-whatsapp (1).svg'
import facebookLogo from '../../images/icons8-facebook.svg'
import instagramLogo from '../../images/icons8-instagram.svg'
// import tiktokLogo from '../../images/icons8-tiktok (1).svg'
import pinterestLogo from '../../images/icons8-pinterest.svg'
import { Enlace } from "../../components/Enlace";

import '../../App.css'

const Contact = () => {
  return (
    <div className="container">
      {/* {setLinksVisible(false)} */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Da Vinci's Ink</h1>
        <ul>
          <Enlace url="https://walink.co/85f91a" texto="WhatsApp" imagenUrl={whatsappLogo} />
          <Enlace url="https://www.facebook.com/profile.php?id=61553589208270" texto="Facebook" imagenUrl={facebookLogo} />
          <Enlace url="https://www.instagram.com/da_vincis_ink/" texto="Instagram" imagenUrl={instagramLogo} />
          <Enlace url="https://www.pinterest.com.mx" texto="Busca diseños aqui" imagenUrl={pinterestLogo} />
          {/* <Enlace url="https://www.instagram.com/adolfocbg/" texto="Instagram" imagenUrl={instagramLogo} /> */}
          {/* <Enlace url="https://www.facebook.com/AdolfoC.BasilioGeniz" texto="Facebook" imagenUrl={facebookLogo} /> */}
          {/* <Enlace url="https://www.tiktok.com/@adolfocbasilio" texto="TikTok" imagenUrl={tiktokLogo} /> */}
          {/* <Enlace url="https://www.tiktok.com/@adolfocbasilio" texto="TikTok" imagenUrl={tiktokLogo} /> */}
          {/* <Enlace url="/home" texto="Da Vinci´s Ink" imagenUrl={davinciLogo} /> */}
        </ul>
      </div>

      <div style={{ background: '#FEB801', height: '2vh', width: '100%' }}></div>
    </div>
  )
}

export default Contact