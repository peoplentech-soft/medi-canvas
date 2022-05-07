import React from 'react';
import './Header.css';
import banner from '../../img/header/header-banner.jpg';

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="row header-container container-brand d-flex justify-content-between align-items-center">
                <div className="header-content col-lg-6 col-md-12">
                    <p>Total Health <span className="color-brand">Care</span> Solution</p>
                    <h1>Your Most Trusted <span className="color-brand">Health</span> Partner</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam adipisci error quod. Amet facere enim a, natus fugit consequatur? Incidunt reprehenderit porro corrupti necessitatibus rem nam pariatur amet nemo?</p>
                    <button className="btn button-brand">Make Appointment</button>
                </div>
                <div className="header-banner col-lg-6 col-md-12">
                    <img src={banner} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Header;