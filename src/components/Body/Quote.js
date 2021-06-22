import React from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Button from "./childcomponents/Button"

const Quote = () => {
    return (
        <>
            <div className="container-fluid text-center text-white text-bold" style={{
      backgroundImage: 'url("Artboard13.png")' , height:200}}>
                
                <div className="quote p-4">
                        <h1>DO YOU HAVE A PROJECT IN MIND?</h1>
                        <h3>
                            Let's Start a Friendly conversation
                        </h3>
                        <Button text="GET A FREE QUOTE" />
                </div>
            </div>
        </>
    )
}

export default Quote
