import React from 'react'
import jbl from '../assets/head.png';
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../CSS/Banner.css'

const Banner1 = () => {
    const fontStyle = {
        color: 'white',
        fontFamily: "Segoe UI", fontSize: "30px", fontWeight: "600"
    }
    const button = {
        fontFamily: "Segoe UI", fontSize: "20px", fontWeight: "700",
    }


    return (
        <AnimatePresence>
            <div className='banner d-flex mx-auto' style={{ backgroundColor: "#93c572", height: '350px', borderRadius: "6px", width: '85%' }}>
                <div className="d-flex flex-column justify-content-center mx-auto">
                    <div className=' category mr-auto align-self-start' style={{ display: "block", fontFamily: "Segoe UI", fontSize: "15px", fontWeight: "600", color: "darkgreen" }}>Category : Electronic</div>
                    <div className='desc mx-auto align-self-center' style={fontStyle}>Enhance Your Music Experience</div>
                    <div className='desc' style={fontStyle}>With Sony WH-CH520</div>
                    <div className='desc' style={fontStyle}>At &#8377;3,990</div>

                    <Link to='/undefined'>
                        <motion.button whileTap={{ rotate: "-15deg" }} whileHover={{ scale: 1.1 }} className=' bannerBtn btn btn-success w-50 mt-4' style={button}>Buy Now !</motion.button>
                    </Link>
                </div>
                <div className='image flex-fill mx-auto' style={{ width: '35%', height: '100%', aspectRatio: '1 / 1', backgroundColor: "#93c572" }}>
                    <LazyLoadImage
                        src={jbl}
                        width={'100%'}
                        height={'100%'}
                        effect='blur'
                        placeholderSrc={jbl}
                    />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default Banner1
