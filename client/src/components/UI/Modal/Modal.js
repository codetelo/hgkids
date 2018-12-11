import React from 'react';
import './Modal.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <div
     className={"Modal " + props.nameClass }
     style={{
         transform:props.show ? 'translateY(0)' : 'translateY(-100vh)',
         opacity: props.show ? '1' : '0',
         width: props.width,
         height: props.height
     }}
     >
        {props.children}
    </div>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
    </Aux>
    
);

export default modal;