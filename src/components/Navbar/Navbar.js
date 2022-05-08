import React from 'react';
import Appointment from '../Appointment/Appointment';
import './Navbar.css';
const Navbar = () => {

    


    return (
        <div className="navbar__main sticky-top">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid nav-container">
                    <a class="navbar-brand" href="#/"><strong>MediCanvas</strong></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Department
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#/">Neurology</a></li>
                                    <li><a class="dropdown-item" href="#/">Cardiology</a></li>
                                    <li><a class="dropdown-item" href="#/">Dental</a></li>
                                    <li><a class="dropdown-item" href="#/">Orthopedics</a></li>
                                    <li><a class="dropdown-item" href="#/">Medicine</a></li>
                                    <li><a class="dropdown-item" href="#/">Dermatology</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#/">X-Ray & RMI Services</a></li>
                                    <li><a class="dropdown-item" href="#/">Eye care Services</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/">Doctors</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/">Contact</a>
                            </li>
                            <li class="nav-item">
                                <button class="nav-link nav-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Appointment</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;