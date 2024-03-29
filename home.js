import React, { useEffect, useState } from "react";
import './home.css';
import { Link } from "react-router-dom";
import Homeproduct from "./home_product";
import { FaEye, FaHeart, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaCartArrowDown } from "react-icons/fa";



// Trending Product
const Home = ({addtocart}) => {
    const [trendingProduct, setTrendingProduct] = useState(Homeproduct);

    //Product category
    const [newProduct, setNewProduct] = useState([]);
    const [featuredProduct, setFeaturedProduct] = useState([]);
    const [topProduct, settopProduct] = useState([]);



    //filter the trending product
    const filtercate = (x) =>
    {
    const filterproduct = Homeproduct.filter((curElm) => 
    {
       return curElm.type === x
    })
    setTrendingProduct(filterproduct)
    }

    //All trending product
    const allTrendingProduct = () =>
    {
        setTrendingProduct(Homeproduct)
    }
    // Product Type
    useEffect(() =>
    {
        productcategory()
    })
    const productcategory = () => 
    {
        //New product
        const newcategory = Homeproduct.filter((x) =>
        {
            return x.type === 'new'
        }
        )
        setNewProduct(newcategory)

        //Featured product
        const featuredcategory = Homeproduct.filter((x) =>
        {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)

        //Top product
        const topcategory = Homeproduct.filter((x) => 
        {
            return x.type === 'top'
        })
        settopProduct(topcategory)
    }

    
    
    return (
        <>
        <div className="home">
            <div className="top_banner">
                <div className="contant">
                    <h3>Silver aluminum</h3>
                    <h2>Apple watch</h2>
                    <p>30% off at your first order</p>
                    <Link to='/shop' className="link">Shop Now</Link>
                </div>
            </div>
            <div className="trending">
                <div className="container">
                    <div className="left_box">
                        <div className="header">
                             <div className="heading">
                                <h2 onClick={() => allTrendingProduct()}>Trending product</h2>
                             </div>
                             <div className="cate">
                                <h3 onClick={() => filtercate('new')}>New</h3>
                                <h3 onClick={() => filtercate('featured')}>featured</h3>
                                <h3 onClick={() => filtercate('top')}>Top selling</h3>
                             </div>
                        </div>
                        <div className="products">
                            <div className="container">
                                 {
                                    trendingProduct.map((curElm) =>
                                    {
                                        return(
                                            <>
                                            <div className="box">
                                                <div className="img_box">
                                                    <img src={curElm.image} ></img>
                                                    <div className="icon">
                                                        <div className="icon_box">
                                                        <FaEye />
                                                        </div>
                                                        <div className="icon_box">
                                                        <FaHeart />                                                        </div>
                                                    </div>
                                                </div>
                                             
                                            <div className="info">
                                                 <h3>{curElm.Name}</h3>
                                                 <p>₹: {curElm.price}</p>
                                                 <button className="btn" onClick={() => addtocart(curElm)}>Add to cart</button>
                                            </div>
                                            </div>
                                            </>
                                        )
                                    }
                                    )
                                 }
                            </div>
                            <button>Show More</button>
                        </div>
                    </div>
                    <div className="right_box">
                         <div className="right_container">
                            <div className="testimonial">
                                <div className="head">
                                    <h3>our testmonial</h3>
                                </div>
                                <div className="detail">
                                    <div className="img_box">
                                        <img src="image/girl.jpg" alt="testmonial"></img>
                                    </div>
                                    <div className="info">
                                     <h3>stephan robot</h3>
                                     <h4>web designer</h4>
                                     <p>A web designer creates the layout and design of a website.
                                         In simple terms, a website designer makes a site look good.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="newsletter">
                                  <div className="head">
                                    <h3>News Letter</h3>
                                  </div>
                                  <div className="form">
                                    <p>Join our mailing list</p>
                                    <input type="email" placeholder="E-mail" autoComplete="off"></input>
                                    <button>subscribe</button>
                                    <div className="icon_box">
                                        <div className="icon">
                                        <FaFacebookF />
                                        </div>
                                        <div className="icon">
                                        <FaTwitter />
                                        </div>
                                        <div className="icon">
                                        <FaInstagram />
                                        </div>
                                        <div className="icon">
                                        <FaYoutube />
                                        </div>
                                    </div>
                                  </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className="banners" >
                <div className="container">
                    <div className="left_box">
                        <div className="box">
                            <img src="image/speaks.jpg" alt="banner" ></img> 
                            </div>
                            <div className="box">
                            <img src="image/big.jpg" alt="banner" ></img>
                            </div>
                            </div>
                            <div className="right_box">
                                <div className="top">
                            <img src="image/beats.avif" alt="" ></img>
                            <img src="image/apple.jpg" alt="" ></img>
                            </div>
                            
                            <div className="bottom">
                            <img src="image/ec.jpg" alt="" ></img>
                            </div>
                            <div>

                        </div>
                    </div>
                   
                </div>
            </div>
             <div className="product_type">
                <div className="container">
                    <div className="box">
                <div className="header">
                    <h2>New Product</h2>
                </div>
                {
                    newProduct.map((curElm) =>
                    {
                        return (
                            <>
                             <div className="productbox">
                                <div className="img-box">
                                    <img src={curElm.image} alt=""></img>
                                </div>
                                <div className="detail">
                                    <h3>{curElm.Name}</h3>
                                    <p>₹:{curElm.price}</p>
                                    <div className="icon">
                                    <button><FaEye /></button>
                                    <button> <FaHeart /> </button>
                                    <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                    </div>
                                </div>
                             </div>
                            </>
                        )
                    }
                    )
                }
                </div>
                <div className="box">
                <div className="header">
                    <h2>Featured Product</h2>
                </div>
                {
                    featuredProduct.map((curElm) =>
                    {
                        return (
                            <>
                             <div className="productbox">
                                <div className="img-box">
                                    <img src={curElm.image} alt=""></img>
                                </div>
                                <div className="detail">
                                    <h3>{curElm.Name}</h3>
                                    <p>₹:{curElm.price}</p>
                                    <div className="icon">
                                    <button><FaEye /></button>
                                    <button> <FaHeart /> </button>
                                    <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                    </div>
                                </div>
                             </div>
                            </>
                        )
                    }
                    )
                }
                </div>
                <div className="box">
                <div className="header">
                    <h2>Top Product</h2>
                </div>
                {
                    topProduct.map((curElm) =>
                    {
                        return (
                            <>
                             <div className="productbox">
                                <div className="img-box">
                                    <img src={curElm.image} alt=""></img>
                                </div>
                                <div className="detail">
                                    <h3>{curElm.Name}</h3>
                                    <p>₹:{curElm.price}</p>
                                    <div className="icon">
                                    <button><FaEye /></button>
                                    <button> <FaHeart /> </button>
                                    <button onClick={() => addtocart (curElm)}><FaCartArrowDown /></button>
                                    </div>
                                </div>
                             </div>
                            </>
                        )
                    }
                    )
                }
                </div>
                </div>
            </div> 
        </div>
        </>
    )
}

export default Home;