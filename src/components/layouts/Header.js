import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Header = () => {
    return (
        <React.Fragment>

            <Navbar className="navbar d-flex"  variant="light" style={{background:'#d7d7d7'}}>

                <div className="navbar-brand ">
                    <Nav.Link to="/">
                        <img src="logo.png" style={{ height: 60 }} />
                    </Nav.Link>
                </div>
                <div className="col pl-4">
                    <div className="col pl-4">
                        <Nav className="d-flex justify-content-end decoration-none" style={{ justifyContent: 'flex-end' }}   >

                            <Nav.Link href="#" ><b>SERVICES+</b></Nav.Link>
                            <Nav.Link href="#"><b>HIRE DEVELOPERS+</b></Nav.Link>
                            <Nav.Link href="#"><b>PROJECT MANAGEMENT</b></Nav.Link>
                            <Nav.Link href="#"><b>OUR SOLUTIONS+</b></Nav.Link>
                            <Nav.Link href="#"><b>COMPANY</b></Nav.Link>

                        </Nav>
                    </div>
                </div>

                <hr />

            </Navbar>
        </React.Fragment>
    );
};

export default Header;
