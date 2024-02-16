import React from 'react'
import about from './../../img/thirt_block/fruts.png'
import vector from './../../img/icons/Vector.svg'
import home from './Home.module.scss'
import naturel from './../../img/second_block/image_pink.jpg'
import foodsOrganic from './../../img/icons/OrganicFoodsOnly.svg'
import QualityStandards from './../../img/icons/QualityStandards.svg'
import offer from './../../img/second_block/image_white.jpg'
import Advertising from './Advertising'
import './../Flickity.scss'
import bg from './../../img/bg-about/bgslider.png'
import firstBg from './../../img/bg-first-page/Group.png'
import stars from './../../img/icons/Star.svg'
import orgaincStore from './../../img/bg-first-page/OrganicStore.jpg'
import Flickity from 'react-flickity-component';
import { slider } from '../../redux/slider'
import Numbers from './Numbers'
import { Belive } from './Belive'
import { InnerTitleText } from '../common/Commons'
import orange from './../../img/bg-first-page/orange.jpg'
import greenfoot from './../../img/bg-first-page/greenfoot.jpg'
import shokolate from './../../img/bg-first-page/shokolate.jpg'
import { Kinds } from '../common/Kinds'
import Subscribe from '../pages/subscribe/Subscribe'
import { OfferProducts, OurProducts } from '../pages/products/Products'
import { ButtonStyle, ButtonTransparent } from '../common/Buttons'
import { NavLink } from 'react-router-dom'

const flickityOptions = {
    initialIndex: 2
}


