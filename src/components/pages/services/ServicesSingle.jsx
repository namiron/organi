
import React from 'react'
import { FirstPage } from '../../common/Commons';
import bannerServices from './../../../img/bg-first-page/BannerServices.jpg'
import Subscribe from '../subscribe/Subscribe';
import { CategoriesItem, CategoriesItemFlexEnd } from '../../Home/Categories';
import milk from './../../../img/icons/Milk_Bottle.svg'
import organickStore from './../../../img/icons/Online_Store.svg'
import dilivery from '../../../img/icons/Delivery.svg'
import naturalFood from './../../../img/icons/Natural_Food.svg'
import vegetable from './../../../img/icons/Vegetables_Bag.svg'
import radish from './../../../img/icons/Radish.svg'
import nats from './../../../img/bg-first-page/nats.png'
import { ButtonTransparent } from '../../common/Buttons';
import service from './Services.module.scss'
const Services = () => {
    return (
        <>
            {/* -----------------------------------------Banner */}
            <FirstPage bg={bannerServices} title={'Services Single'} />
            {/* -----------------------------------------Banner */}


            {/* --------------------------------------ServicesBoard */}

            <div className={service.board}>
                <div className={service.boardContainer}>
                    <div className={service.boardHeading}>
                        <h3 className={service.boardSubTitle}>We Are The Best</h3>
                        <h2 className={service.boardTitle}>The Way Organic Magic Happens</h2>
                    </div>
                    <div className={service.boardContent}>
                        <div className={service.boardInner}>
                            <CategoriesItemFlexEnd imageCategory={milk}
                                titleCategory={'Dairy Products'}
                                textCategory={'In our listing, we have several collections of organic products. This is the place where you need to choose the product.'} />
                            <CategoriesItemFlexEnd imageCategory={organickStore}
                                titleCategory={'Store Services'}
                                textCategory={'Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.'} />
                            <CategoriesItemFlexEnd imageCategory={dilivery}
                                titleCategory={'Delivery Services'}
                                textCategory={'If you are not comfortable going to the nearby market place we also will deliver your product to your doorstep.'} />
                        </div>
                        <div className={service.boardImage}>
                            <img src={nats} alt="photo" />
                        </div>
                        <div className={service.boardHolder}>
                            <CategoriesItem imageCategory={naturalFood}
                                titleCategory={'Agricultural Services'}
                                textCategory={'They play a vital role in our success. Each and everyone is most important to us and also for our success.'} />
                            <CategoriesItem imageCategory={vegetable}
                                titleCategory={'Organic Products'}
                                textCategory={'The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.'} />
                            <CategoriesItem imageCategory={radish}
                                titleCategory={'Fresh Vegetables'}
                                textCategory={'Since there is no use of any chemicals and harmful breeds you will end up with fresh and organic vegetables.'} />
                        </div>
                    </div>
                    <div className={service.boardHolderBtn}>
                        <ButtonTransparent btnText={'Explore More'} />
                    </div>
                </div>
            </div>

            {/* --------------------------------------ServicesBoard */}



            {/* ---------------------------------------Subscribe */}
            <Subscribe />
            {/* ---------------------------------------Subscribe */}

        </>

    )
}
export default Services;