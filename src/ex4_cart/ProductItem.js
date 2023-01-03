import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        const {image, name, price} = this.props.item //bóc tách phần tử es6
        return (
            <div className='card p-3'>
                <img src={image} alt=''></img>
                <h4>{name}</h4>
                <h5>Price: {price}$</h5>
                <div className='d-flex'>
                    <button onClick={()=>this.props.selectedProduct(this.props.item)} className='btn btn-success me-3'>Chi tiết</button>
                    <button onClick={()=>this.props.addToCart(this.props.item)} className='btn btn-info'>Thêm giỏ hàng</button>
                </div>
                
            </div>
        );
    }
}

export default ProductItem;