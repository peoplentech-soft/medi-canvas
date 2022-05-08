import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container">
                <div class="footer-top">
                    <div class="row container-brand">
                        <div class="col-lg-3 col-md-6">
                            <div class="footer-info">
                                <h3>MediCanvas</h3>
                                <p>
                                    A108 Adam Street <br/>
                                        NY 535022, USA<br/><br/>
                                            <strong>Phone:</strong> +1 5589 55488 55<br/>
                                                <strong>Email:</strong> info@example.com<br/>
                                                </p>
                                <div class="social-links mt-3">
                                    <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                    <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                    <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                    <a href="#" class="google-plus"><i class="bi bi-skype"></i></a>
                                    <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email"/><input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>

                <div class="container-brand footer-bottom d-flex flex-left">
                    <div class="copyright">
                        &copy; Copyright <strong><span>MediCanvas</span></strong>. All Rights Reserved || Designed by <a href="https://peoplentech.net/">PeopleNTech</a>
                    </div>
                    <div class="credits">
                        
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;