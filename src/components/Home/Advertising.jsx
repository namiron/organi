import React from 'react'
import home from './Home.module.scss'
import { NavLink } from 'react-router-dom'



const Advertising =({subTitle,title,naturel,color})=>{
    return (
        <NavLink to={'shop'} className={home.natural} style={{background: `url(${naturel}) center center no-repeat`}} >
        <div className={home.naturalContent} style={{color:color}}>
            <h3 className={home.naturalSubTitle}>{subTitle}</h3>
            <h2 className={home.naturalTitle}>{title}</h2>
        </div>
    </NavLink>
    )
}

export default Advertising;