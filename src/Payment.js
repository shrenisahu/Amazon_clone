


import React,{useState,useEffect} from 'react'
import "./Payment.css"
import CheckoutProduct from './CheckoutProduct';
import {getBasketTotal} from "./reducer"
import CurrencyFormat from 'react-currency-format';
import {Link,useHistory} from  "react-router-dom";
import {useStateValue} from "./StateProvider"
import axios from 'axios'
import { db } from "./firebase";
// import { db } from '../Firebase/firebase';
import { useElements, useStripe,CardElement } from '@stripe/react-stripe-js';
function Payment() {
    const[{basket,user},dispatch]=useStateValue();
    const history=useHistory();

const stripe=useStripe();
const elements=useElements();

const[succeeded,setSucceeded]=useState(false);
const[processing,setProcessing]=useState("");
const[error,seterror]= useState(null);
const[disabled,setDisabled]=useState(true);
const[clientSecret,setClientSecret]=useState(true);

useEffect(() => {
   //generate special stripe secret
   const getClientSecret= async ()=>{

    const response=await axios({
        method:'post',
        //stripe expects total in currency sub units
        url:`/payments/create?total=${getBasketTotal(basket) *100}`
    });
    setClientSecret(response.data.clientSecret)
   }

   getClientSecret();
}, [basket])
console.log("secrest is",clientSecret)

const handleSubmit= async(event)=>{
// some
event.preventDefault();
setProcessing(true);
 const payload=await stripe.confirmCardPayment(clientSecret,{
     payment_method:{
         card:elements.getElement(CardElement)
     }
 }).then(({paymentIntend})=>{
     //paymentIntend==patyment confirmation

db.collection('users')
.doc(user?.uid)
.collection('orders')
.doc(paymentIntend.id)
.set({
    basket:basket,
    amount:paymentIntend.amount,
    created:paymentIntend.created
})

     
     setSucceeded(true)
     seterror(null);
     setProcessing(false)

     dispatch({
         type:"EMPTY_BASKET"
     })
     history.replace('/order')
        
       
 })

}
const handleChange=(event)=>{
   
   
//listen changes in class element
//display errors as
setDisabled(event.empty);
seterror(event.error ? event.error.message:"")

}


    return (
        <div className="payment">
            <div className="payment__container">
<h1>
    Checkout (<Link to="/">{basket?.length} items</Link>)
</h1>
            {/* section 1 */}
            <div className="payment__section">
            <div className="payment__title">
              <h3>Delivey Address</h3>
            </div>
            <div className="payment__address">
                <p>{user?.email}</p>
                <p>itwara bazar masanganj</p>
                <p>amravati maharashtra</p>
            </div>
        
            </div>

{/* 2 */}

            <div className="payment__section">
            <div className="payment__title">
            <h3>Review items and delivery</h3></div>
            <div className="payment__items">
                {/* products */}
                {
                    basket.map(item =>(

                        <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}

               />
                    ))
                }
            </div>

</div>
{/*3  */}
<div className="payment__section">
<div className="payment__tilte"><h3>Payment method</h3></div>
<div className="payment__details">
{/* com ehere */}
<form onSubmit={handleSubmit}>
    <CardElement  onChange={handleChange}></CardElement>
    <div className='payment__priceContainer'>

    <CurrencyFormat
        renderText={(value)=>(
       <>
       <h3>order total :{value}</h3>
       </>
        )}

        decimalscale={2}
        value={getBasketTotal(basket)}
    
        displayType={'text'}
        thousandSeperator={true}
        prefix={"$"}




        />
        <button disabled={processing || disabled || succeeded}>

            <span>{processing? <p>Processing</p>:"Buy now"}</span>
        </button>

    </div>
    {error && <div>{error}</div>}
</form>

</div>
</div>

            </div>
        </div>
    )
}

export default Payment


