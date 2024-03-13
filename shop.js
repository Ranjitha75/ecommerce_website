import React, { useState } from "react";
import './shop.css';
import { FaHeart, FaEye } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    //Toggle product details
    const [showDetail, setShowDetail] = useState(false);
    //Detail page data
    const [detail, setDetail] = useState([]);
    //Showing detail box
    const detailpage = (product) =>
    {
        const detaildate = ([{product}])
        const productdetail = detaildate[0]['product']
        //console.log(productdetail);
        setDetail(productdetail)
        setShowDetail(true)
    }
    const closedetail = () =>
    {
        setShowDetail(false)
    }


    return (
        <>
        {
            showDetail ?
            <>
            <div className="product_detail">
                <button className="close_btn" onClick={closedetail}><IoMdClose /></button>
                <div className="container">
                    <div className="img_box">
                        <img src={detail.image} alt=""></img>
                    </div>
                    <div className="info">
                        <h4># {detail.cat}</h4>
                        <h2>{detail.Name}</h2>
                        <p>A screen everyone will love: whether your family is streaming or vedio chatting with friends tablet A8...........</p>
                        <h3>₹: {detail.price}</h3>
                        <button onClick={() => addtocart (detail)}>Add to cart</button>
                    </div>
                </div>
            </div>
            </>
            : null
        }
        <div className="shop">
            <h2># shop</h2>
            <p>Home . shop</p>
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                              <h3>All categories</h3>
                        </div>
                        <div className="box">
                            <ul>
                                <li onClick={() => allcatefilter ()}># All</li>
                                <li onClick={() => Filter ("bluetooth")}># bluetooth</li>
                                <li onClick={() => Filter ("tv")}># tv</li>
                                <li onClick={() => Filter ("watch")}># watch</li>
                                <li onClick={() => Filter ("mobile")}># mobile</li>
                                <li onClick={() => Filter ("earphone")}># earphone</li>
                                <li onClick={() => Filter ("headphone")}># headphone</li>
                                <li onClick={() => Filter ("laptop")}># laptop</li>
                                <li onClick={() => Filter ("speaker")}># speaker</li>
                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img_box">
                            <img src="image/mac.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
                    <div className="right_box">
                        <div className="banner">
                            <div className="img_box">
                                 <img src="image/phonebanner.avif" alt=""></img>
                            </div>
                        </div>
                        <div className="product_box">
                            <h2>Shop Product</h2>
                            <div className="product_container">
                                {
                                    shop.map((curElm) =>
                                    {
                                        return (
                                            <>
                                            <div className="box">
                                                <div className="img_box">
                                                    <img src={curElm.image} alt=""></img>
                                                    <div className="icon">
                                                    <li><FaHeart /></li>
                                                    <li onClick={() => detailpage (curElm)}><FaEye /></li>
                                                    </div>
                                                </div>
                                                <div className="detail">
                                                    <h3>{curElm.Name}</h3>
                                                    <p>₹: {curElm.price}</p>
                                                    <button onClick={() => addtocart (curElm)}>Add to cart</button>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    })
                                }
                                <div className="box">

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}

export default Shop;