import React from 'react';
import './Footer.css';

const footer = ()=>{
    

    return(
        <div className="Footer">
            <ul>
                <li>Our shop</li>
                <li><a href="/">All products</a></li>
                <li><a href="/">Tops</a></li>
                <li><a href="/">Bottoms</a></li>
                <li><a href="/">Shoes</a></li>
                <li><a href="/">Accessories</a></li>
                <li><a href="/">Jackets</a></li>
            </ul>
            <ul>
                <li>About Us</li>
                <li><a href="/">Contact</a></li>

            </ul>
            <ul>
                <li>Get in Touch</li>
                <li>Let us know what you want!</li>
                <li>Call us at <br/>765-404-5618</li>
                <li>Email us at <br/><span>caitlin@homegrownkids.com</span> </li>
            </ul>
            <ul>
                <li>Our Mission</li>
                <li>We want to expand the fashion options for kids.</li>
            </ul>
        </div>
    );
}

export default footer;