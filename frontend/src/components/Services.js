import React from 'react'
import { FaTruckFast } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import './CSS/Services.css'


const Services = () => {
    return (
        <div className='outer'>
            <div className="services">
                <div className="circle">
                    <FaTruckFast className='truck'/>
                </div>
                <div className="text">
                    Free and Fast Delivery
                </div>
            </div>
            <div className="services">
                <div className="circle">
                    <TfiHeadphoneAlt className='truck'/>
                </div>
                <div className="text">
                    24/7 Customer Service
                </div>
            </div>
            <div className="services">
            <div className="circle">
                    <MdOutlineVerifiedUser className='truck'/>
                </div>
                <div className="text">
                    Money Back Guarantee
                </div>
            </div>
        </div>
    )
}

export default Services
