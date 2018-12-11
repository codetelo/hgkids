import React from 'react';
import './Cart.css';

const cart = (props) => {
    let totalPrice = 0;
    const cartItems = Object.keys([...props.items])
        .map(itemKey => {
            return [...Array(itemKey)].map((_, i) => {
                totalPrice += props.items[itemKey].price;
                return <div className="FullItem"  key={itemKey}>
                    <div className={"CartContainer"}>
                        <div className="CartItemContainer">
                            <p className={"CartItem"} onClick={() => { props.click(props.items[itemKey].id) }}>{props.items[itemKey].title}</p>
                            <p>{props.items[itemKey].price}</p>
                        </div>
                        <p onClick={() => { props.remove(itemKey) }} className={"Remove"}>Remove</p>
                    </div>
                    <p className={"ItemSize"}>Size {props.items[itemKey].size}</p>
                </div>
            })
        })
    const zeroMessage = <div className="ZeroMessage">Please add some things to your cart.</div>;
    let zero = null;
    if (props.items.length < 1) {
        zero = true;
    } else {
        zero = false;
    }
    return (
        <div className={"Cart"}>

            <h3 className={"CartTitle"}>Your Cart</h3>
            <div className={"CartExit"} onClick={props.cancel}></div>
            <div className={"Price"}>
                <div className={"CartItems"}>
                    {!zero ? cartItems : zeroMessage}
                </div>

                {zero ? null : <hr />}
                {zero ? null : <div className={"CartContainer"}>
                    <p><strong>Total</strong></p>
                    <p>{totalPrice.toFixed(2)}</p>
                </div>}
                {zero ? null : <div className={"CartContainer"}>
                    <p className={"CartCancel"} onClick={props.cancel}>Cancel</p>
                    <p className={"CartCancel"} onClick={() => { props.continue(totalPrice.toFixed(2)) }}>Continue</p>
                </div>}
            </div>

        </div>
    )
}

export default cart;