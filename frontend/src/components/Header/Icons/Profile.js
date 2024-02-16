import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect, startTransition } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiLogOut } from "react-icons/fi";
import Context from '../../../Context'
import '../../CSS/Profile.css';
import { toast } from 'sonner';
import ProfileCards from './ProfileCards';

const Profile = () => {

    const [username, setusername] = useState('')
    const context = useContext(Context);
    const { getUser, name, prod, getProd } = context;
    const history = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') && !username) {
            getUser(); // Call getUser only once
            getProd();
            setusername(name);
        }
    }, [getUser, getProd]);


    const productsJson = prod.map((product) => {
        return {
            id: product._id,
            name: product.title,
            image: product.image,
            price: product.price,
        };
    });

    const sliderSettings = {
        slidesToShow: 5, // Adjust the number of items to display
        slidesToScroll: 2, // Number of slides to scroll at a time
        infinite: false,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const logout = () => {
        localStorage.removeItem('token');
        toast.error("Logged Out Successfully")
        history('/login');
    }
    
    return (

        <div className='profileBox' style={localStorage.getItem('token') ? { padding: "1% 2% 7% 2%" } : { padding: "3% 2% 13% 2%" }}>
            {localStorage.getItem('token') ?
                <>
                    <div className="container mx-auto">
                        <div className="main">Profile</div>
                        <div className="user">
                            <div className='tag'>Username: </div>
                            <div className="userDetails">{username.name}</div>
                        </div>
                        <div className="user">
                            <div className='tag'>Email: </div>
                            <div className="userDetails">{username.email}</div>
                        </div>
                    </div>
                    <div className="prodCart">
                        {prod.length === 0 ? (<h1></h1>)
                            : (
                            <>
                                <div className='prodInCart'>Products in your cart</div>
                                <div className="slider">
                                    <Slider {...sliderSettings}>
                                        {productsJson.map((card) => (
                                            <div key={card.id}>
                                                <ProfileCards {...card} startTransition={startTransition}/>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </>
                            )}

                    </div>
                    <button onClick={logout} className='mt-4 logout btn btn-danger mx-auto'>Logout <FiLogOut /></button></>
                :
                <h1 className='main'>You are currently logged out. <br />Please Login</h1>}
        </div>
    )
}

export default Profile;
