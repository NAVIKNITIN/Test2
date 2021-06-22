import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "../Body/childcomponents/Button"

const Developers = () => {
    return (
        <>
            <div className="container-fluid d-flex text-left">
            <div className="card p-4">
                <div className="card p-4">
                    <h1><b>YOUR <p className="text-primary">TRUSTED</p>SOURCE FOR
                        SOFTWARE DEVELOPMENT SINCE <p className="text-primary">2009</p></b></h1>
                </div>
                <div className="title p-4">
                    <h4><p className="text-primary">HIRE THE BEST SOFTWARE DEVELOPMENT TEAMS</p></h4>
                    <ul>
                        <li>Under 1 Hour.</li>
                        <li>on ANY Technology.</li>
                        <li>At Extremely Comppetitive and Affordable costs.</li>
                        <li>Without the Developers backing out.</li>
                    </ul>
                </div>
                <Button text="SELECT DEVELOPER" />
            </div>
            <img className="whowe" src="whowe.png" />
            </div>
        </>
    )
}

export default Developers
