import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from './StateProvider';

function Checkout() {

  const[{basket,user},dispatch]=useStateValue();
    return (
        <div className="checkout">
           <div className="checkout__left">
             <img className="checkout__ad"
           src="https://images-na.ssl-images-amazon.com/images/G/01/img17/prime/other/1053033_us_prime_dex_vxd-1060_DEX_LP_Banner_DT_v1.png" ></img>

           <div>
           <h3>hello {user?.email}</h3>
           {/* here we are using ? bcaz to avoid some errors */}
              <h2 className="checkout__title">Your Shopping Basket</h2>

             {basket.map((item)=>(
               <CheckoutProduct
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 price={item.price}
                 rating={item.rating}

               />
             ))}
           </div>

           </div>

           <div className="checkout__right">
<Subtotal></Subtotal>
              
           </div>
        </div>
    )
}

export default Checkout
