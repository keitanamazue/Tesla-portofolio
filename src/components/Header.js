import React from 'react'
import './Header.css'
import TeslaLogo from '../assets/tesla_logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                 <img src={TeslaLogo} alt=""/>
            </div>

            <div className="header__center">
                <p>Model S</p>
                <p>Model 3</p>
                <p>Model x</p>
                <p>Model y</p>
                <p>Solar Roof</p>
                <p>Solar Panel</p>
            </div>

            <div className="header__right">
                <p>Shop</p>
                <p>Teasla Account</p>
            </div>
        </div>
    )
}

export default Header
