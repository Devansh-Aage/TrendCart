import React from 'react'
import { lazy } from 'react';
import './CSS/Home.css'
import { motion, AnimatePresence } from 'framer-motion';
const Banner1 = lazy(() => import("../components/Main/Banner1"));
const Banner2 = lazy(() => import("../components/Main/Banner2"));
const Slider = lazy(() => import("../components/Header/Slider"));
const Row1 = lazy(() => import("./Main/Row1"));
const Row2 = lazy(() => import("./Main/Row2"));
const Services = lazy(() => import("./Services"));
const SlideInComponent = lazy(() => import("./SlideIn"));


const Home = () => {
    return (
        <AnimatePresence>
            <motion.div className='parentBox'>
                <SlideInComponent>
                    <Slider />
                </SlideInComponent>
                <SlideInComponent>
                    <div className="dabba">
                        <Row1 />
                    </div>
                </SlideInComponent>
                <SlideInComponent>
                    <Banner1 />
                </SlideInComponent>
                <SlideInComponent>
                    <div className="dabba">
                        <Row2 />
                    </div>
                </SlideInComponent>
                <SlideInComponent>
                    <Banner2 />
                </SlideInComponent>
                <SlideInComponent>
                    <Services />
                </SlideInComponent>
            </motion.div>
        </AnimatePresence>

    )
}

export default Home
