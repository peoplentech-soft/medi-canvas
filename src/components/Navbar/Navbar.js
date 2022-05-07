import React from 'react';
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
                                    Services
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#/">Neurology Services</a></li>
                                    <li><a class="dropdown-item" href="#/">Cardiology Services</a></li>
                                    <li><a class="dropdown-item" href="#/">X-Ray & RMI Services</a></li>
                                    <li><a class="dropdown-item" href="#/">Eye care Services</a></li>
                                    <li><a class="dropdown-item" href="#/">Dental Services</a></li>
                                    <li><a class="dropdown-item" href="#/">Orthopedics Services</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/">Department</a>
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
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


        
        // <header id="header" class="fixed-top">
        //     <div class="container-brand d-flex align-items-center nav-container">
        //         <a class="me-auto logo"href="index.html"><strong>MediCanvas</strong></a>

        //         <nav id="navbar" class="navbar order-last order-lg-0">
        //             <ul>
        //                 <li><a class="nav-link scrollto " href="#hero">Home</a></li>
        //                 <li><a class="nav-link scrollto" href="#about">About</a></li>
        //                 <li><a class="nav-link scrollto" href="#departments">Departments</a></li>
        //                 <li><a class="nav-link scrollto" href="#doctors">Doctors</a></li>
        //                 <li class="dropdown"><a href="#services"><span>Services</span> <i class="bi bi-chevron-down"></i></a>
        //                     <ul>
        //                         <li><a href="#">Neurology Services</a></li>
        //                         {/* <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
        //                             <ul>
        //                                 <li><a href="#">Deep Drop Down 1</a></li>
        //                                 <li><a href="#">Deep Drop Down 2</a></li>
        //                                 <li><a href="#">Deep Drop Down 3</a></li>
        //                                 <li><a href="#">Deep Drop Down 4</a></li>
        //                                 <li><a href="#">Deep Drop Down 5</a></li>
        //                             </ul>
        //                         </li> */}
        //                         <li><a href="#">Cardiology Services</a></li>
        //                         <li><a href="#">X-Ray & RMI Services</a></li>
        //                         <li><a href="#">Eye Care Services</a></li>
        //                         <li><a href="#">Dental Services</a></li>
        //                         <li><a href="#">Orthopedics Services</a></li>
        //                     </ul>
        //                 </li>
        //                 <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        //             </ul>
        //             <i class="bi bi-list mobile-nav-toggle"></i>
        //         </nav>

        //         <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>

        //     </div>
        // </header>

    );
};

export default Navbar;