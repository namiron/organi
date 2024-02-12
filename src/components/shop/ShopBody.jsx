import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { Back } from '../common/Buttons';
import { FirstPage } from '../common/Commons';
import BannerProduct from './../../img/bg-first-page/BannerProduct.jpg'
import stars from './../../img/icons/Star.svg'
import home from './../Home/Home.module.scss'
import './Shop.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, getProducts } from '../../redux/ProductsSlice';
import Subscribe from '../pages/subscribe/Subscribe';

const ShopBody = () => {
    const { id } = useParams()

    const [productDetails, setProductDetails] = useState(null)
    const { list: productList, status, error } = useSelector((state) => state.products)
    const topFourProducts = productList.slice(0, 3)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch(`https://65a10699600f49256fb0bd21.mockapi.io/healthier/v1/food/${id}`)
            .then(response => response.json())
            .then(data => setProductDetails(data))
            .catch(error => console.error('Error fetching product details:', error))

    }, [id])

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const handleAddToCart = (product) => {
        if (product) {
            dispatch(addItemToCart(product))
        }
    }

    return (
        <>
            {
                productDetails && (
                    <>
                        <FirstPage bg={BannerProduct} title={`${productDetails.name}`} />
                        <Back btnHome={'Home'} btnBack={'Back'} />
                        <div className="shopBody">
                            <div className="shopBodyContainer">
                                <div className="shopBodyItem">
                                    <aside className="shopBodyImageContainer">
                                        <div className="shopBodyCategories">
                                            <p>{productDetails.category}</p>
                                        </div>
                                        <div className="shopBodyImage">
                                            <img src={productDetails.image} alt="img" />
                                        </div>
                                    </aside>
                                    <aside className="shopBodyContantContainer">
                                        <div className="shopBodyContantHeading">
                                            <h2 className="shopBodyContantTitle">{productDetails.name}</h2>
                                            <div className="shopBodyStar">
                                                <img src={stars} alt="stars" />
                                            </div>
                                            <div className="shopBodyContantPrices">
                                                <p className="shopBodyContantOldPrice">${productDetails.oldPrice}.00</p>
                                                <p className="shopBodyContantPrice">${productDetails.price}.00</p>
                                            </div>
                                            <p className="shopBodyContantText">{productDetails.text}</p>
                                        </div>
                                        <div className="shopBodyButtons">
                                            <button onClick={() => handleAddToCart(productDetails)} className={home.shopBodyAddToCart}>Add to Cart</button>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                        </div>

                        <div className={home.productShop}>
                            {
                                topFourProducts.map((product) => (
                                    <article key={product.id} className={home.productItem}>
                                        <div className={home.productInner}>
                                            <p className={home.productCategory}>{product.category}</p>
                                        </div>
                                        <div className={home.productContant}>
                                            <div className={home.productImage}>
                                                <img src={product.image} alt="image" />
                                            </div>
                                            <div className={home.productInfo}>
                                                <p className={home.productName}>{product.name}</p>
                                                <div className={home.productPrices}>
                                                    <p className={home.productOldPrice}>$ {product.oldPrice} USD</p>
                                                    <p className={home.productPrice}>$ {product.price} USD</p>
                                                    <div className={home.productStars}>
                                                        <img src={stars} alt="stars" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={home.btnBlock}>
                                                <NavLink className={home.shopBodyAddToCart} to={`/shop/${product.id}`}>Show More</NavLink>
                                                <button onClick={() => handleAddToCart(product)} className={home.shopBodyAddToCart}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </article>
                                ))
                            }
                        </div>

                        <Subscribe />
                    </>
                )
            }
        </>
    )
}

export default ShopBody;
