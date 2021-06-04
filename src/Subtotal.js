import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css";
import {useStateValue} from "./StateProvider";
import {getBasketTotal} from "./reducer"
import { useHistory } from 'react-router';
function Subtotal() {
const history=useHistory();
    const[{basket},dispatch]=useStateValue();


    
     
    return (
        <div className="subtotal">
        
 
        <CurrencyFormat
        renderText={(value)=>(
<>
<p>
    Subtotal ({ basket.length} items):
    <strong>{value}</strong>
</p>
<small className="subtotal__gift">
    <input  type="checkbox" />this is a gift
</small>
</>
        )}

        decimalscale={2}
        value={getBasketTotal(basket)}
    
        displayType={'text'}
        thousandSeperator={true}
        prefix={"$"}




        />
            <button onClick={e=>history.push('/payment')}>Proceed To Chechout</button>
        </div>
    )
}

export default Subtotal;



