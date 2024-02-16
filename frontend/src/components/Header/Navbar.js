import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart3 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
import { Input } from 'antd';
import '../CSS/Nav.css';
import { motion, AnimatePresence } from 'framer-motion';


const Navbar = () => {
  const { Search } = Input;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <AnimatePresence>
        <nav className={`navbar navbar-expand-lg ${isMenuOpen ? 'navbar-open' : ''}`}>
          <motion.div whileHover={{ scale: 1.1 }} className="navbar-brand" >TrendCart</motion.div>
          <button className="navbar-toggler" onClick={toggleMenu} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">{isMenuOpen ? (<RxCross1 style={{ fontSize: '30px', textAlign: 'center' }}></RxCross1>) : (<IoMenu style={{ fontSize: '30px', textAlign: 'center' }}></IoMenu>)}</span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ""}`} id="navbarSupportedContent">
            <ul className="center navbar-nav mr-4">
              <li className="home nav-item active">
                <Link to="/" className=" anchor nav-link">Home </Link>
              </li>
              <li className="nav-item active">
                <Link to="/about" className="anchor nav-link">About Us</Link>
              </li>
              <li className="nav-item active">
                <Link to="/contact" className="anchor nav-link">Contact </Link>
              </li>
              <li className="nav-item active">
                <Link to="/signup" className="anchor nav-link" >Sign Up </Link>
              </li>

            </ul>
            <div className="right">
              <Search className='search' placeholder="Search" style={{ maxHeight: '40px' }} color='green' enterButton />
              <div className="icons">
                <Link to='/fav'> <CiHeart className='icon acc'></CiHeart></Link>
                <Link to='/cart'> <BsCart3 className='icon acc'></BsCart3></Link>
                <Link to='/profile'> <CiUser className='icon acc'></CiUser></Link>
              </div>
            </div>
          </div>
        </nav>
      </AnimatePresence>
    </div>
  )
}

export default Navbar
