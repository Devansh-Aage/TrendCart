import React from 'react'
import '../../CSS/Cart.css'
import { useState } from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { InputNumber, Space } from 'antd';
import { MdDeleteOutline } from "react-icons/md";
import { useEffect } from 'react';
import Context from '../../../Context';
import { toast } from 'sonner';

const Card = (props) => {
    const { id, name, image, price, onQuantityChange, count } = props;
    const Ref = useRef(1);

    const context = useContext(Context);
    const { prod, deleProduct, updateProduct } = context;
    const [subTotal, setSubTotal] = useState(0);
    const [Total, setTotal] = useState(0);


    useEffect(() => {
        // Call onQuantityChange to update the total amount when the component mounts
        let cartsubTotal = 0;
        prod.map((item) => (cartsubTotal += item.price * item.count))
        setTotal(cartsubTotal);
        console.log(cartsubTotal);
        onQuantityChange(subTotal, cartsubTotal);
        setSubTotal(count*price);
    }, [prod, count]);


    const deleteP = () => {
        deleProduct(id);
        toast.error(`${name} Removed From Cart`);
    }

    const [quantity, setQuantity] = useState(1);

    const onChange = (value) => {
        let cartsubTotal = 0;
        prod.map((item) => (cartsubTotal += item.price * item.count))
        setTotal(cartsubTotal);
        setQuantity(value);
        const newSubtotal = value * price;
        onQuantityChange(newSubtotal, cartsubTotal);
        updateProduct(id, value);
        setSubTotal(newSubtotal)
    };


    return (
        <div key={id} className='products'>
            <div className="product">
                <img src={image} className='prodImg' alt="" />
                <p className='prodName'>{name}</p>
            </div>
            <div className="cardPrice">&#8377;{price}</div>
            <div className="quantity">
                <Space wrap>
                    <InputNumber ref={Ref} min={1} max={100000} defaultValue={count} onChange={(value)=> onChange(value)} />
                </Space>
            </div>
            <div className="subtotal">&#8377;{subTotal}</div>
            <div onClick={deleteP} className="delete"><MdDeleteOutline /></div>
        </div>
    )
}

export default Card;