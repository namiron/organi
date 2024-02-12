import React, { useEffect } from 'react';
import Subscribe from '../pages/subscribe/Subscribe';
import { FirstPage } from '../common/Commons';
import BannerSecond from './../../img/bg-first-page/BannerSecond.png';
import { Back } from '../common/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, getProducts } from '../../redux/ProductsSlice';
import home from './../Home/Home.module.scss';
import { NavLink } from 'react-router-dom';
import stars from './../../img/icons/Star.svg';

const Shop = () => {
    const dispatch = useDispatch();
    const { list, status, error } = useSelector((state) => state.products);
    const listShopSlice = list.slice(0, 12);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addItemToCart(product));
    };

    return (
        <>
            {/* -------------------------------------------FirstPage */}
            <FirstPage bg={BannerSecond} title={'Shop'} />
            {/* -------------------------------------------FirstPage */}

            {/* ----------------------------------------------------Products */}
            <div style={{ padding: '90px 0px', background: '#F9F8F8' }}>
                <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
                    {/* -----------------------------------Back */}
                    <Back btnHome={'Home'} btnBack={'Back'} />
                    {/* -----------------------------------Back */}
                </div>

                <div className={home.productList}>
                    {listShopSlice.map(({ name, price, image, id, category, oldPrice }) => (
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
                                    <NavLink className={home.shopBodyAddToCart} to={`/shop/${id}`}>
                                        Show More
                                    </NavLink>
                                    <button onClick={() => handleAddToCart({ id, name, price, image, category, oldPrice })} className={home.shopBodyAddToCart}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            {/* ----------------------------------------------------Products */}

            {/* -------------------------------------------Subscribe */}
            <Subscribe />
            {/* -------------------------------------------Subscribe */}
        </>
    );
};

export default Shop;
