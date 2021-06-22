import React from 'react'
import "../../App.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "./childcomponents/Button"
import Carou from "./childcomponents/Carou";

const Casestudies = () => {
    return (
        <>
            <div className="container-fluid text-white font-awesome" style={{ backgroundColor: '#4db8ef', borderEndEndRadius: 150 }}>
                <div className="row">
                    <div className="col-md-6 p-4">
                        <h1>CASE STUDIES</h1>
                        <div className="p-4 ">
                            <img src="Artboard2.png" alt="" style={{ height: 300 }} />

                        </div>
                    </div>
                    <div className="col-md-4 card-body p-4 pl-2  ">
                        <div className="card-title">
                            <h2>Augmont Gold Loan</h2>

                        </div>
                        <div className="card-text">
                            <p className="p-2">Client is a Billion company that deals in trade Gold.</p>
                            <p className="p-2">They wanted to venture into the market of providing
                                gold loans for customers in the most easiest and flexible way
                                possible and that too Without any hassless for the customer.</p>

                            <p className="p-2">
                                They wanted to customers to have a plesant
                                Gold dealings experience at which they could take loans on thier gold
                            </p>
                            <Button text="VIEW CASE STUDY"></Button>
                        </div>
                    </div>


                </div>
                <Carou />
                
            </div>


        </>
    )
}

export default Casestudies
