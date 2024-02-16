import React from 'react'
import '../../CSS/Cart.css'
import { useContext } from 'react';
import { MdDeleteOutline } from "react-icons/md";
import Context from '../../../Context';
import {  toast } from 'sonner';

const FavCard = (props) => {

    const context = useContext(Context);
    const { deleFavProduct } = context;

    const { id, name, image, price } = props;

    const deleteP = () => {
        deleFavProduct(id);
        toast.error(`${name} Removed From Wishlist`);
    }

    return (
        <div key={id} className='products'>
            <div className="favproduct">
                <img src={image} className='favprodImg' alt="" />
                <p className='favprodName'>{name}</p>
            </div>
            <div className="cardPrice">&#8377;{price}</div>
            <div onClick={deleteP} className="delete"><MdDeleteOutline /></div>
        </div>
    )
}

export default FavCard;