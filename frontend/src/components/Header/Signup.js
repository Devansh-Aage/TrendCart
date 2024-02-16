import React from 'react'
import sign from '../assets/sign.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as faEyeRegular, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../CSS/Auth.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom'
import Tilt from '../Tilt'
import { toast } from 'sonner';

const backendURl =process.env.REACT_APP_BACKEND_URL

const Signup = (props) => {
  const history = useNavigate();

  const [showPassword, setShowPassword] = useState(false);;

  const [credentials, setCredentials] = useState({ username: '', email: '', password: '' });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${backendURl}/api/auth/createuser`, {

      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: credentials.username, email: credentials.email, password: credentials.password })
      // body data type must match "Content-Type" header
    });
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken)
      toast.success("Account Created Successfully");
      history("/login");
    }
    else {
      toast.error("Email Already In Use !");
    }

  }


  return (
    <AnimatePresence>
      <motion.div className='back'
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 1, x: '-100%' }}
        transition={{ duration: 0.7, ease: "easeInOut" }}>
        <div className='sImg'>
          <Tilt image={sign}></Tilt>
        </div>
        <div className='form'>
          <form className='mr-3' onSubmit={handleSubmit}>
            <div className='title'>Sign Up</div>
            <div className="form-group " >
              <label htmlFor="username" className='text'>Username</label>
              <input type="text" onChange={onChange} className="input form-control" id="username" name='username' aria-describedby="emailHelp" placeholder="Enter Username" required />
            </div>
            <div className="form-group " >
              <label htmlFor="email" className='text'>Email address</label>
              <input type="email" onChange={onChange} className="input form-control" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password" className='text'>Password</label>
              <div style={{ position: 'relative' }}>
                <input type={showPassword ? 'text' : 'password'} onChange={onChange} className="input form-control" id="password" name='password' minLength={6} placeholder="Enter Password" required autoComplete="current-password" />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEyeRegular}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    cursor: 'pointer',
                  }}
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <motion.button whileHover={{ scale: '1.1', transition: { ease: 'easeInOut', duration: 1 } }} whileTap={{ rotate: '10deg', scale: '1.2' }} type="submit" className="signupBtn btn-success mt-3">Sign Up</motion.button>
          </form>
          <div className="d-flex mt-3">
            <div className='mr-1'>Already a customer?</div>
            <Link to='/login' className='link'>Login</Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Signup
