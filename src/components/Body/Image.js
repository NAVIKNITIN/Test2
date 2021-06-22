import React from 'react'

const Image = ({src,text}) => {
    return (
            <div className="col-4 col-md-2 p-1">
                        <img src={src} className="img-fluid ${3|rounded
                            -top,rounded-right,rounded-bottom,rounded-left,
                            rounded-circle,|}"  />
                        <h3><b>{text}</b></h3>
            </div>
    )
}

export default Image
