import React, { useContext } from 'react';
import './Product.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from '@material-ui/core';
import { ProductContext } from './ProductProvider';

function Product({id, tittle,description, image, price, exactPrice}) {

    const [{basket}, dispatch] = useContext(ProductContext)

    const handleAdd = (event) =>{
        event.preventDefault()
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                tittle: tittle,
                description: description,
                image: image,
                price: price,
                exactPrice: exactPrice
            }
        })
    }

    return (
        <div className='product'>
            <div className='product_container'>
                <img
                    src={image}
                    alt='GUCCI'
                />
                <div className='product_details'>
                    <h4>{tittle}</h4>
                    <p>{description}</p>
                    <div className='product_price'>
                        <p><strong><small>Rs.</small>{price}</strong></p>
                        <p><s><small>Rs.</small>{exactPrice}</s></p>
                    </div>
                    <div className='product_buttons'>
                        <Button variant='outlined'>WISHLIST</Button>
                        <Button variant='outlined' onClick={handleAdd}>Add to Cart</Button>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default Product
