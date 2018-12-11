import React from 'react';
import ClothingItem from './ClothingItem/ClothingItem';
import './Clothing.css';
import {CSSTransition} from 'react-transition-group';


const clothing = (props) => {
   
    let newClothes = [...props.clothes]
        .map(clothKey => {
                return <CSSTransition
                    key={clothKey._id}
                    in={props.appear}
                    exit={props.disappear}
                    appear={props.appear}
                    mountOnEnter
                    unmountOnExit
                    timeout={500}
                    classNames="slide"
                >
                <ClothingItem 
                category={clothKey.category} 
                key={clothKey._id} 
                title={clothKey.title}
                brand={clothKey.brand}
                stock={clothKey.stock}
                size={clothKey.sizes}
                price={clothKey.price.toFixed(2)}
                id={clothKey._id}
                click={props.click}
                />
                </CSSTransition>
            })

    if (newClothes.length === 0) {
        newClothes = <p className={"NoItems"}>We don't currently have anything that matches that in our website. Make sure you are in all products or in the category where the clothing would be. You can look things up by name, category, or brand.</p>;
    }

    return (
        <div className={"Clothing"}>
            {newClothes}
        </div>
    )
}

export default clothing;