import React from "react";
import './footer.css';
import { FaPiggyBank, FaShippingFast, FaHeadphones, FaWallet } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon_box">
                        <FaPiggyBank />
                        </div>
                        <div className="detail">
                            <h3>Great Saving</h3>
                            <p>It is a e-commerce project</p>
                        </div>
                        </div>
                        <div className="box">
                        <div className="icon_box">
                        <FaShippingFast />
                        </div>
                        <div className="detail">
                            <h3>Free Delivary</h3>
                            <p>It is a e-commerce project</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                        <FaHeadphones />
                        </div>
                        <div className="detail">
                            <h3>24*7 Support</h3>
                            <p>It is a e-commerce project</p>
                        </div>
                    </div>
                <div className="box">
                        <div className="icon_box">
                        <FaWallet />
                        </div>
                        <div className="detail">
                            <h3>Money Back</h3>
                            <p>It is a e-commerce project</p>
                        </div>
                    </div>
                 </div>
                 <div className="right_box">
                    <div className="header">
                        <img src="image/ll.jpg" alt="" ></img>
                        <p>I just try this E-commerce website</p>
                    </div>
                    <div className="bottom">
                        <div className="box">
                            <h3>Your Account</h3>
                            <ul>
                                <li>About us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Order</li>
                                <li>New Product</li>
                                <li>Old Product</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Contact us</h3>
                            <ul>
                                <li>4005, Silver Business Point India</li>
                                <li>9945494672</li>
                                <li>ranjitharanju0705@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
        </>
    )
}

export default Footer;