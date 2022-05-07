import React from 'react';
import './Departments.css';
import department1 from '../../img/departments/departments-1.jpg';
import department2 from '../../img/departments/departments-2.jpg';
import department3 from '../../img/departments/departments-3.jpg';
import department4 from '../../img/departments/departments-4.jpg';

const Departments = () => {
    return (
        <section className="departments">
            <div className="departments-container container-brand">
                <div className="section-title">
                    <h2>Departments</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquam adipisci dolores veniam maxime saepe vel necessitatibus cupiditate eaque sed, non aperiam doloribus vero sint minus, sequi praesentium nisi quam!</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <ul className="nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                    <h4>Cardiology</h4>
                                    <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                    <h4>Neurology</h4>
                                    <p>Voluptas vel esse repudiandae quo excepturi.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                                    <h4>Hepatology</h4>
                                    <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2">
                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                                    <h4>Pediatrics</h4>
                                    <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-8">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <h3>Cardiology</h3>
                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <img className="img-fluid" src={department1} alt="" />
                                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <h3>Neurology</h3>
                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <img className="img-fluid" src={department2} alt="" />
                                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <h3>Hepatology</h3>
                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <img className="img-fluid" src={department3} alt="" />
                                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <h3>Pediatrics</h3>
                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                <img className="img-fluid" src={department4} alt="" />
                                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Departments;