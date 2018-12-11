import React, { Component } from 'react';
import './ClothingItem.css';

class ClothingItem extends Component {
    render() {
        let clothing = null;
        switch (this.props.category) {
            case ('Tops'):
                clothing = <div onClick={()=>{this.props.click(this.props.id)}} className={"ClothingItem Tops"}>
                    <img src={'https://via.placeholder.com/250'} alt={this.props.title} />
                    <h3>{this.props.title}</h3>
                    <p>${this.props.price}</p>
                    <p>{this.props.brand}</p>
                    <p>Sizes: {this.props.size.join(', ')}</p>
                    <p>Stock: {this.props.stock}</p>
                    <p>ID: {this.props.id}</p>

                </div>
                break;
            case ('Bottoms'):
                clothing = <div  onClick={()=>{this.props.click(this.props.id)}}  className={"ClothingItem Bottoms"}>
                    <img src={'https://via.placeholder.com/250'} alt={this.props.title} />
                    <h3>{this.props.title}</h3>
                    <p>${this.props.price}</p>
                    <p>{this.props.brand}</p>
                    <p>Sizes: {this.props.size.join(', ')}</p>
                    <p>Stock: {this.props.stock}</p>
                    <p>ID: {this.props.id}</p>
                </div>
                break;
            case ('Shoes'):
                clothing = <div  onClick={()=>{this.props.click(this.props.id)}}  className={"ClothingItem Shoes"}>
                    <img src={'https://via.placeholder.com/250'} alt={this.props.title} />
                    <h3>{this.props.title}</h3>
                    <p>${this.props.price}</p>
                    <p>{this.props.brand}</p>
                    <p>Sizes: {this.props.size.join(', ')}</p>
                    <p>Stock: {this.props.stock}</p>
                    <p>ID: {this.props.id}</p>
                </div>
                break;
            case ('Accessories'):
                clothing = <div  onClick={()=>{this.props.click(this.props.id)}}  className={"ClothingItem Accessory"}>
                    <img src={'https://via.placeholder.com/250'} alt={this.props.title} />
                    <h3>{this.props.title}</h3>
                    <p>${this.props.price}</p>
                    <p>{this.props.brand}</p>
                    <p>Sizes: {this.props.size.join(', ')}</p>
                    <p>Stock: {this.props.stock}</p>
                    <p>ID: {this.props.id}</p>
                </div>
                break;
            case ('Jackets'):
                clothing = <div  onClick={()=>{this.props.click(this.props.id)}}  className={"ClothingItem Jacket"}>
                    <img src={'https://via.placeholder.com/250'} alt={this.props.title} />
                    <h3>{this.props.title}</h3>
                    <p>${this.props.price}</p>
                    <p>{this.props.brand}</p>
                    <p>Sizes: {this.props.size.join(', ')}</p>
                    <p>Stock: {this.props.stock}</p>
                    <p>ID: {this.props.id}</p>
                </div>
                break;
            default:
                clothing = null;
        }
        return clothing;
    }
}

export default ClothingItem;