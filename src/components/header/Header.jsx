import React, { useState } from 'react'
import logo from './../../img/icons/Logo.svg'
import searchSvg from './../../img/icons/search-img.svg'
import cartImg from './../../img/icons/cart-image.svg'
import { NavLink } from 'react-router-dom'
import arrow from './../../img/icons/arrow-menu-down.svg'
import header from './Header.scss'
import h from './header.module.scss'
import burger from '../../img/icons/bars-solid.svg'
import { useSelector } from 'react-redux'
import Cart from './Cart'

const Header = () => {
    //-----------------------------
    const [isOpen, setOpen] = useState(false)

    const { cart } = useSelector((state) => state.products);

    const handleOpen = () => {
        setOpen(!isOpen)
    }
    //-----------------------------

    return (
        <>
            <header className={h.header}>
                <div className={h.container}>
                    <NavLink to={'organ'} className="logo">
                        <img src={logo} alt="logo-type" />
                    </NavLink>
                    <div className={h.menu}>
                        <nav className={`${h.body} ${isOpen ? h.open : ''}`}>
                            <ul className={h.list}>
                                <li className={h.item}><NavLink to={'home'} >Home</NavLink></li>
                                <li className={h.item}><NavLink to={'aboutus'}> About Us</NavLink></li>
                                <li className={h.item}><NavLink to={'shop'}> Shop</NavLink></li>
                                <NavLink className={h.menuLink}> Pages <img src={arrow} alt="arrow" />
                                    <ul className={h.menuSabList}>
                                        <li>
                                            <NavLink to={'services'} className={h.menuSubLink}>Services</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'services_single'} className={h.menuSubLink}>Service Single</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to={'our_team'} className={h.menuSubLink}>Our team</NavLink>
                                        </li>
                                    </ul>
                                </NavLink>
                                <li className={h.item}><NavLink to={'contact_us'}  >Contact Us</NavLink></li>
                            </ul>
                        </nav>

                    </div>
                    <Cart data={cart} image={cartImg} btnfunction={handleOpen} />
                </div>
            </header>
        </>

    );
}

export default Header;