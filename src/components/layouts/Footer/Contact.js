import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="flex-column mb-2 p-4 ">
                <h3 className="text-white">CONTACT</h3>
                <div className="d-table text-white">
                    <span>
                        Address: 41, 4th floor A-wing, Todi Industrial Estate,
                        Sun Mill compound, Lower Parel, Mumbai - 400013
                    </span>
                </div>
                <div>
                    <div className="text-uppercase fw-bold text-white p-4 ">Follow us on</div>
                    <div class="btn-group-horizontal row  " role="group" aria-label="Basic example" style={{padding:10}}>
                        <div className="col">
                        <button type="button" class="btn btn-secondary " style={{ height: 40, width: 40 }}></button>
                            </div>

                        <div className="col">
                        <button type="button" class="btn btn-secondary"  style={{ height: 40, width: 40 }}></button>
                        </div>
                        <div className="col">
                        <button type="button" class="btn btn-secondary "  style={{ height: 40, width: 40 }}></button>
                        </div>
                        <div className="col">
                        <button type="button" class="btn btn-secondary "  style={{ height: 40, width: 40 }}></button>
                        </div>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact
