import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { faAward, faFlask, faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Counter.css';



const Counter = () => {
    return (
        <section id="counts" className="counts">
            <div className="container-brand" data-aos="fade-up">

                <div className="row no-gutters">

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <FontAwesomeIcon icon={faUserMd} className="count-icon"/>
                            <span className="singleCount">85</span>

                            <p><strong>Doctors</strong> consequuntur quae qui deca rode</p>
                            <a href="#">Find out more &raquo;</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <FontAwesomeIcon icon={faHospital} className="count-icon"/>
                            <span className="singleCount">77</span>
                            <p><strong>Departments</strong> adipisci atque cum quia aut numquam delectus</p>
                            <a href="#">Find out more &raquo;</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <FontAwesomeIcon icon={faFlask} className="count-icon"/>
                            <span className="singleCount">125</span>
                            <p><strong>Research Lab</strong> aut commodi quaerat. Aliquam ratione</p>
                            <a href="#">Find out more &raquo;</a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                            <FontAwesomeIcon icon={faAward} className="count-icon"/>
                            <span className="singleCount">95</span>
                            <p><strong>Awards</strong> rerum asperiores dolor molestiae doloribu</p>
                            <a href="#">Find out more &raquo;</a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Counter;