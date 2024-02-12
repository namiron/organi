import React from 'react'
import { NavLink } from 'react-router-dom'
import './NotFound.scss'
import notFound from './../../../img/bg-first-page/not_found.png'

const NotFond = () => {
    return (
        <>
            <div className="notFoundBody">
                <img src={notFound} alt="" />
                <div className="notFoundBodyContainer">
                    <div className="notFoundBodyContent">
                        <p className="notFoundBodyNumber">404</p>
                        <h2 className="notFoundBodyTitle">Page not found</h2>
                        <p className="notFoundBodyText">The page you are looking for doesn't exist or has been moved</p>
                        <NavLink to={'home'} className="notFoundBodyBtn">Go to Homepage</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotFond