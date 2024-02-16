import { useInView } from 'react-intersection-observer';
import React from 'react'
import { motion } from 'framer-motion';

const SlideInComponent = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });
    
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

export default SlideInComponent;