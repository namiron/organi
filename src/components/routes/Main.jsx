import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './Routes'
import Home from '../Home/Home';
import AboutUs from '../aboutUs/AboutUs';
import Shop from '../shop/Shop';
import Services from '../pages/services/Services';
import ServicesSingle from '../pages/services/ServicesSingle';
import OurTeam from '../pages/our_team/OurTeam';
import ContactUs from '../contactUs/ContctUs';
import ShopBody from '../shop/ShopBody';
import Cart from '../cart/Cart';
import NotFond from '../pages/not_found/NotFond';


const Main = () => {
    return (
        <Routes>
            <Route path={ROUTES.home} index element={<Home />}></Route>
            <Route path={ROUTES.aboutUs} element={<AboutUs />}></Route>
            <Route path={ROUTES.shop} element={<Shop />}></Route>
            <Route path={ROUTES.shop_body} element={<ShopBody />}></Route>
            <Route path={ROUTES.cart} element={<Cart />}></Route>
            <Route path={ROUTES.services} element={<Services />}></Route>
            <Route path={ROUTES.services_single} element={<ServicesSingle />}></Route>
            <Route path={ROUTES.our_team} element={<OurTeam />}></Route>
            <Route path={ROUTES.contact_us} element={<ContactUs />}></Route>
            <Route path={ROUTES.not_fount} index element={< NotFond />}></Route >
        </Routes>
    )
}

export default Main;