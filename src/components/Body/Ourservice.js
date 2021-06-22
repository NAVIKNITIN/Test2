import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Ourreused from './Ourreused'
const Ourservice = () => {
    return (
        <>
            <div className="container-fluid p-4 text-center">
                <h1>
                    OUR SERVICES
                </h1>
                <h5>
                    Our Dedicated Services To Sky Rocket your business
                </h5>
                <div className="d-flex p-4 col-md-12">
                    <Ourreused src="capture1.png" text="Mobile App Development"/>
                    <Ourreused src="capture2.png" text="Website Development"/>
                    <Ourreused src="capture3.png" text="Enterprise solution"/>
                    <Ourreused src="capture4.png" text="Software Development"/>

                </div>
                <div className="d-flex p-4 col-md-12">
                <Ourreused src="capture5.png" text="Digital Marketing"/>
                <Ourreused src="capture6.png" text="Custom Software Development"/>
                <Ourreused src="capture7.png" text="Contracts & Parnerships"/>
                <Ourreused src="capture8.png" text="Customization & maintenance"/>

                </div>
            </div>
        </>
    )
}

export default Ourservice
