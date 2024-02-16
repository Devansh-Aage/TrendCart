import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Carous from './Carous';
import samsung from '../assets/samsung.png'
import iphone from '../assets/iphone.png'
import decor from '../assets/decor.png'
import camera from '../assets/camera.png'
import shoes from '../assets/shoes.png'
import { FaApple } from "react-icons/fa";
import { SiSony } from "react-icons/si";
import { SiSamsung } from "react-icons/si";


const Slider = () => {
    return (
        <div className='ml-2 mx-3' style={{ marginTop: '10px' }}>
            <Carousel autoPlay={true} showArrows={false} emulateTouch={true} showThumbs={false} width='100%' infiniteLoop={true} showIndicators={true} showStatus={false}>
                <Carous image={iphone} bgcolor="#f4f4f4" brand="iPhone 14 Series" title='50% OFF on Cutting Edge Technology' icon={<FaApple />} iconColor="black" titleColor="#333333" btnColor="grey"></Carous>
                <Carous image={samsung} bgcolor="#e0e0e0" brand="Samsung Flip Phone" title='Future is Here!!' icon={<SiSamsung />} iconColor="black" btnColor="#c073d0" titleColor="black"> </Carous>
                <Carous image={decor} bgcolor="#f5f5dc" brand="Home Decorations" title='Make Your Home Elegant' btnColor="#c0c0c0" titleColor="black"></Carous>
                <Carous image={shoes} bgcolor="#f5f5f5" brand="Sports Shoes" title='Elevate Your Game' btnColor="grey" titleColor="black"></Carous>
                <Carous image={camera} bgcolor="#ffe4c4" brand="Sony 4K Camera" title='30% OFF NOW!' icon={<SiSony />} btnColor="#ff9966" titleColor="black" iconColor="black"></Carous>
            </Carousel>
        </div>
    )
}

export default Slider
