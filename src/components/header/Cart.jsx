import React from 'react'
import { NavLink } from 'react-router-dom'


const Cart = ({ data, image, btnfunction }) => {
    return (
        <div className="cart">
            <div className="cartBlock">
                <NavLink to={'cart'} className="cartBody">
                    <img src={image} alt="cart" />
                </NavLink>
                <div className="cartText">Cart {data.length}</div>
            </div>
            <div className="menuIcon">
                <button onClick={btnfunction} className='burger'><span></span></button>
            </div>
        </div>
    )
}

export default Cart