import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
    render() {
        return (
            <div className="className="carousel>
                    <h1 className="text-center">Testimonials</h1>

                <Carousel 
                    showArrows={true}
                    infiniteLoop={true}
                    autoPlay={true}
                >

                    <div>

                        <div >
                            <div>
                                <p>
                                    We are an IT outsourcing company and mobile app development
                                    company in Mumbai with 12+ years in business and 200 strong developers.
                                    We are reliable offshore software development partners
                                    for leading enterprises, Digital agencies, SaaS products
                                    Management consulting firms, Software development companies,
                                    SME’s & Startups.
                                </p>
                            </div>
                            <h3>
                                Bharat Doshi
                            </h3>
                            <p className="text-muted">
                                Marketing Manager
                            </p>
                            <h3>Walmart India</h3>

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>
                                    We are an IT outsourcing company and mobile app development
                                    company in Mumbai with 12+ years in business and 200 strong developers.
                                    We are reliable offshore software development partners
                                    for leading enterprises, Digital agencies, SaaS products
                                    Management consulting firms, Software development companies,
                                    SME’s & Startups.
                                </p>
                            </div>
                            <h3>
                                Bharat Doshi
                            </h3>
                            <p className="text-muted">
                                Marketing Manager
                            </p>
                            <h3>Walmart India</h3>

                        </div>
                    </div>
                    <div>
                        <div>
                            <div>
                                <p>
                                    We are an IT outsourcing company and mobile app development
                                    company in Mumbai with 12+ years in business and 200 strong developers.
                                    We are reliable offshore software development partners
                                    for leading enterprises, Digital agencies, SaaS products
                                    Management consulting firms, Software development companies,
                                    SME’s & Startups.
                                </p>
                            </div>
                            <h3>
                                Bharat Doshi
                            </h3>
                            <p className="text-muted">
                                Marketing Manager
                            </p>
                            <h3>Walmart India</h3>

                        </div>
                    </div>



                </Carousel>
            </div>
        );
    }
}