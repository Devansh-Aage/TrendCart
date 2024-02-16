import React from 'react'
import { Link } from 'react-router-dom';
import login from '../assets/login.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye as faEyeRegular, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import '../CSS/Auth.css';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from '../Tilt'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner';

const backendURl =process.env.REACT_APP_BACKEND_URL

const Login = () => {

    const history = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [credentials, setCredentials] = useState({ email: '', password: '' })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(`${backendURl}/api/auth/loginuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem('token', json.authtoken)
            toast.success("Login Successful")
            history('/');
        }
        else {
            toast.error(json.error)
            //alert component
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 1, x: '-100%' }}
                transition={{ duration: 0.7, ease: "easeInOut" }} className='back' style={{ paddingBottom: '9%' }} >
                <div className="loginImg">
                    <Tilt image={login}></Tilt>
                </div>

                <div className='form'>
                    <form className='mr-3' onSubmit={onSubmit}>
                        <div className='title'>Login</div>
                        <div className="form-group " >
                            <label htmlFor="email" className='text' >Email address</label>
                            <input type="email" onChange={onChange} className="form-control input" id="email" name='email' aria-describedby="emailHelp" placeholder="Enter email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className='text' >Password</label>
                            <div style={{ position: 'relative' }}>
                                <input type={showPassword ? 'text' : 'password'} onChange={onChange} className="form-control input" id="password" name='password' minLength={6} placeholder="Enter Password" required autoComplete="current-password" />
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
                        <motion.button whileHover={{ scale: '1.1', transition: { ease: 'easeInOut', duration: 0.5 } }} whileTap={{ rotate: '10deg', scale: '1.2' }} type="submit" className="loginBtn btn-success mt-3">Login</motion.button>
                    </form>
                    <div className="d-flex mt-3">
                        <div className='mr-1'>Not Signed Up?</div>
                        <Link to='/signup' className='link'>Sign Up</Link>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Login
