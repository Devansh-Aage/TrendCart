import React from 'react'
import { useState, useEffect } from 'react';
import success from './assets/success.jpg'
import Tilt from './Tilt'
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-dom-confetti';
import './CSS/Success.css'

function Success() {

    const [Confett, setConfetti] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setConfetti(true)
        }, 1000);
    }, [])

    return (
        <div className="full-screen-container">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 1, x: '-100%' }}
                    transition={{ duration: 0.7, ease: "easeInOut" }} className='bigSBox'>
                    <div className='para'>
                        <div className='oneliner'>
                            Thank you for your purchase! <br /> Your goodies are on their way to you
                        </div>
                    </div>
                    <Confetti active={Confett} config={{ elementCount: 200, angle: -90, spread: 560 }} />
                    <div className='aboutimage'>
                        <Tilt image={success}></Tilt>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Success