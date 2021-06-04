import React from 'react'
import "./Home.css";
import Product from "./Product"
function Home() {
    return (


<div className="home">
<div className="home__container">
  <img
    className="home__image"
    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB667972819_.jpg"
    alt=""
  />

  <div className="home__row">
    <Product
      id="12321341"
      title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
      price={11.96}
      rating={5}
      image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ5pI7mql9i4okRJaroh8x4wH6X6rE9YKIjMazLQJkJGXjh8UfJz44_NCVeVOoaR80gKDgAr6s_TV2yY9NqZ7_QDWnn8hqoOK3TNQ2zmwrL&usqp=CAE"
    />
    <Product
      id="49538094"
      title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
      price={239.0}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
    />
  </div>

  <div className="home__row">
    <Product
      id="4903850"
      title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
      price={199.99}
      rating={3}
      image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
    />
    <Product
      id="23445930"
      title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
      price={98.99}
      rating={5}
      image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
    />
    <Product
      id="3254354345"
      title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
      price={598.99}
      rating={4}
      image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
    />
  </div>

  <div className="home__row">
    <Product
      id="90829332"
      title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
      price={1094.98}
      rating={4}
      image="https://m.media-amazon.com/images/I/81t2A6uhm4L._AC_SS450_.jpg"
    />
  </div>
</div>
</div>
    )
};
export default Home;

