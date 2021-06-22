import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Links from "./Footer/Links";
import Contact from "./Footer/Contact"
import Feedback from "./Footer/Feedback"
import Subscribe from "./Footer/Subscribe"

const Footer = () => {
    return (
        <React.Fragment>
            <footer id="footer" className="w3-Footer" style={{ backgroundColor: "#1e1e1e" }}>
                <div className=" row d-flex p-4 " >
                    <Links />
                </div>

                <hr className="pl-4" />


                <div className=" row d-inline-flex p-4 " >
                    <div className="d-flex flex-row">
                        <Contact />

                        <div className="d-flex justify-content-center col-sm-4 p-4">
                            <Subscribe />


                        </div>

                        <hr className="pl-4" />

                        <div className="col-sm-4 p-4">
                            <Feedback />
                        </div>
                    </div>
                </div>

                <hr className="pl-4 text-light" />

                <div className="terms and conditions flex-inline row p-2 text-white">
                    <div className="col">
                        <p>
                            Terms of use | Privacy Environmental Policy
                        </p>
                    </div>
                    <div className="col">
                        <p>
                            Copyright © 2019 Nimap Infotech .All Rights Reserved.
                        </p>
                    </div>

                </div>

            </footer>
        </React.Fragment>

    )
}

export default Footer
