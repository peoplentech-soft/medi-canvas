import React from 'react';
import './Services.css';
import serviceImg from '../../img/service/service-img.jpg'

const Services = () => {
    return (
        <div className="services">
            <div className="service-container container-brand row d-flex justify-content-between align-items-center">
                <div className="service-image col-md-6">
                    <img src={serviceImg} alt="" className="img-fluid"/>
                </div>
                <div className="service-content col-md-6">
                    <h3>Personal care & healthy living</h3>
                    <p>Since its founding we become an integral part of the city, advancing our mission of providing access to compassionate care to our communities. Today patients find care that combines world-class medicine with compassion.</p>
                    <button className="btn button-brand">Services</button>
                </div>
            </div>
        </div>
    );
};

export default Services;