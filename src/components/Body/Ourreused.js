import React from 'react'

const Ourreused = ({src,text}) => {
    return (
        <div className="card-items p-4">
                        <img src={src} />
                        <h4>{text}</h4>
        </div>
    )
}

export default Ourreused
