import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Image from "./Image";
const Cater = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="d-flex">
                    <Image src="cater1.png" text="BAFSI & FINTECH"/>
                    <Image src="cater2.png" text="Healthcare & Pharmaceuticals"/>
                    <Image src="cater3.png" text="Media & Entertainment"/>
                    <Image src="cater4.png" text="ED.tech"/>
                    <Image src="cater5.png" text="Logistics & E-commerce"/>
                    <Image src="cater6.png" text="Government"/>
                    

                </div>
            </div>
        </>
    )
}

export default Cater
