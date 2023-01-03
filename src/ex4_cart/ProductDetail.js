import React, { Component } from 'react';

class ProductDetail extends Component {
    render() {
        const {image, name, price, description, quantity} = this.props.selectedProd
        return (
            <div className='card p-4 mt-5'>
                <div className='row'>
                    <div className='col-5'>
                        <img className='img-fluid' src={image} alt=''></img>
                    </div>
                    <div className='col-7'>
                        <h2>Tên: {name}</h2>
                        <p>Giá: {price}</p>
                        <p>Mô tả: {description}</p>
                        <p>Số lượng: {quantity}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetail;