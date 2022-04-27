import { faClock, faLaptopMedical, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './KeyDetails.css';

const KeyDetails = () => {
    return (
        <div className="key__details">
            <div className="key-details-container container-brand">
                <div className="content-container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100 shadow">
                                <div class="card-body details-item">
                                    <FontAwesomeIcon icon={faLaptopMedical} className="details-icon color-brand"/>
                                    <p className="mb-1 details-item-short-title"><span className="color-brand">24/7 Hours</span> Service</p>
                                    <h5 class="card-title">Online Appoinment</h5>
                                    <p class="card-text mb-4">Get all time support for emergency.We have introduced the principle of family medicine.</p>
                                    <button className="btn button-brand">Make Appointment</button>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 shadow">
                                <div class="card-body details-item">
                                    <FontAwesomeIcon icon={faClock} className="details-icon color-brand"/>
                                    <p className="mb-1 details-item-short-title">Timing <span className="color-brand">schedule</span></p>
                                    <h5 class="card-title">Working Hours</h5>
                                    <div className="card-text d-flex justify-content-between aling-items-center">
                                        <p className="mb-0">Sun - Wed :</p>
                                        <p className="mb-0">8:00 - 17:00</p>
                                    </div>
                                    <hr />
                                    <div className="card-text d-flex justify-content-between aling-items-center">
                                        <p className="mb-0">Sun - Wed :</p>
                                        <p className="mb-0">8:00 - 17:00</p>
                                    </div>
                                    <hr />
                                    <div className="card-text d-flex justify-content-between aling-items-center">
                                        <p className="mb-0">Sun - Wed :</p>
                                        <p className="mb-0">8:00 - 17:00</p>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 shadow">
                                <div class="card-body details-item">
                                    <FontAwesomeIcon icon={faPhone} className="details-icon color-brand"/>
                                    <p className="mb-1 details-item-short-title"><span className="color-brand">Emegency</span> Cases</p>
                                    <h5 class="card-title">1-800-700-6200</h5>
                                    <p class="card-text mb-4">Get ALl time support for emergency.We have introduced the principle of family medicine.</p>
                                    <button className="btn button-brand">Make Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyDetails;