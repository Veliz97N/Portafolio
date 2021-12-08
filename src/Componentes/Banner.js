import React, { useEffect, useState } from 'react'
import banner from "../Multimedia/banner.jpg"
import profile from "../Multimedia/profile.png"
import {Fetch_btc} from "../Funciones/Fetch_btc"

const Banner = () => {
  const [btcPrice, setBtcprice] = useState("");  
  const [vetPrice, setVETprice] = useState("");  
  
    useEffect(() => {
        const interval= setInterval(()=>{

            fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                setBtcprice(data);
                console.log(data.market_data.current_price.usd);
            });
            fetch("https://api.coingecko.com/api/v3/coins/vechain")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
                setVETprice(data);
                console.log(data.market_data.current_price.usd);
            });
        
        },10000)
        return ()=>clearInterval(interval)
     
    }, []);
    const handleHoverImageProfile = () =>{
        const tarjeta=document.querySelector(".tarjeta_presentacion")
        tarjeta.classList.remove("desactivada")
        tarjeta.classList.add("activada")
    }
    const handleNoHoverImageProfile = () =>{
        const tarjeta=document.querySelector(".tarjeta_presentacion")
        tarjeta.classList.remove("activada")
        tarjeta.classList.add("desactivada")
    }

  return (
    <div className="banner">
      <img className="portada" src={banner} alt="" />
      <div className="contenedor_simple">
        <div className="tarjeta_presentacion desactivada">
          <div className="cripto">
            <p>Bitcoin</p>
            {btcPrice ? <div><i class="fas fa-dollar-sign icono"/>{btcPrice.market_data.current_price.usd }</div> : "Cargando"}
          </div>
          <div className="cripto">
            <p>VeChain</p>
            {vetPrice ? <div><i class="fas fa-dollar-sign icono"/>{vetPrice.market_data.current_price.usd}</div> : "Cargando"}
          </div>
        </div>
        <img className="foto_perfil" src={profile} alt="" srcset="" onMouseEnter={handleHoverImageProfile} onMouseLeave={handleNoHoverImageProfile}/>
      </div>

      <div className="educacion">
        <p>Full Stack Developer</p>
        <p>Mining Engineer</p>
      </div>
    </div>
  );
};
export default Banner;
