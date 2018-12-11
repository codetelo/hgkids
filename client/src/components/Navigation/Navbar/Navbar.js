import React from 'react';
import './Navbar.css';
import Logo from '../../UI/Logo/Logo';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import shoppingCart from '../../../assets/iconfinder_shopping-cart_216477.png';


const navbar = (props) => (
    <Aux>
        <header className={"Navbar"}>
            <span onClick={props.click} className={"MenuIcon"}>
            <div></div>
            <div></div>
            <div></div>
            </span>
            <Logo />
            <span onClick={props.cartOpen} className={"CartButton"}><img alt={"Cart"} className={"CartButton"} src={shoppingCart} /></span>
        </header>
        
        
    </Aux>

        )
        
export default navbar;