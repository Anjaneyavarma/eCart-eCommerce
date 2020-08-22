import React, { useContext } from 'react'
import './Total.css';
import { ProductContext } from './ProductProvider';
import { Button } from '@material-ui/core';
import CurrencyFormat from 'react-currency-format';
import { getTotalPrice } from './Reducer';

function Total() {
    const [{basket}, dispatch] = useContext(ProductContext)

    return (
        <div className='Total'>
            <div className='total_count'>
                <h5>Total Items: <strong>{basket?.length}</strong></h5>
                <h5>Total Price:  <strong>
                    <CurrencyFormat
                        decimalScale={2}
                        value={getTotalPrice(basket)} 
                        displayType={'text'} 
                        thousandSeparator={true} 
                        prefix={'Rs'}
                    /> 
                </strong>
                    
                </h5>
            </div>
            
            <div className='proceed'>
                <Button variant='outlined' color='primary'>Proceed to Buy</Button>
            </div>
        </div>
    )
}

export default Total
