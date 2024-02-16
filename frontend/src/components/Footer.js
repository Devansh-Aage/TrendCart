import React from 'react'
import './CSS/Footer.css'
import Input from './Input'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className='outerBox'>
      <FaArrowUp onClick={scrollToTop} className='toparrow'/>
      <div className="emailbox">
        <h4 className='head'>Exclusive</h4>
        <h4 className='head'>Get Free Delivery <br/> On Your First Order</h4>
        <Input/>
      </div>
      <div className="address">
        <h2 className='head'>Our Office</h2>
        <h4 className='head'>111, Ruturaj Heights,<br/>Thane-400602</h4>
        <h4 className='head'>+91 583884882</h4>
      </div>
      <div className="link">
        <div className="nav">
        <Link className='anchor' to='/profile'>My Account</Link>
        <Link className='anchor' to='/signup'>Sign Up</Link>
        <Link className='anchor' to='/cart'>Cart</Link>
        <Link className='anchor' to='/fav'>Wishlist</Link>
        <Link className='anchor' to='/'>Home</Link>
        </div>
      </div>
      <div className="Socials">
        <h3 className='head'>Our Socials</h3>
        <FaFacebookF className='socialIcon'/>
        <FaInstagram className='socialIcon'/>
        <FaXTwitter className='socialIcon'/>
        <FaLinkedinIn className='socialIcon'/>
      </div>
      
    </div>
  )
}

export default Footer
