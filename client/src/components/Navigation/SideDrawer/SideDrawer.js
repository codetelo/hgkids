import React from 'react';
import NavbarItems from '../Navbar/NavbarItems/NavbarItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../hoc/Auxiliary/Auxiliary';


const sideDrawer = (props) => {
    let toggleClass = "SideDrawer Close";
    if(props.open){
        toggleClass = "SideDrawer Open";
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={toggleClass}>
                <nav>
                    <NavbarItems showProducts={props.showProducts} close={props.closed} />
                </nav>
            </div>
        </Aux>

    );
}

export default sideDrawer;