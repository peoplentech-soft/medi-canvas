import React from 'react';
import './Header.css';
import banner from '../../img/header/header-banner.jpg';
import Appointment from '../Appointment/Appointment';

const Header = () => {
    return (
        <div className="header" id="header">
            <div className="row header-container container-brand d-flex justify-content-between align-items-center">
                <div className="header-content col-lg-6 col-md-12">
                    <p>Total Health <span className="color-brand">Care</span> Solution</p>
                    <h1>Your Most Trusted <span className="color-brand">Health</span> Partner</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum magnam adipisci error quod. Amet facere enim a, natus fugit consequatur? Incidunt reprehenderit porro corrupti necessitatibus rem nam pariatur amet nemo?</p>
                    <button type="button" className="btn button-brand" data-bs-toggle="modal" data-bs-target="#exampleModal">Make Appointment</button>
                </div>
                <div className="header-banner col-lg-6 col-md-12">
                    <img src={banner} alt="" className="img-fluid" />
                </div>
            </div>



            
            {/* Popup Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">MediCanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Appointment />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn button-brand" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;