const Home = () => {
    return (
        <>
            <section className={home.home}>
                {/* --------------------------------------------------healthier */}
                <div className={home.healthier}>
                    <div className={home.imageHealthier}>
                        <img src={firstBg} alt="bg" />
                    </div>
                    <div className={home.container}>
                        <div className={home.content}>
                            <h3 className={home.healthierSubTitle}>
                                100% Natural Food
                            </h3>
                            <h1 className={home.healthierTitle}>
                                Choose the best
                                healthier way
                                of life
                            </h1>
                            <NavLink to={'/shop'} className={home.buttonStyle}>
                                <p className={home.btnText}>Explore Now</p>
                                <div className={home.btnImageHolder}>
                                    <img src={vector} alt="vector-icons" />
                                </div>
                            </NavLink>

                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------healthier */}

                {/* --------------------------------------------------advertising */}
                <div className={home.advertising}>
                    <div className={home.container}>
                        <div className={home.advertisingContent}>
                            <Advertising subTitle={'Natural!!'} color={'#fff'}
                                title={'Get Garden Fresh Fruits'} naturel={naturel} />
                            <Advertising subTitle={'Offer!!'} color={'#274C5B'}
                                title={'Get 10% off on Vegetables'} naturel={offer} />
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------advertising */}


                {/* --------------------------------------------------believe */}

                <div className={home.believe}>
                    <div className={home.believeContainer}>

                        <Belive believeImage={about} subTitleAboutUs={'About Us'}
                            titleAboutUs={'We Believe in Working Accredited Farmers'}
                            textAboutUs={`Simply dummy text of the
         printing and typesetting industry. Had ceased to 
    been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley.`}
                            foodsOrganic={foodsOrganic}
                            QualityStandards={QualityStandards}
                        />
                    </div>
                </div>
                {/* --------------------------------------------------believe */}

                {/* --------------------------------------------------------PRODUCTS */}

                <div className={home.products}>
                    <div className={home.productsContainer}>
                        <div className={home.productsHeading}>
                            <h3 className={home.productsSubTitle}>Organic</h3>
                            <h2 className={home.productsTitle}>Our Products</h2>
                        </div>
                        <div className={home.productsContant}>
                            <OurProducts />
                        </div>


                    </div>

                </div>

                {/* --------------------------------------------------------PRODUCTS */}



                {/* -------------------------------------------------------slider */}
                <div className={home.slider}>
                    <div className={home.BgSlider}>
                        <img src={bg} alt="" />
                    </div>

                    <div className={home.sliderComponents}>
                        <div className={home.sliderContainer}>
                            <div className={home.titlesContainer}>
                                <h3 className={home.SubTitleSlider}>Testimonial</h3>
                                <h2 className={home.sliderTitle}>What Our Customer Saying?</h2>
                            </div>
                            <Flickity
                                className={home.Slider}
                                elementType='div'
                                disableImagesLoaded={false}
                                options={flickityOptions}
                                reloadOnUpdate
                                static
                            >
                                {
                                    slider['id'].map((index) => {
                                        return (
                                            <div key={index} className={home.slide}>
                                                <>
                                                    <div className={home.imageSlide}>
                                                        <img src={slider['image'][index - 1]} alt="man" />
                                                    </div>
                                                    <div className={home.star}>
                                                        <img src={stars} alt="stars" />
                                                    </div>
                                                    <h2 className={home.sliderText}>
                                                        {slider['text'][index - 1]}
                                                    </h2>
                                                    <div className={home.positionBlock}>
                                                        <p className={home.namePositionBlock}>{slider['names'][index - 1]}</p>
                                                        <p className={home.position}>{slider['position'][index - 1]}</p>
                                                    </div>
                                                </>
                                            </div>
                                        )
                                    })}
                            </Flickity>
                            {/* ------------------------------------------------------numbers */}
                            <div className={home.numbers}>
                                <div className={home.containerNumbers}>
                                    <Numbers number={'100%'} organic={'Organic'} />
                                    <Numbers number={'285'} organic={'Active Product'} />
                                    <Numbers number={'350+'} organic={'Organic Orchads'} />
                                    <Numbers number={'25+'} organic={'Years of Farming'} />
                                </div>
                            </div>
                            {/* ------------------------------------------------------numbers */}

                        </div>

                    </div>
                </div>
                {/* -------------------------------------------------------slider */}


                {/* --------------------------------------------------OfferProducts */}

                <div className={home.OfferProducts}>
                    <div className={home.OfferProductsContainer}>
                        <div className={home.OfferProductsHeding}>
                            <div className={home.OfferProductsInner}>
                                <div className={home.OfferProductsHedingSubTitle}>Offer Products</div>
                                <div className={home.OfferProductsHedingTitle}>We Offer Organic For You</div>
                            </div>
                            <ButtonStyle btnText={'View All Products'} />
                        </div>
                        <div className={home.OfferProductsContant}>
                            <OfferProducts />
                        </div>
                    </div>
                </div>


                {/* --------------------------------------------------OfferProducts */}


                {/* ---------------------------------------------------friendly */}

                <div className={home.friendly}>
                    <div className={home.friendlyImage}>
                        <img src={orgaincStore} alt="orgaincStore" />
                    </div>
                    <div className={home.friendlyContainer}>
                        <article className={home.friendlyHeaders}>
                            <h3 className={home.frendlySubTitle}>Eco Friendly</h3>
                            <h2 className={home.frendlyTitle}>Econis is a Friendly Organic Store</h2>
                        </article>
                        <div className={home.friendlyContant}>
                            <InnerTitleText
                                frendlyInnerTitle={'Choose Your Products'}
                                frendlyInnerText={`In our listing, we have several collections of organic products.
        This is the place where you need to choose the product you want.`}
                            />
                            <InnerTitleText
                                frendlyInnerTitle={'Farmers Will Produce It'}
                                frendlyInnerText={`The Product that you ordered will be verified that we have or 
        not if have we will start to move on with the next step.`}
                            />
                            <InnerTitleText
                                frendlyInnerTitle={'We Can Delivery Too'}
                                frendlyInnerText={`If you are not comfortable going to the nearby 
        market place we also will deliver your product to your doorstep.`}
                            />
                        </div>
                    </div>
                </div>
                {/* ---------------------------------------------------friendly */}

                {/* -----------------------------------------------------gallery */}

                <div className={home.footsKinds}>
                    <div className={home.footsKindsContainer}>
                        <Kinds bg={orange} foodKindsTitle={'Fruits'} />
                        <Kinds bg={greenfoot} foodKindsTitle={'Organic Food'} />
                        <Kinds bg={shokolate} foodKindsTitle={'Nuts Cookies'} />

                    </div>

                </div>

                {/* -----------------------------------------------------gallery */}

                {/* -----------------------------------------------------NEWS */}

                {/* -----------------------------------------------------NEWS */}

                {/* ------------------------------------------------------SUBSCRIBE */}
                <Subscribe />
                {/* ------------------------------------------------------SUBSCRIBE */}

            </section>
        </>
    )
}
export default Home;