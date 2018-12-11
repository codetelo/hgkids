import React from 'react';
import './NavbarItems.css';
import NavbarItem from './NavbarItem/NavbarItem';

const navbarItems = (props) => (
    <ul className={"NavbarItems"}>
        <div className={"Exit"} onClick={props.close}></div>
        <NavbarItem showProducts={props.showProducts} cancel={props.close} category={"all"}>All Products</NavbarItem>
        <NavbarItem showProducts={props.showProducts}  cancel={props.close} category={"tops"}>Tops</NavbarItem>
        <NavbarItem showProducts={props.showProducts} cancel={props.close} category={"bottoms"}>Bottoms</NavbarItem>
        <NavbarItem showProducts={props.showProducts} cancel={props.close} category={"shoes"}>Shoes</NavbarItem>
        <NavbarItem showProducts={props.showProducts} cancel={props.close} category={"accessories"}>Accessories</NavbarItem>
        <NavbarItem showProducts={props.showProducts} cancel={props.close} category={"jackets"}>Jackets</NavbarItem>
        

    </ul>
)

export default navbarItems;