import React from 'react'

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Talkus = () => {
    return (
        <>
            <div class="card">
                <div class="d-flex text-center card-body">
                    <div>
                        <img src="image1.png"></img>
                    </div>
                    <div className="col">
                        <div className="text-center ">
                            <h1><b>TAKE A SMART <p className="text-primary">DIGITAL</p>MOVE</b></h1>
                            <h5>DIGITAL TRANSFORMATION DONE RIGHT:DELIVERD ON TIME</h5>

                        </div>

                        <br />
                        <br />

                        <div className="d-flex" >
                            <div className="card-title  ">
                                <div className="text-left d-flex-vertical ">
                                    <h2><b><p className="text-primary">1</p> Hour</b></h2>
                                    <h5>Hire Developer On Demand Software Expert</h5>
                                </div>
                                <div className="text-right"></div>
                                <div>
                                </div>
                            </div>


                            <div className="card-title">
                                <div className="text-left d-flex-vertical ">
                                    <h2><b><p className="text-primary">1</p> Hour</b></h2>
                                    <h5>Hire Developer On Demand Software Expert</h5>
                                </div>
                                <div className="text-right"></div>
                                <div>
                                </div>
                            </div>
                        </div>

                        <input  className="btn btn-primary" style={{borderRadius:18}} type="button" value="Talk To Us"/>

                    </div>

                    <img src="image2.png" style={{ height: 600 }}></img>
                </div>

            </div>
        </>
    )
}

export default Talkus
