import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import '../../CSS/ProfileCard.css'

const ProfileCards = (props) => {
    const {id, name, image, price} = props;
  return (
    <div>
      <AnimatePresence>
            <div key={id} className="profCard align-items-center">
                <div className='Box'>
                    <div className="imgBox">
                        <motion.img whileHover={{ scale: '1.1', transition: { ease: 'anticipate', duration: 0.6 } }} className="card-img img" src={image} alt="Card image cap" />
                    </div>
                </div>
                <div className="body">
                    <div className="name">{name}</div>
                    <div className="price">&#8377;{price}</div>
                </div>
            </div>
        </AnimatePresence>
    </div>
  )
}

export default ProfileCards
