import React, { useState } from "react";
import Nav from "./Component/nav";
import {BrowserRouter} from 'react-router-dom';
import Rout from './Component/rout'
import Footer from "./Component/footer";
import Homeproduct from "./Component/home_product";


const App =() => {
  //add to cart
  const [cart, setCart] = useState([]);

  //shop page product
  const [shop, setShop] = useState(Homeproduct);

  //shop search filter
  const [search, setSearch] = useState('');

  //shop category filter
  const Filter = (x) => {
    const catefilter = Homeproduct.filter((product) => 
    {
        return product.cat === x
    }) 
    setShop(catefilter)
  }

  const allcatefilter = () =>
  {
    setShop(Homeproduct)
  }

  //shop search filter
 const searchlength = (search || []).length === 0
 const searchproduct = () =>
{
 if(searchlength) 
 {
  alert("please search something !")
  setShop(Homeproduct)
 }
 else
 {
    const searchfilter = Homeproduct.filter((x) => 
    {
        return x.cat === search
    })
    setShop(searchfilter)
 }
} 

//Add to cart
const addtocart = (product) => 
{
  const exist = cart.find((x) => 
{
  return x.id === product.id
})
if (exist) {
  alert("This product is already added in cart")
} else {
  setCart([...cart, {...product, qty:1}])
  alert("Added to cart")
}
}
console.log(cart)
  
  return (
       <>
       <BrowserRouter>
       <Nav search={search} setSearch={setSearch} searchproduct={searchproduct}/>
       <Rout setCart={setCart} cart={cart} shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart} />
       <Footer />
       </BrowserRouter>
       </>
  )
}

export default App;