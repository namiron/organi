import React, { useState } from 'react'
import logo from './../../img/icons/Logo.svg'
import searchSvg from './../../img/icons/search-img.svg'
import cartImg from './../../img/icons/cart-image.svg'
import { NavLink } from 'react-router-dom'
import arrow from './../../img/icons/arrow-menu-down.svg'
import header from './Header.scss'
import burger from '../../img/icons/bars-solid.svg'
import { useSelector } from 'react-redux'

const Header = () => {
    //-----------------------------
    const [isOpen, setOpen] = useState(false)

    const { cart } = useSelector((state) => state.products);

    const handleOpen = () => {
        setOpen(!isOpen)
    }
    //-----------------------------

    return (
        <header className="header">
            <div className="container">
                <NavLink to={'home'} className="logo">
                    <img src={logo} alt="logo-type" />
                </NavLink>
                <div className="menu">

                    <nav className='menuBody'>
                        <ul className={`menuList ${isOpen ? '' : 'open'}`}>
                            <li>
                                <NavLink to={'home'} className='menuLink'> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'aboutus'} className='menuLink'> About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={'shop'} className='menuLink'> Shop</NavLink>
                            </li>
                            <li>
                                <NavLink className='menuLink'> Pages <img src={arrow} alt="arrow" /></NavLink>
                                <ul className='menuSabList'>
                                    <li>
                                        <NavLink to={'services'} className='menuSubLink'>Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'services_single'} className='menuSubLink'>Service Single</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'our_team'} className='menuSubLink'>Our team</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to={'contact_us'} className='menuLink'>Contact Us</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="cart">
                    <div className="cartBlock">
                        <NavLink to={'cart'} className="cartBody">
                            <img src={cartImg} alt="cart" />
                        </NavLink>
                        <div className="cartText">Cart {cart.length}</div>
                    </div>
                    <div className="menuIcon">
                        <button onClick={handleOpen} className='burger'><span></span></button>
                    </div>


                </div>

            </div>

        </header>
    );
}

export default Header;