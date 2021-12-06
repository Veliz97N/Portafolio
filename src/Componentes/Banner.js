import React from 'react'
import banner from "../Multimedia/banner.jpg"
import profile from "../Multimedia/profile.png"

const Banner = () => {
    return (
        <div className="banner">
            <img className="portada" src={banner} alt="" />
            <img className="foto_perfil" src={profile} alt="" srcset="" />
        </div>
    )
}
export default Banner
