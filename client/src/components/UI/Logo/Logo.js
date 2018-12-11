import React from 'react';
import "./Logo.css";
import Logo from '../../../assets/logo.png'

const logo = (props)=> (
    <div className={"Logo"} style={{height: props.height}}>
        <img src={Logo} alt={"Logo"}/>
    </div>
);

export default logo;