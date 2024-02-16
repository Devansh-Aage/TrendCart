import React, { useContext } from 'react'
import "../CSS/Cards.css"
import { FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { Rate } from 'antd';
import { Link } from 'react-router-dom'
import Context from '../../Context';
import { toast } from 'sonner';


const Cards = (props) => {
    const { id, name, image, price, discount, rating, description } = props;
    const context = useContext(Context);
    const { addProd, addFavProd } = context;


    const addCart = () => {
        if (localStorage.getItem('token')) {
            addProd(name, image, price);
            toast.success(`${name} Added To Cart`);
        }
        else {
            toast.info("Please Login To Add Product")
        }

    }

    const addFav = () => {
        if (localStorage.getItem('token')) {
            addFavProd(name, image, price);
            toast.success(`${name} Added To Wishlist`);
        }
        else {
            toast.info("Please Login To Add Product")
        }
    }

    return (
        <AnimatePresence>
            <div key={id} className="card align-items-center">
                <div className='Box'>
                    <div className="imgBox">
                        <div className="discount">
                            -{discount}
                        </div>
                        <motion.div whileTap={{ rotate: "30deg" }} onClick={addFav} className="heart">
                            <FaHeart />
                        </motion.div>
                        <Link to={`/products/${encodeURIComponent(name)}/${encodeURIComponent(image)}/${price}/${rating}/${encodeURIComponent(description)}`}>
                            <motion.img whileHover={{ scale: '1.1', transition: { ease: 'anticipate', duration: 0.6 } }} className="card-img img" src={image} alt="Card image cap" />
                        </Link>
                    </div>
                    <motion.div onClick={addCart} className='cart'>Add To Cart</motion.div>
                </div>
                <div className="body">
                    <div className="name">{name}</div>
                    <div className="price">&#8377;{price}</div>
                    <div className="rating">
                        <Rate disabled defaultValue={rating} />
                    </div>
                </div>
            </div>

        </AnimatePresence>
    )
}

export default Cards
