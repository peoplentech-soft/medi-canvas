import React from 'react';
import './About.css';
import about from '../../img/about/about.jpg';

const About = () => {
    return (
        <div className="About">
            <div className="about-container container-brand">
                <div class="" data-aos="fade-up">
                    <div class="section-title">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, blanditiis! Est, aliquam exercitationem. Excepturi quo dolore, vitae dolorum reprehenderit sunt veritatis officia nihil, adipisci inventore non dignissimos eaque culpa autem quos blanditiis velit. Aperiam cumque vel excepturi vitae nam debitis perferendis adipisci dolores. Illum nulla, tempora eum sed sint voluptas!</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-6" data-aos="fade-right">
                            <img src={about} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p class="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;