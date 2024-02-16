import { useState } from "react";
import React from "react";
import Context from './Context'


const ProdContext = (props) => {

    const localhost = process.env.REACT_APP_BACKEND_URL;
    const prodInitial = [];
    const favprodInitial = [];
    const [name, setname] = useState('');

    const [prod, setprod] = useState(prodInitial);

    const [favProd, setFavProd] = useState(favprodInitial);

    const getUser = async () => {

        const response = await fetch(`${localhost}/api/auth/getuser`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token'),
            }
        });
        const json = await response.json();
        setname(json);
    }


    const addProd = async (title, image, price) => {
        const response = await fetch(`${localhost}/api/products/addproducts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, image, price }),
        })
        const json = await response.json();
        setprod(prod.concat(json));
    }

    const getProd = async () => {
        const response = await fetch(`${localhost}/api/products/fetchallproducts`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setprod(json);
    }

    const deleProduct = async (id) => {
        const response = await fetch(`${localhost}/api/products/deleteproduct/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        const newProds = prod.filter((prods) => { return prods._id !== id })
        setprod(newProds);
    }

    const updateProduct = async (id, qty) => {
        const response = await fetch(`${localhost}/api/products/updateproduct/${id}`, {
            method: 'PUT',
            headers: {
                'auth-token': localStorage.getItem('token'),
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ count: qty })
        });

    }

    const addFavProd = async (title, image, price) => {
        const response = await fetch(`${localhost}/api/products/addfavproducts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, image, price }),
        })
        const json = await response.json();
        setFavProd(favProd.concat(json));
    }

    const getFavProd = async () => {
        const response = await fetch(`${localhost}/api/products/fetchallfavproducts`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        })
        const json = await response.json();
        setFavProd(json);
    }

    const deleFavProduct = async (id) => {
        const response = await fetch(`${localhost}/api/products/deletefavproduct/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json();
        const newProds = favProd.filter((prods) => { return prods._id !== id })
        setFavProd(newProds);
    }

    return (
        <Context.Provider value={{ prod, getProd, addProd, getUser, name, deleProduct, addFavProd, getFavProd, deleFavProduct, favProd, setFavProd, updateProduct }}>
            {props.children}
        </Context.Provider>
    )
}
export default ProdContext;

