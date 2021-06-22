import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "../Body/childcomponents/Button"
import Tech from "./childcomponents/Tech"
const Technology = () => {
    return (
        <>
            <div className="container-fluid p-4">
                <h1><b>TECHNOLOGY EXPERTISE TO MEET YOUR NEEDS</b></h1>
                <h5>
                    We Have a Wide Range Of Technologies Expertise
                    that you can Choose from Catering to companies small or Big!
                </h5>
                <div className="row">
                    <Button text="Frontend Framework"/>
                    <Button text="Backend Technologies"/>
                    <Button text="Mobile Technologies"/>
                    <Button text="Database"/>
                    <Button text="Others"/>

                    
                </div>

                <div className="row">
                    <div class="card text-left">
                        <img class="card-img-top" src="holder.js/100px180/" alt="" />
                        <div class="card-block p-4" >
                            <div className="d-flex p-4 col-md-12">
                                <Tech src="logo.png"/>
                                <Tech src="logo.png"/>
                                <Tech src="logo.png"/>
                                <Tech src="logo.png"/>
                                <Tech src="logo.png"/>
                                
                            </div>
                            <div className="d-flex p-4">
                            <Tech src="logo.png"/>
                            <Tech src="logo.png"/>
                            <Tech src="logo.png"/>
                            <Tech src="logo.png"/>
                            <Tech src="logo.png"/>

                            </div>
                            <div className="d-flex p-4">
                            <Tech src="logo.png"/>
                            <Tech src="logo.png"/>
                            <Tech src="logo.png"/>
                            <Tech src="logo.png"/>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Technology
