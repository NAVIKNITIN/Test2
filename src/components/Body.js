import React from 'react'
import Taskus from "./Body/Talkus"
import Developers from "./Body/Developers"
import Whowe from "./Body/Whowe"
import Technology from "./Body/Technology"
import Ourservice from "./Body/Ourservice"
import Quote from "./Body/Quote"
import Casestudies from "./Body/Casestudies"
import Cater from "./Body/Cater"
import Faq from "./Body/Faq"
import Testimonials from "./Body/Testimonials"
import Reason from './Body/Reason'

const Body = () => {
    return (
        <>
            <div className="p-4">
                <Taskus />
            </div>
            <div className="p-4">

            </div>
            <Developers />
            <div className="p-4">
                <Whowe />
            </div>

            <div className="p-4">
                <Technology />
            </div>
            
            <div className="p-4">
                <Ourservice />
            </div>
            <div className="p-4">
                <Reason />
            </div>
            <div className="p-4">
                <Quote />
            </div>
            <div className="p-4">
                <Cater />
            </div>
            <div className="p-4">
                <Casestudies />
            </div>
            <div className="p-4">
                <Faq />
            </div>
                <Testimonials />
        </>
    )
}

export default Body
