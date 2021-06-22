import React from 'react'

const Image = ({src}) => {
    return (
        <div class="item active">
            <img src={src} alt="" style={{ width: 200, height: 180, paddingLeft: 25, paddingBottom: 25 }} />
        </div>
    )
}

export default Image
