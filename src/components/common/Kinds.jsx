import React from 'react'
import {NavLink } from 'react-router-dom'
import home from './../Home/Home.module.scss'



export const Kinds =({foodKindsTitle,bg})=>{
    return(
        <NavLink to={'shop'} className={home.foodKindsItem}>
            <div className={home.foodKindsImage}>
                <img src={bg} alt="foodKindsImage"/>
            </div>
            <div className={home.foodKindsTitleHolder}>
            <div className={home.foodKindsTitleInner}>
        <h2 className={home.foodKindsTitle}>{foodKindsTitle}</h2>
            </div>
            </div>
        </NavLink>
    )

}