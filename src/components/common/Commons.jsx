import React from 'react'
import home from './../Home/Home.module.scss'
import about from './../aboutUs/AboutUs.module.scss'
import facebook from './../../img/icons/facebook.svg'
import insta from './../../img/icons/Insta.svg'
import x from './../../img/icons/x-twitter.svg'


export const InnerTitleText = ({ frendlyInnerTitle, frendlyInnerText }) => {
    return (
        <>
            <article className={home.frendlyInnerContant}>
                <h3 className={home.frendlyInnerTitle}>{frendlyInnerTitle}</h3>
                <p className={home.frendlyInnerText}>{frendlyInnerText}</p>
            </article>
        </>
    )
}

export const ConstructionAdvantages = ({ title, image, text }) => {

    return (
        <>
            <article className={about.itemAdvantages}>
                <div className={about.itemImage}>
                    <img src={image} alt="icon" />
                </div>
                <div className={about.itemHolder}>
                    <h2 className={about.itemTitle}>{title}</h2>
                    <p className={about.itemText}>{text}</p>
                </div>
            </article>
        </>
    )
}


export const ConstructionExperts = ({ title, image, text }) => {

    return (
        <>
            <article className={about.expertsItem}>
                <div className={about.expertsImage}>
                    <img src={image} alt="icon" />
                </div>
                <div className={about.holderExperts}>
                    <div className={about.expertsInfo}>
                        <h2 className={about.expertsName}>{title}</h2>
                        <p className={about.expertsPosition}>{text}</p>
                    </div>
                    <div className={about.expertsSocial}>
                        <a href="#"><img src={insta} alt="insta" /></a>
                        <a href="#"><img src={facebook} alt="facebook" /></a>
                        <a href="#"> <img src={x} alt="x" /></a>
                    </div>
                </div>
            </article>
        </>
    )
}

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