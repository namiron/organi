/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import home from './../../Home/Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../../redux/ProductsSlice'
import stars from './../../../img/icons/Star.svg'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes/Routes';



export const OurProducts = () => {

    const dispatch = useDispatch()

    const { list, status, error } = useSelector((state) => state.products)
    const listSlice = list.slice(0, 6)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    if (status === 'loading') {
        return <h2 className="loading">Loading...</h2>

    } else {
        return (
            <>
                {
                    listSlice.map(({ name, price, image, id, category, oldPrice }) => (
                        <article key={id} className={home.productItem}>
                            <div className={home.productInner}>
                                <p className={home.productCategory}>{category}</p>
                            </div>

                            <div className={home.productContant}>
                                <div className={home.productImage}>
                                    <img src={image} alt="image" />
                                </div>
                                <div className={home.productInfo}>
                                    <p className={home.productName}>{name}</p>
                                    <div className={home.productPrices}>
                                        <p className={home.productOldPrice}>$ {oldPrice} USD</p>
                                        <p className={home.productPrice}>$ {price} USD</p>
                                        <div className={home.productStars}>
                                            <img src={stars} alt="stars" />
                                        </div>

                                    </div>
                                </div>
                                <div className={home.btnBlock}>
                                    <NavLink className={home.shopBodyAddToCart} to={`/shop/${id}`}>Show More</NavLink>
                                    <button className={home.shopBodyAddToCart}>Add to Cart</button>
                                </div>
                            </div>

                        </article>

                    ))
                }
            </>
        )
    }
}


export const OfferProducts = () => {

    //--------------------------------------
    const dispatch = useDispatch()
    const { list, status, error } = useSelector((state) => state.products)
    const listOfferSlice = list.slice(0, 3)

    //-----------------------
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    //--------------------------------------
    if (status === 'loading') {
        return <h2 className="loading">Loading...</h2>

    } else {
        return (
            <>
                {
                    listOfferSlice.map((item) => (
                        <article key={item.id} className={home.productItem}>
                            <div className={home.productInner}>
                                <p className={home.productCategory}>{item.category}</p>
                            </div>

                            <div className={home.productContant}>
                                <div className={home.productImage}>
                                    <img src={item.image} alt="image" />
                                </div>
                                <div className={home.productInfo}>
                                    <p className={home.productName}>{item.name}</p>
                                    <div className={home.productPrices}>
                                        <p className={home.productOldPrice}>$ {item.oldPrice} USD</p>
                                        <p className={home.productPrice}>$ {item.price} USD</p>
                                        <div className={home.productStars}>
                                            <img src={stars} alt="stars" />
                                        </div>

                                    </div>
                                </div>
                                <div className={home.btnBlock}>
                                    <NavLink className={home.shopBodyAddToCart} to={`/shop/${item.id}`}>Show More</NavLink>
                                    <button className={home.shopBodyAddToCart}>Add to Cart</button>
                                </div>
                            </div>

                        </article>

                    ))
                }
            </>
        )
    }
}


export const ShopProducts = () => {

    //--------------------------------------
    const dispatch = useDispatch()
    const { list, status, error } = useSelector((state) => state.products)
    const listShopSlice = list.slice(0, 4)
    //-----------------------
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    //--------------------------------------
    if (status === 'loading') {
        return <h2 className="loading">Loading...</h2>

    } else {
        return (
            <>
                <div className={home.productList}>
                    {
                        listShopSlice.map((item) => (
                            <article key={item.id} className={home.productItem}>
                                <div className={home.productInner}>
                                    <p className={home.productCategory}>{item.category}</p>
                                </div>

                                <div className={home.productContant}>
                                    <div className={home.productImage}>
                                        <img src={item.image} alt="image" />
                                    </div>
                                    <div className={home.productInfo}>
                                        <p className={home.productName}>{item.name}</p>
                                        <div className={home.productPrices}>
                                            <p className={home.productOldPrice}>$ {item.oldPrice} USD</p>
                                            <p className={home.productPrice}>$ {item.price} USD</p>
                                            <div className={home.productStars}>
                                                <img src={stars} alt="stars" />
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink className={home.shopBodyAddToCart} to={`/shop/${item.id}`}>Show More</NavLink>
                                    <button className={home.shopBodyAddToCart}>Add to Cart</button>
                                </div>
                            </article>
                        ))
                    }
                </div>
            </>
        )
    }
}