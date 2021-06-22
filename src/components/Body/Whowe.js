import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "../Body/childcomponents/Button"
import Who from "../Body/childcomponents/Who"


const Whowe = () => {
    return (
        <>
            <div className="container-fluid d-flex text-left">
                <div className="card p-3 col-md-6">
                    <div className="card p-4">
                        <h1><b>WHO WE ARE</b></h1>
                    </div>
                    <div className="title p-4">
                        <h5>
                            We are a leading Software Development and Outsourcing Company based
                            in Mumbai.We providfe On Demand Software development teams on any
                            Technology and that to within 1 Hour.
                        </h5>
                        <br />
                        <h5>
                            Hire 1 to 35 Developers through RaaS ,
                            our highly appreciated and implemented system .
                            Resources as a service system.
                        </h5>
                    </div>
                    <Button text="KNOW MORE" />
                </div>
                <div className="col-md-4 p-4" >

                    <div class="cardyears">

                        <div class="d-flex">
                            <Who text="Successfully Years" color="red" boldtext="12+"/>
                            <Who text="Developers Strong" color="orange" boldtext="200+"/>
                        </div>
                        <div className="d-flex">
                        <Who text="Projects Compeleted" color="green" boldtext="1200+"/>
                        <Who text="Customer Satisfaction" color="brown" boldtext="90%"/>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Whowe
