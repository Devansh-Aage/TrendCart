import React from 'react'
import '../../CSS/Cart.css'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import Context from '../../../Context';
import { toast } from 'sonner';
import { loadStripe } from '@stripe/stripe-js';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Card from './Card'

const backendURl =process.env.REACT_APP_BACKEND_URL

const Cart = () => {
    const context = useContext(Context);
    const [totalAmount, setTotalAmount] = useState(0);
    const { prod, getProd } = context;


    const handleQuantityChange = (subtotal, cartsubTotal) => {
        setTotalAmount((prevTotal) => prevTotal + subtotal); // Update total with the new subtotal
        setTotalAmount(cartsubTotal)
    };


    const productsJson = prod.map((product) => {
        return {
            id: product._id,
            name: product.title,
            image: product.image,
            price: product.price,
            count: product.count
        };
    });

    const coupon=()=>{
        toast.error("Invalid Coupon Code!")
    }


    useEffect(() => {
        if (localStorage.getItem('token')) {
            getProd();
        }
    }, [])


    const payment = async () => {
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

        const body = {
            products: prod
        }

        const headers = {
            "Content-Type": "application/json"
        }

        const response = await fetch(`${backendURl}/api/auth/checkout`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();
        toast.info(`Redirecting To Stripe Payment Gateway`);
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })

        if (result.error) {
            console.error((await result).error);
        }
    }

    return (
        <div className='external'>
            {prod.length === 0 ?
                (
                    <>
                        <h1 className='mx-auto my-auto cartmain'>Your Cart is Empty <br /> Please Add Some Products in Your Cart</h1>
                        <div style={{fontSize:"100px" , color:"rgb(78, 198, 48)", textAlign: "center"}}>
                            <MdOutlineRemoveShoppingCart />
                        </div>
                    </>
                )
                :

                (<>
                    <div className="header">
                        <div id='product' className="cartTitle">Product</div>
                        <div id='price' className="cartTitle">Price</div>
                        <div id='quantity' className="cartTitle">Quantity</div>
                        <div id='subtotal' className="cartTitle">Subtotal</div>
                    </div>
                    <div className="cartCards">
                        {localStorage.getItem('token') ? productsJson.map((card) => (

                            <Card key={card.id} {...card} onQuantityChange={handleQuantityChange} />

                        )) : null}
                    </div>
                    <footer className="footer">
                        <div className="coupon">
                            <Input placeholder="Coupon Code" className='input' />
                            <Button onClick={coupon} style={{ height: '54px' }} type="dashed">Apply Coupon</Button>
                        </div>
                        <div className="totalbox">
                            <>
                                <p className='amount'>Cart Total : </p>
                                <p className='amount'> {totalAmount}</p>
                            </>
                            <button onClick={payment} className='btn btn-success'>Proceed to Checkout</button>
                        </div>

                    </footer>
                </>)
            }

        </div>
    )
}

export default Cart
