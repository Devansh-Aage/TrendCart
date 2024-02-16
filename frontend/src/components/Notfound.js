import React from 'react'
import notF from '../components/assets/notF.png'
import { Link } from 'react-router-dom';
import './CSS/Auth.css';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from './Tilt'


const Notfound = () => {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: '0%' }} exit={{ opacity: 0, y: '100%' }} transition={{ duration: 0.4, ease: 'easeIn' }} className='back' style={{ display: 'flex', marginTop: "40px" }}>
        <div className='notfimg'>
          <Tilt image={notF} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '0px' }}>
          <p className='bigtext'>404 Not Found</p>
          <p className='smalltext'>Oops! It Seems You Follow Backlink</p>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}><motion.button whileHover={{ scale: '1.1' }} whileTap={{ rotate: '10deg', scale: '1.2' }} className='btn btn-success mt-3 notFbtn'>Home</motion.button></Link>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Notfound
