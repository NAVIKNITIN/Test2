import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "./childcomponents/Button"

const Faq = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7">
                        <div className="text-left">
                            <h1>
                                FAQ
                            </h1>
                            <h4>Most popular Questions</h4>
                            <div className="row p-4">
                                <div class="container text-left">
                                    <div id="accordion">
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="card-link" data-toggle="collapse" href="#collapseOne">
                                                    1.What are step to hire developer?
                                                </a>
                                            </div>
                                            <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                                                    2.Why Hire Dedicated developer?
                                                </a>
                                            </div>
                                            <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua.

                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                                                    3.How can i monitor and analyse developer performances?
                                                </a>
                                            </div>
                                            <div id="collapseThree" class="collapse" data-parent="#accordion">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua.

                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse" href="#collapse4">
                                                    4.Can I Hire developer for permanent?
                                                </a>
                                            </div>
                                            <div id="collapse4" class="collapse" data-parent="#accordion">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua.

                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header">
                                                <a class="collapsed card-link" data-toggle="collapse" href="#collapse5">
                                                    2.Why Hire Dedicated developer?
                                                </a>
                                            </div>
                                            <div id="collapse5" class="collapse" data-parent="#accordion">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua.

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="p-4 row">
                            <h1><b>GET QUOTE</b></h1>
                            <h5>Request A Free Quote</h5>
                        </div>
                        <div className="p-4">

                            <form>
                                <div class="form-outline mb-4 ">
                                    <input type="text" id="form4Example1" class="form-control " placeholder="Name" />
                                </div>


                                <div class="form-outline mb-4">
                                    <input type="email" id="form4Example2" class="form-control  " placeholder="Email id" />
                                </div>

                                <div class="form-outline mb-4">
                                    <input type="number" id="form4Example2" class="form-control  " placeholder="Mobile no." />
                                </div>
                                <div class="form-outline mb-4">
                                    <textarea class="form-control  " id="form4Example3" rows="4" placeholder="Description"></textarea>
                                </div>
                                <div class="form-outline mb-4">
                                <input type="file" id="myFile" name="filename"></input>
                                </div>
                                <Button text="Send a Message" />
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Faq
