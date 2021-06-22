import React from 'react'

const Button = ({text }) => {
    return (
        <div className="col">
            <button type="button" className="btn btn-primary" style={{borderRadius:18}}>{text}</button>
        </div>
    )
}

export default Button
