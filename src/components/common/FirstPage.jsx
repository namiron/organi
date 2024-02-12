import React from 'react'
import about from './../aboutUs/AboutUs.module.scss'


export const FirstPage = ({ bg, title }) => {
    return (
        <>
            <div className={about.About}>
                <img src={bg} alt="banner" />
                <div className={about.AboutContainer}>
                    <h1 className={about.title}>{title}</h1>
                </div>
            </div>
        </>
    )
}