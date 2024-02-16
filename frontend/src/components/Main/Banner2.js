import React from 'react'
import rolex from '../assets/rolex.png'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../CSS/Banner.css'

const Banner2 = () => {
    const fontStyle = {
        color: 'white',
        fontFamily: "Segoe UI", fontSize: "30px", fontWeight: "600"
    }
    return (
        <AnimatePresence>
            <div className='banner d-flex mx-auto ' style={{ backgroundColor: "#93c572", height: '350px', borderRadius: "6px", width: '85%' }}>
                <div className="d-flex flex-column justify-content-center mx-auto">
                    <div className='category mr-auto align-self-start' style={{ display: "block", fontFamily: "Segoe UI", fontSize: "15px", fontWeight: "600", color: "darkgreen", marginLeft: '70px' }}>Category : Electronic</div>
                    <div className='desc  ml-4 align-self-center' style={fontStyle}>Timeless Elegance, Historic Precision</div>
                    <div className='desc ml-4' style={fontStyle}>Rolex Day-Date 40</div>
                    <div className='desc ml-4' style={fontStyle}>At &#8377;3,390,000</div>

                    <Link to='/undefined'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ rotate: "-15deg" }} className='bannerBtn rolexbtn btn btn-success w-50 ml-4 mt-4' style={{ fontFamily: "Segoe UI", fontSize: "20px", fontWeight: "700" }}>Buy Now !</motion.button>
                    </Link>
                </div>
                <div className='image flex-fill mx-auto' style={{ width: '35%', height: '100%', aspectRatio: '1 / 1', backgroundColor: "#93c572" }}>
                    <LazyLoadImage
                    placeholderSrc={rolex}
                    src={rolex}
                    effect='blur'
                    width='100%'
                    height='100%'
                    />
                </div>
                {/* <img className='image flex-fill mx-auto' src={rolex} style={{ width: '35%', height: '100%', aspectRatio: '1 / 1', backgroundColor: "#93c572" }} alt="" srcSet="" /> */}
            </div>
        </AnimatePresence>
    )

}

export default Banner2
