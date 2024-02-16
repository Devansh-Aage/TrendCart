import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import '../CSS/Nav.css';

const Flashsale = () => {
    const headlines = [
        "Tech Extravaganza Flash Sale: Unbelievable Deals on Gadgets - Up to 60% Off! Act Fast!",
        "Fashion Frenzy Flash Sale: Trendy Styles at Jaw-Dropping Prices - Limited Stock!",
        "Home Bliss Flash Sale: Upgrade Your Space with Discounts up to 70%! Don't Miss Out!",
        "Fitness Fanatics Flash Sale: Get Fit for Less - Exercise Gear at Half Price! Hurry!",
        "Beauty Bonanza Flash Sale: Pamper Yourself with Luxe Products - Up to 50% Off! Shop Now!"
    ]

    const [headlineIndex, setHeadlineIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        }, 3000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [headlines.length]);
    
    


    return (
        <div className='top'>
            <div className='topbanner'><div style={{textDecoration:"none"}}>{headlines[headlineIndex]}</div></div>
        </div>
    )
}

export default Flashsale
