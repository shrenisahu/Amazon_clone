import React ,{useEffect}from 'react'
import './App.css';
import Header from "./Header"
import Home from "./Home"
import Payment from "./Payment"
import Checkout from "./Checkout"
import Login from "./Login"
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Orders from "./Orders"


const promise=loadStripe( "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL")
function App() {
  const[{basket},dispatch]=useStateValue();


useEffect(() => {
  auth.onAuthStateChanged(authUser=>{
    console.log("user is",authUser);

    if(authUser){
//user is logged in
dispatch({
  type:"SET_USER",
  user:authUser
})
    }
    else{
//logged out
dispatch({
  type:"SET_USER",
  user:null
})
    }

  })
}, [])





  return (
    <Router>

    <div className="app">
    
    <Switch>
    <Route path="/order">
<Orders/>
</Route>


    <Route path="/payment">
    <Header/>
    <Elements stripe={promise}>

<Payment></Payment>
    </Elements>

</Route>

    <Route path="/login">
<Login/>
</Route>

<Route path="/checkout">
<Header/>
<Checkout/>
</Route>

<Route path="/">   
{/* make sure ur default root is at the botton */}
<Header/>
      <Home/>
</Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
