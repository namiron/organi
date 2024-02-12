import React from 'react'
import about from './AboutUs.module.scss'
import home from './../Home/Home.module.scss'
import banner from './../../img/bg-about/Banner.png'
import Subscribe from '../pages/subscribe/Subscribe';
import { BeliveAboutUs } from '../Home/Belive';
import tractor from './../../img/icons/tractor.svg'
import fabric from './../../img/icons/fabric.svg'
import secondbg from './../../img/bg-about/second-block.png'
import greenStore from './../../img/bg-about/Photo.jpg'
import { ConstructionAdvantages, ConstructionExperts } from '../common/Commons';
import tractorsecond from './../../img/icons/tractor-secondblock.svg'
import natural from './../../img/icons/Natural-Food.svg'
import time from './../../img/icons/time.svg'
import cart from './../../img/icons/craditcart.svg'
import farmer from './../../img/piple/first-man.jpg'
import maketing from './../../img/piple/woman-first.jpg'
import financiar from './../../img/piple/woman-second.jpg'
import { FirstPage } from '../common/Commons';
import { Back } from '../common/Buttons';

const AboutUs = () => {

    return (
        <>
            {/* ------------------------------------------------------About */}
            <FirstPage bg={banner} title={'About Us'} />
            {/* ------------------------------------------------------About */}

            {/* -----------------------------------Back */}
            <Back btnHome={'Home'} btnBack={'Back'} />
            {/* -----------------------------------Back */}

            {/* ------------------------------------------------------purity */}
            <div className={home.purity}>
                <div className={home.purityContainer}>
                    <BeliveAboutUs believeImage={secondbg} subTitleAboutUs={'Only Pure And Organic'}
                        titleAboutUs={'Fresh From Farm Return To Purity'}
                        textAboutUs={`Our rich experience helps us in ensuring that the products brought to you are 100%
          chemical-free. To live a better, healthier,
          and wholesome life by providing them with 100% certified, authentic organic food.
         Welcome to the world of nature and organic. Here you can discover the bounty of nature.
          We have grown on the principles of health and care. We aim to give our customers a healthy 
          chemical-free meal for perfect nutrition.`}
                        foodsOrganic={tractor}
                        QualityStandards={fabric}
                    />
                </div>
            </div>
            {/* ------------------------------------------------------purity */}



            {/* ----------------------------------------------------traders */}
            <div className={about.organickStore}>
                <div className={about.organickStoreContainer}>

                    <div className={about.organickStoreContant}>
                        <div className={about.organickStoreContantItem}>
                            <div className={about.organickStoreHeading}>
                                <h3 className={about.organickStoreSubTitle}>Why Organick Store?</h3>
                                <h2 className={about.organickStoreTitle}>We Cultivating The Chemical  & Fertilizer Free Products</h2>
                            </div>
                            <article className={about.organickStoreContanInner}>
                                <div className={about.Circle}></div>
                                <p className={about.text}>100% Natural Product</p>
                            </article>
                            <p className={about.subText}>In our listing, we have several collections of organic products and
                                place where you need to choose the product you want.</p>
                            <article className={about.organickStoreContanInner}>
                                <div className={about.Circle}></div>
                                <p className={about.text}>Same Day Delivery</p>
                            </article>
                            <p className={about.subText}>If you are not comfortable going to the nearby market place we
                                also will deliver your product to your doorstep.</p>
                        </div>
                        <div className={about.organickStoreImage}>
                            <img src={greenStore} alt="greenStore" />
                        </div>
                    </div>

                </div>
            </div>

            <div className={about.advantages}>
                <div className={about.advantagesContainer}>
                    <div className={about.advantagesList}>
                        <ConstructionAdvantages image={tractorsecond} title={'Return Policy'}
                            text={`If the product having any issues you can return the product.`} />
                        <ConstructionAdvantages image={natural} title={'100% Fresh'}
                            text={`Fully organic and fresh products are delivered at door step.`} />
                        <ConstructionAdvantages image={time} title={'Support 24/7'}
                            text={`Our support team is available for take care the customers.`} />
                        <ConstructionAdvantages image={cart} title={'Secured Payment'}
                            text={`Fully secured payment methods are used for buying product.`} />
                    </div>
                </div>

            </div>

            {/* ----------------------------------------------------traders */}


            {/* ---------------------------------------------------------Experts */}

            <div className={about.experts}>
                <div className={about.expertsContainer}>
                    <div className={about.expertsHeading}>
                        <h3 className={about.expertsSubTitle}>The Team</h3>
                        <h2 className={about.expertsTitle}>Our Organic Experts</h2>
                        <p className={about.expertsText}>We have grown on the principles of health, ecology, and care. We aim to give our
                            customers a healthy chemical-free meal for perfect nutrition.</p>
                    </div>
                    <div className={about.expertsContant}>
                        <ConstructionExperts image={farmer} text={'Farmer'} title={'Shane Watson'} />
                        <ConstructionExperts image={maketing} text={'Maketing'} title={'Maria Thomas'} />
                        <ConstructionExperts image={financiar} text={'Financiar'} title={'Angeline flora'} />

                    </div>
                </div>
            </div>


            {/* ---------------------------------------------------------Experts */}


            {/* ------------------------------------------------------Subscribe */}
            <Subscribe />
            {/* ------------------------------------------------------Subscribe */}


        </>
    )
}
export default AboutUs;