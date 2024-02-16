import React from 'react'
import '../CSS/Carous.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Carous = (props) => {
    const { image, brand, title, bgcolor, icon, btnColor, titleColor, iconColor } = props;
    const titleStyle = {
        color: titleColor,
        fontFamily: "Segoe UI",
        fontSize: "50px",
        fontWeight: "600"
    }

    const iconStyle = {
        color: iconColor,
        fontSize: "60px",
        justifySelf: "start",
        marginRight: "15px",
    }

    const brandStyle = {
        color: titleColor,
        fontFamily: "Segoe UI",
        fontSize: "30px",
        fontWeight: "400",
    }
    const button = {
        fontFamily: "Segoe UI", fontSize: "20px", fontWeight: "700", width: '160px', backgroundColor: btnColor
    }
    return (
        <div>
            <AnimatePresence>
                <div className='d-flex carousBack' style={{ backgroundColor: bgcolor, height: '350px', borderRadius: "6px", width: '100%' }}>
                    <div className="d-flex flex-column justify-content-start mx-auto">
                        <div className="d-flex flex-row mt-2 justify-content-center mx-auto">
                            <div className='brandIcon' style={iconStyle}>
                                {icon}
                            </div>
                            <p id='brand' className='brand mx-auto align-self-center ' style={brandStyle}>
                                {brand}
                            </p>
                        </div>
                        <p id='title' className='title mx-auto align-self-center' style={titleStyle}>{title}</p>
                        <Link to='/undefined'> <motion.button whileHover={{ scale: 1.2 }} id='btn' className='btn mx-auto button' style={button}>Buy Now <FaArrowRight className='arrow' style={{ fontSize: "large", padding: 'auto' }} /></motion.button></Link>
                    </div>
                    <div id='img' className='flex-fill mx-auto my-auto py-3' style={{ width: '30%', height: "7% !important", aspectRatio: '4/3', backgroundColor: bgcolor }}>
                        <LazyLoadImage
                            effect='blur'
                            src={image}
                            placeholderSrc={image}
                        />
                    </div>
                    {/* <img id='img' className='flex-fill mx-auto my-auto py-3' src={image} style={{ width: '30%', height: "10% !important", aspectRatio: '4/3', backgroundColor: bgcolor }} alt="" srcSet="" /> */}

                </div>
            </AnimatePresence>
        </div>
    )
}

export default Carous
