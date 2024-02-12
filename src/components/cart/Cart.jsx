import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirstPage } from '../common/Commons';
import BannerContacts from './../../img/bg-first-page/BannerContacts.jpg'
import Subscribe from '../pages/subscribe/Subscribe';
import c from './Cart.module.scss'
import { addItemToCart, removeToCart } from '../../redux/ProductsSlice';
import { sumBy } from '../common/Constants';

const Cart = () => {
    //------------------------------------------------------
    const { cart } = useSelector((state) => state.products);

    const dispatch = useDispatch()

    const changeQuantity = (item, quantity) => {
        dispatch(addItemToCart({ ...item, quantity }))
    }


    const removeItemToCart = (id) => {
        dispatch(removeToCart({ id }))
    }
    //-----------------------------------------------------
    return (
        <>
            {/* -----------------------------FirstPage */}
            <FirstPage title={'Cart'} bg={BannerContacts} />
            {/* -----------------------------FirstPage */}

            <div className={c.cart}>
                <div className={c.cartContainer}>
                    {cart.length === 0 ? (
                        <p className={c.cartEmpty}>Cart is empty</p>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className={c.cartBodyHolder}>
                                <div className={c.cartBodyContainer}>
                                    <article className={c.cartBodyItem}>
                                        <div className={c.cartBodyImage}>
                                            <img src={item.image} alt="image" />
                                        </div>
                                        <div className={c.cartBodyContant}>
                                            <h2 className={c.cartBodyTitle}>{item.name}</h2>
                                            <p className={c.cartBodyPrice}>${item.price}.00</p>
                                        </div>
                                        <div className={c.cartNavigation}>
                                            <div className={c.cartQuantity}>
                                                <button type="submit" className={c.buttonMinus} onClick={() => changeQuantity(item, Math.max(1, item.quantity - 1))}><span>-</span></button>
                                                <span>{item.quantity}</span>
                                                <button type="submit" className={c.buttonPlus} onClick={() => changeQuantity(item, Math.max(1, item.quantity + 1))}><span>+</span></button>
                                            </div>
                                            <div className={c.removeBlock}>
                                                <button className={c.cartRemove} onClick={() => removeItemToCart(item.id)} >remove</button>
                                            </div>
                                        </div>

                                    </article>
                                </div>
                            </div>
                        ))
                    )}
                    <div className={c.action}>
                        <div className={c.total}>TOTAL PRICE: {""}
                            <span>{sumBy(cart.map((({ price, quantity }) => price * quantity)))}$</span>
                        </div>
                        <button type="submit" className={c.proceed}><span>Buy</span></button>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------Subscribe */}
            <Subscribe />
            {/* -------------------------------------------Subscribe */}
        </>
    );
};

export default Cart;
