import React from 'react'
import { NavLink } from 'react-router-dom'
import h from './header.module.scss'


const Cart = ({ data, image, btnfunction }) => {
    return (
        <div className={h.cart}>
            <div className={h.cartBlock}>
                <NavLink to={'cart'} className={h.cartBody}>
                    <img src={image} alt="cart" />
                </NavLink>
                <div className={h.cartText}>Cart {data.length}</div>
            </div>
            <div className={h.burger}>
                <button onClick={btnfunction} className={h.menuIcon}><span></span></button>
            </div>
        </div>
    )
}

export default Cart