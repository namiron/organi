import React, { useState } from 'react'
import home from './Home.module.scss'


export const CategoriesBelive = ({ foodsOrganic, QualityStandards }) => {

    return (
        <>
            <div className={home.categoriesAboutUs}>
                <article className={home.categoriesAboutUsItem}>
                    <div className={home.categoriesAboutUsImage}>
                        <img src={foodsOrganic} alt="foodsOrganic" />
                    </div>
                    <div className={home.holder}>
                        <h3 className={home.categoriesAboutUsTitle}>Organic Foods Only</h3>
                        <p className={home.categoriesAboutUsText}>Simply dummy text of the printing
                            and typesetting industry.</p>
                    </div>
                </article>
                <article className={home.categoriesAboutUsItem}>
                    <div className={home.categoriesAboutUsImage}>
                        <img src={QualityStandards} alt="QualityStandards" />
                    </div>
                    <div className={home.holder}>
                        <h3 className={home.categoriesAboutUsTitle}>Quality Standards</h3>
                        <p className={home.categoriesAboutUsText}>Simply dummy text of the printing
                            and typesetting industry.</p>
                    </div>
                </article>
            </div>
        </>
    )
}
export const ContactBelives = ({ foodsOrganic, QualityStandards, categoriesAboutUsTitle, categoriesAboutUsText, categoriesAboutUsTitleSecond, categoriesAboutUsTextSecond }) => {

    return (
        <>
            <div className={home.categoriesAboutUs}>
                <article className={home.categoriesAboutUsItem}>
                    <div className={home.categoriesAboutUsImage}>
                        <img src={foodsOrganic} alt="foodsOrganic" />
                    </div>
                    <div className={home.holder}>
                        <h3 className={home.categoriesAboutUsTitle}>{categoriesAboutUsTitle}</h3>
                        <p className={home.categoriesAboutUsText}>{categoriesAboutUsText}</p>
                    </div>
                </article>
                <article className={home.categoriesAboutUsItem}>
                    <div className={home.categoriesAboutUsImage}>
                        <img src={QualityStandards} alt="QualityStandards" />
                    </div>
                    <div className={home.holder}>
                        <h3 className={home.categoriesAboutUsTitle}>{categoriesAboutUsTitleSecond}</h3>
                        <p className={home.categoriesAboutUsText}>{categoriesAboutUsTextSecond}</p>
                    </div>
                </article>
            </div>
        </>
    )
}
export const ContactUsBelives = ({ foodsOrganic, categoriesAboutUsTitle, categoriesAboutUsText }) => {
    return (
        <>
            <div className={home.categoriesAboutUs}>
                <article className={home.categoriesAboutUsItem}>
                    <div className={home.categoriesAboutUsImage}>
                        <img src={foodsOrganic} alt="foodsOrganic" />
                    </div>
                    <div className={home.holder}>
                        <h3 className={home.categoriesAboutUsTitle}>{categoriesAboutUsTitle}</h3>
                        <p className={home.categoriesAboutUsText}>{categoriesAboutUsText}</p>
                    </div>
                </article>
            </div>
        </>
    )
}

export const CategoriesAbout = ({ foodsOrganic, QualityStandards, }) => {
    return (
        <>
            <div className={home.aboutUsCategories}>
                <article className={home.categoriesAboutUsItem}>
                    <div className={home.categoriesAboutUsImage}>
                        <img src={foodsOrganic} alt="foodsOrganic" />
                    </div>
                    <div className={home.holder}>
                        <h3 className={home.categoriesAboutUsTitle}>Modern Agriculture Equipment</h3>
                    </div>
                </article>
                <article className={home.categoriesAboutUsItem}>
                    <div className={home.categoriesAboutUsImage}>
                        <img src={QualityStandards} alt="QualityStandards" />
                    </div>
                    <div className={home.holder}>
                        <h3 className={home.categoriesAboutUsTitle}>No Chemicals & Hormones Are Used</h3>
                    </div>
                </article>
            </div>
        </>
    )
}

export const CategoriesItem = ({ imageCategory, textCategory, titleCategory }) => {
    return (
        <article className={home.categoriesItem}>
            <div className={home.categoriesItemImage}>
                <img src={imageCategory} alt="foodsOrganic" />
            </div>
            <div className={home.categoriesItemHolder}>
                <h3 className={home.categoriesItemTitle}>{titleCategory}</h3>
                <p className={home.categoriesItemText}>{textCategory}</p>
            </div>
        </article>
    )
}

export const CategoriesItemFlexEnd = ({ imageCategory, textCategory, titleCategory }) => {
    return (
        <article className={home.categoriesItemFlexEnd}>
            <div className={home.categoriesItemImage}>
                <img src={imageCategory} alt="foodsOrganic" />
            </div>
            <div className={home.categoriesHolderFlexEnd}>
                <h3 className={home.categoriesItemTitle}>{titleCategory}</h3>
                <p className={home.categoriesItemText}>{textCategory}</p>
            </div>
        </article>
    )
}