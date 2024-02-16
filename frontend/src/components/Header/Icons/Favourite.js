import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import Context from '../../../Context';
import '../../CSS/Cart.css'
import FavCard from './FavCard';
import { toast } from 'sonner';


const Fav = () => {

    const context = useContext(Context);
    const { favProd, getFavProd, addProd } = context;

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getFavProd();
        }
    }, [])

    const moveToCart = () => {
        // Assuming favProd is an array of products
        favProd.forEach(product => {
            // Destructure product details
            const { title, image, price } = product;
    
            // Call addProd for each product
            addProd(title, image, price);
        });
        toast.success("All Products Moved To Cart");
    };


    const productsJson = favProd.map((product) => {
        return {
            id: product._id,
            name: product.title,
            image: product.image,
            price: product.price,
        };
    });


    return (
        <div className='external'>
            {favProd.length === 0 ?
                (
                    <h1 className='mx-auto my-auto cartmain'>Your Wishlist is Empty <br /> Please Add Some Products in Your Wishlist</h1>
                )
                :
                (
                    <>
                        <button onClick={moveToCart} className='btn btn-success fav'>Add All To Cart</button>
                        <div className="header favHeader">
                            <div id='favproduct' className="favTitle">Product</div>
                            <div id='favprice' className="favTitle">Price</div>
                        </div>
                        <div className="cartCards">
                            {productsJson.map((card) => (

                                <FavCard key={card.id} {...card} />

                            ))}
                        </div>
                    </>
                )
            }

        </div >
    )
}

export default Fav
