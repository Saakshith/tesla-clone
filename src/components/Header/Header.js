import React from 'react'
import TeslaLogo from '../../assets/tesla_logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/"><img src={TeslaLogo} alt="tesla_logo" width="100"></img></Link>
            </div>
            <div className="header__center">
                <ul>
                    <li><Link to="/model_s">Model S</Link></li>
                    <li><Link to="/model_3">Model 3</Link></li>
                    <li><Link to="/model_x">Model X</Link></li>
                    <li><Link to="/model_y">Model Y</Link></li>
                    <li><Link to="/solar_roof">Solar Roof</Link></li>
                    <li><Link to="/solar_panels">Solar Panels</Link></li>
                </ul>
            </div>
            <div className="header__right">
                <ul>
                    <li><a href={""}>Shop</a></li>
                    <li><a href={""}>Account</a></li>
                    <li><a href={""}>Menu</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
