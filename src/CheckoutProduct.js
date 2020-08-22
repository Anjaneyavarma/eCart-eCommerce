import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import './CheckoutProduct.css';
import { ProductContext } from './ProductProvider';

function CheckoutProduct({id, tittle,description, image, price, exactPrice}) {
    const [{basket}, dispatch] = useContext(ProductContext)

    const handleRemove=(event)=>{
        event.preventDefault()
        dispatch({
            type: 'REMOVE',
            id:id
        });
    }



    return (
        <div className='CheckoutProduct'>
            <div className='checkout_container'>
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
                    <div className='product_add'>
                        <button>-</button>
                        <h5>1</h5>
                        <button>+</button>
                    </div>
                    <div className='product_action'>
                        <Button variant='outlined' onClick={handleRemove}>Remove from cart</Button>
                    </div>                  
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
