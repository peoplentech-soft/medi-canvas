import React from 'react';
import './Doctors.css';
import doctor1 from '../../img/doctors/doctors-1.jpg';
import doctor2 from '../../img/doctors/doctors-2.jpg';
import doctor3 from '../../img/doctors/doctors-3.jpg';
import doctor4 from '../../img/doctors/doctors-4.jpg';

const Doctors = () => {
    return (
        <section className="doctors">
            <div className="docotors-container container-brand">
                <div className="section-title">
                    <h2>Doctors</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis distinctio, facilis aperiam porro, reprehenderit, dolores laudantium minima minus iste pariatur fugit ipsum praesentium labore. Voluptatem repudiandae nemo possimus, provident temporibus sit quae sint in facere.</p>
                </div>

                <div className="row">

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member shadow" data-aos="fade-up" data-aos-delay="100">
                            <div className="member-img">
                                <img src={doctor1} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                            </div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Medical Officer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member shadow" data-aos="fade-up" data-aos-delay="200">
                            <div className="member-img">
                                <img src={doctor2} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                            </div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Anesthesiologist</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member shadow" data-aos="fade-up" data-aos-delay="300">
                            <div className="member-img">
                                <img src={doctor3} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                            </div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>Cardiology</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member shadow" data-aos="fade-up" data-aos-delay="400">
                            <div className="member-img">
                                <img src={doctor4} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href=""><i className="bi bi-twitter"></i></a>
                                        <a href=""><i className="bi bi-facebook"></i></a>
                                        <a href=""><i className="bi bi-instagram"></i></a>
                                        <a href=""><i className="bi bi-linkedin"></i></a>
                                    </div>
                            </div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Neurosurgeon</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Doctors;