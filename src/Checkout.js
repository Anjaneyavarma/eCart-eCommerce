import React, { useContext } from 'react'
import { ProductContext } from './ProductProvider'
import Product from './Product'
import { Link } from 'react-router-dom';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { Button } from '@material-ui/core';
import Total from './Total';


function Checkout() {
    const [{basket}, dispatch] = useContext(ProductContext)
    return (
        <div className='checkout'>
            <div className='app_checkout'>
                <Link to='/'>
                    <img
                    className='logo'
                    src='https://ecart.com/assets/images/logos/logo-ecart.svg'
                    alt='logo'
                    />
                </Link>
            </div>
            <div className='display'>

                {basket?.length===0?(
                    <div className='display_empty'>
                        <h3>Your eCart is empty</h3>
                        <Link className='link_Home' to='/'>
                            <Button variant='outlined'>Shop Now</Button>
                        </Link>
                    </div>
                ):(
                             basket.map((item)=>(
                                <CheckoutProduct
                                    id={item.id} 
                                    tittle={item.tittle}
                                    image={item.image}
                                    description={item.description}
                                    price={item.price}
                                    exactPrice={item.exactPrice}
                                />))
                                
                )}
            </div>
            <div>
                    {basket?.length > 0 && (
                        <Total/>
                    )}
            </div>
        </div>
    )
}

export default Checkout
