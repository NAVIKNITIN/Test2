import React from 'react'

const Reas = ({boldtext,text}) => {
    return (
        <div className="col-md-3">
            <h1><p className="text-primary p-4">{boldtext}</p></h1>
            <h5>{text}</h5>
        </div>
    )
}

export default Reas
