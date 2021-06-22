import React from 'react'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "../../Body/childcomponents/Button"
const Feedback = () => {
    return (
        <>
            <form>
                <h3 className="text-white">Feedback</h3>
                <div class="form-outline mb-4 ">
                    <input type="text" class="form-control " placeholder="Name"/>
                </div>


                <div class="form-outline mb-4">
                    <input type="email"  class="form-control" placeholder="Email id"  highlighter="Email"/>
                </div>


                <div class="form-outline mb-4">
                    <textarea class="form-control" rows="4" placeholder="Message"></textarea>
                </div>
                <Button text="Send a Message" />
            </form>
        </>
    )
}

export default Feedback
