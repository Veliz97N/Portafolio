import React from 'react'
import banner from "../Multimedia/banner.jpg"
import profile from "../Multimedia/profile.png"

const Banner = () => {
    return (
      <div className="banner">
        <img className="portada" src={banner} alt="" />
        <div className="contenedor_simple">
          <div className="tarjeta_presentacion">
          <div className="cripto">
            <p>Bitcoin</p>
            <p>Precio</p>
              </div>
              <div className="cripto">
            <p>VeChain</p>  
            <p>Precio</p>          
            </div>
          </div>
          <img className="foto_perfil" src={profile} alt="" srcset="" />
        </div>

        <div className="educacion">
          <p>Full Stack Developer</p>
          <p>Mining Engineer</p>
        </div>
      </div>
    );
}
export default Banner
