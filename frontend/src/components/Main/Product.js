import { React, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Rate } from 'antd';
import Context from '../../Context';
import { toast } from 'sonner';
import '../CSS/Product.css'

const Product = () => {
    const { name, price, image, rating, description } = useParams();

    const context = useContext(Context);
    const { addProd } = context;

    const addCart = () => {
        if (localStorage.getItem('token')) {
            addProd(name, image, price);
            toast.success(`${name} Added To Cart`);
        }
        else {
            toast.info("Please Login To Add Product")
        }
    }


    return (
        <div className='prodContainer'>
            <div className="singleImg">
                <img className='singleImg' src={decodeURIComponent(image)} alt="" />
            </div>
            <div className="info">
                <div className='singleName'>{decodeURIComponent(name)} </div>
                <div className='singlePrice'>&#8377;{price}</div>
                <div className='singleRating'><Rate disabled defaultValue={rating} /></div>
                <div className='singleDesc'>{decodeURIComponent(description)}</div>
                <button onClick={addCart} className='btn btn-success singleBtn'>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
