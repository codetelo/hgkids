import React from 'react';
import './ModalData.css';
import Button from '../../UI/Button/Button';

const modalData = (props) => {
    if (props.itemId === null) {
        return null;
    } else {
        const items = [...props.items];
        
        const item = items.filter(item => {
            return item._id === props.itemId;
        });
        let clothingSize = item[0].sizes[0];
        

        const addActive = (e) => {
            removeActive();
            clothingSize = e.target.innerHTML;
            sml(item, clothingSize);
            e.target.classList.add("Active");
        }
        const removeActive = () => {
            var elems = document.getElementsByClassName("SizeSelectItem");
            [].forEach.call(elems, (elem) => {
                elem.classList.remove("Active");
            })
        }
        const resetActive = () => {
            removeActive();
            var firstElem = document.getElementsByClassName("SizeSelectItem")[0];
            firstElem.classList.add("Active");
            clothingSize = item[0].sizes[0];
        }

        let sizeIndex;
        
        const sml = (item, clothingSize) => {
            if(item[0].sizes.indexOf(parseInt(clothingSize)) !== -1){
                return sizeIndex = item[0].sizes.indexOf(parseInt(clothingSize))
            }else{
                return sizeIndex = item[0].sizes.indexOf(clothingSize);
            }
            
        }
        sml(item,clothingSize);

        return (
            <div className={"ModalData"}>
                <div className={"ModalDataExit"} onClick={() => { props.cancel() }}></div>
                <div className={"ModalDataContainer"}>
                    <img src={'https://via.placeholder.com/250'} alt={item[0].title} />
                    <div className={"ModalDataItems"}>
                        <h3>{item[0].title}</h3>
                        <p>${item[0].price}</p>
                        <p>Brand: {item[0].brand}</p>
                        <div className="SizeSelect">
                            {item[0].sizes.map((size, i) => {
                                let first = null;
                                if (i === 0) {
                                    first = true
                                } else {
                                    first = false
                                }
                                return <div onClick={addActive} className={"SizeSelectItem " + (first ? "Active" : null)} key={size} value={size}>{size}</div>
                            })}
                        </div>
                        <p>In Stock: {item[0].stock}</p>
                    </div>
                </div>


                <div className="ButtonContainer">
                    <Button btnType="Danger" style={{ float: "left" }} clicked={props.cancel}>Cancel</Button>
                    <Button btnType="Success" style={{ float: "right" }} clicked={() => { 
                        resetActive();
                        props.addToCart(item[0], sizeIndex) }}>Add to cart!</Button>
                </div>
            </div>
        )
    }




}






export default modalData;