import React from 'react';
import  './NavbarItem.css';

const navbarItem = (props) => (
    <li className={"NavigationItem"}>
        <div onClick={()=>{
            props.showProducts(props.category);
            props.cancel();
        }}>{props.children}</div>
    </li>
)

export default navbarItem;