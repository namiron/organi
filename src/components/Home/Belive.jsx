import React from 'react'
import home from './../Home/Home.module.scss'
import QualityStandards from './../../img/icons/QualityStandards.svg'
import vector from './../../img/icons/Vector.svg'
import { BtnBelieve } from '../common/Buttons'
import { CategoriesAbout, CategoriesBelive, ContactBelives } from './Categories'
import Social from './../social/Social'


export const Belive = ({ believeImage, subTitleAboutUs, titleAboutUs, textAboutUs, foodsOrganic, QualityStandards, }) => {
    return (
        <>
            <div className={home.believeImage}>
                <img src={believeImage} alt="about" />
            </div>
            <div className={home.believeContent}>
                <div className={home.believeInner}>
                    <h3 className={home.subTitleAboutUs}>{subTitleAboutUs}</h3>
                    <h2 className={home.titleAboutUs}>{titleAboutUs}</h2>
                    <p className={home.textAboutUs}>{textAboutUs}</p>
                </div>
                <CategoriesBelive foodsOrganic={foodsOrganic}
                    QualityStandards={QualityStandards}
                    categoriesAboutUsTitle={'Organic Foods Only'}
                    categoriesAboutUsText={`Simply dummy text of the printing
  and typesetting industry.`}
                    categoriesAboutUsTitleSecond={`Quality Standards`}
                    categoriesAboutUsTextSecond={`Simply dummy text of the printing 
  and typesetting industry.`}
                />
                <BtnBelieve btnText={'View More'} />
            </div>
        </>
    )

}
export const BeliveContacts = ({ believeImage, subTitleAboutUs, titleAboutUs, textAboutUs, foodsOrganic, QualityStandards, }) => {
    return (
        <>
            <div className={home.believeImage}>
                <img src={believeImage} alt="about" />
            </div>
            <div className={home.believeContent}>
                <div className={home.believeInner}>
                    <h3 className={home.subTitleAboutUs}>{subTitleAboutUs}</h3>
                    <h2 className={home.titleAboutUs}>{titleAboutUs}</h2>
                    <p className={home.textAboutUs}>{textAboutUs}</p>
                </div>
                <ContactBelives foodsOrganic={foodsOrganic}
                    QualityStandards={QualityStandards}
                    categoriesAboutUsTitle={'Massege'}
                    categoriesAboutUsText={`support@organic.com`}
                    categoriesAboutUsTitleSecond={`Contact Us`}
                    categoriesAboutUsTextSecond={`+01 123 456 789`}
                />
                <Social />
            </div>
        </>
    )

}



export const BeliveAboutUs = ({ believeImage, subTitleAboutUs, titleAboutUs, textAboutUs, foodsOrganic, QualityStandards, }) => {
    return (
        <>
            <div className={home.believeImage}>
                <img src={believeImage} alt="about" />
            </div>
            <div className={home.believeContent}>
                <div className={home.believeInner}>
                    <h3 className={home.subTitleAboutUs}>{subTitleAboutUs}</h3>
                    <h2 className={home.titleAboutUs}>{titleAboutUs}</h2>
                    <p className={home.textAboutUs}>{textAboutUs}</p>
                </div>
                <CategoriesAbout foodsOrganic={foodsOrganic}
                    QualityStandards={QualityStandards}
                    categoriesAboutUsTitle={'Organic Foods Only'}
                    categoriesAboutUsText={`Simply dummy text of the printing
  and typesetting industry.`}
                    categoriesAboutUsTitleSecond={`Quality Standards`}
                    categoriesAboutUsTextSecond={`Simply dummy text of the printing 
  and typesetting industry.`}
                />
                <BtnBelieve btnText={'View More'} />
            </div>
        </>
    )

}
