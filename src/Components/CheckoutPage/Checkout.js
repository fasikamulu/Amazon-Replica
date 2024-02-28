import React from 'react'

import Subtotal from './Subtotal/Subtotal';
import './Checkout.css'
import CheckOutProduct from './CheckOutProduct';
import { useStateValue } from '../StateProvider/StateProvider';

function Checkout() {
const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello</h3>
          <h2 className="checkout__title">Your shopping Basket</h2></div>
          {basket.map(item => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        
      
        <div className="checkout__right">
        <Subtotal />
      </div>
      
    </div>
  )
}

export default Checkout