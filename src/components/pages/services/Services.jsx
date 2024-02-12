import React from 'react'
import { FirstPage } from '../../common/Commons';
import SingleStandart from './../../../img/bg-first-page/SingleStandart.png'
import Subscribe from '../subscribe/Subscribe';
import serviseBg from './../../../img/bg-first-page/ServiseBg.jpg'
import service from './Services.module.scss'
import sprouts from './../../../img/bg-first-page/sprouts.jpg'
import hands from './../../../img/bg-first-page/hands.jpg'
import { Back } from '../../common/Buttons';

const Single = () => {
    return (
        <>
            {/* ------------------------------Services Single */}
            <FirstPage bg={SingleStandart} title={'Services'} />
            {/* ------------------------------Services Single */}
            {/* -----------------------------------Back */}
            <Back btnHome={'Home'} btnBack={'Back'} />
            {/* -----------------------------------Back */}
            {/* ------------------------------------------Quality */}
            <div className={service.quality}>
                <div className={service.qualityContainer}>
                    <div className={service.qualityimage}>
                        <img src={serviseBg} alt="bg" />
                    </div>
                    <div className={service.qualityContent}>
                        <QualityDescr title={'Organic Store Services'}
                            text={`In our listing, we have several collections of organic products.
                         This is the place where you need to choose the product you want.
                          The Product that you ordered will be verified that we have or not
                           if have we will start to move on with the next step or else we will ask our farmers for the supply. 
                          Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy
                           the product you ordered.`}
                            subText={`They believe us and we are successful in fulfilling their beliefs.
                            They play a vital role in our success. Each and everyone is most important to us and also for our success.
                            If you are not comfortable going to the nearby market place we also will deliver your
                             product to your doorstep.`} />

                        <div className={service.qualityHolder}>
                            <div className={service.qualityInner}>
                                <QualityExample image={hands}
                                    title={'Why Organic'}
                                    text={`In our listing, we have several collections of organic products.
                                     This is the place where you need to choose the product you want.`}
                                />
                            </div>
                            <div className={service.qualityInnerReverce}>
                                <QualityExample image={sprouts}
                                    title={'Fresh Products'}
                                    text={`Once your product is packed it will be delivered to your 
                                    nearby locality you can directly visit the to buy the product you ordered.`}
                                />
                            </div>
                        </div>
                        <QualityDescr title={'We Farm At Your Land'}
                            text={`We make our products to reach a lot with marketing techniques.
                             If you are not comfortable going to the nearby market place we also will deliver
                              your product to your doorstep. 
                             The Product that you ordered will be verified that we have or not 
                             if have we will start to move on will ask our farmers for the supply.`}
                        />
                        <div className={service.qualityRow}>
                            <Advantages number={'01'} text={'Best Quality Products'} />

                            <Advantages number={'02'} text={'Money Back Guarantee'} />
                        </div>
                    </div>

                </div>
            </div>

            {/* ------------------------------------------Quality */}


            {/* ------------------------------Subscribe */}
            <Subscribe />
            {/* ------------------------------Subscribe */}
        </>

    )
}
export default Single;




const QualityDescr = ({ title, text, subText }) => {
    return (
        <>
            <div className={service.descriptionHolder}>
                <h2 className={service.descriptionTitle}>{title}</h2>
                <p className={service.descriptionText}>{text}</p>
                <p className={service.descriptionSubText}>{subText}</p>
            </div>

        </>
    )
}

const QualityExample = ({ image, title, text }) => {
    return (
        <>
            <div className={service.qualityExampleImage}>
                <img src={image} alt="img" />
            </div>
            <div className={service.qualityExampleСontext}>
                <h3 className={service.qualityExampleTitle}>{title}</h3>
                <p className={service.qualityExampleText}>{text}</p>
            </div>

        </>
    )
}

const Advantages = ({ number, text }) => {
    return (
        <>
            <div className={service.advantagesContent}>
                <div className={service.advantagesInnerNumber}>
                    <p className={service.advantagesNumber}>{number}</p>
                </div>
                <p className={service.advantagesText}>{text}</p>
            </div>

        </>
    )
}