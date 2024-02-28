import React from 'react'
import CurrencyFormat from "react-currency-format";
import './Subtotal.css'
import { useStateValue } from '../../StateProvider/StateProvider';
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal =(basket)=>{
basket?.reduce((amount,item)=>item.price+amount,0); 
  }
  return (
    <div className="subtotal">
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            {/* Part of the homework */}
            Subtotal({basket.length} item) : <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift  </small>
        
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)} // Part of the homework
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />

    <button >Proceed to Checkout</button>
  </div>
  )
}

export default Subtotal