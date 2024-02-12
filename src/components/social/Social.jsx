import React from 'react'
import instagram from './../../img/icons/Insta.svg'
import facebook from './../../img/icons/facebook.svg'
import twitter from './../../img/icons/twitter.svg'
import pintrest from './../../img/icons/Pintrest.svg'
import { NavLink } from 'react-router-dom';
import './../footer/Footer.scss'


const Social =()=>{
    return(
        <div className="socialBlog">
        <NavLink to={'/'} className="instagram"><img src={instagram} alt="instagram" /></NavLink>
        <NavLink to={'/'} className="facebook"><img src={facebook} alt="facebook" /></NavLink>
        <NavLink to={'/'} className="twitter"><img src={twitter} alt="twitter" /></NavLink>
        <NavLink to={'/'} className="pinterest"><img src={pintrest} alt="pitrest" /></NavLink>
    </div>
    )
}

export default Social;