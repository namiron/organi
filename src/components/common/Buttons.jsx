import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import home from './../Home/Home.module.scss'
import vector from './../../img/icons/Vector.svg'



export const BtnBelieve = ({ btnText }) => {
    return (
        <NavLink to={'shop'} className={home.btnBelieve}>
            <p className={home.btnText}>{btnText}</p>
            <div className={home.btnImageHolder}>
                <img src={vector} alt="vector-icons" />
            </div>
        </NavLink>
    )
}

export const ButtonStyle = ({ btnText }) => {
    return (
        <NavLink to={'shop'} className={home.buttonStyle}>
            <p className={home.btnText}>{btnText}</p>
            <div className={home.btnImageHolder}>
                <img src={vector} alt="vector-icons" />
            </div>
        </NavLink>
    )
}

export const ButtonTransparent = ({ btnText }) => {
    return (
        <NavLink to={'shop'} className={home.ButtonTransparent}>
            <p className={home.btnText}>{btnText}</p>
            <div className={home.btnImageHolder}>
                <img src={vector} alt="vector-icons" />
            </div>
        </NavLink>
    )
}

export const Back = ({ btnHome, btnBack }) => {
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    return (
        <>
            <div className={home.backContainer} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <button className={home.goBack} onClick={goBack}>
                    <p className="goBackText">{btnBack}</p>
                    <div className={home.goBackImage}>
                        <img src={vector} alt="vector-icons" style={{ transform: 'rotate(180deg)' }} />
                    </div>
                </button>
                <NavLink to={'organ'} className="backToHome" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }} >
                    <p className="backToHomeText">{btnHome}</p>
                    <div className="backToHomeImage">
                        <img src={vector} alt="vector-icons" />
                    </div>
                </NavLink>
            </div>


        </>


    )
}