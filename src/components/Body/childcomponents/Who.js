import React from 'react'

const Who = ({text ,color ,boldtext}) => {
    return (
        <div class="card-body">
            <div class="card-body text-center" style={{ border: `4px solid ${color}`, borderEndEndRadius: 30 }}>
                <p class="card-text"><b><h2>{boldtext}</h2></b>{text}</p>
            </div>
        </div>
    )
}

export default Who
