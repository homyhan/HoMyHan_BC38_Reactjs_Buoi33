import React, { Component } from 'react';

class Cart extends Component {

    countTotalAmount=()=>{
        const total =  this.props.cartItem.reduce((prevValue, currentItem)=>{
            return prevValue +currentItem.quantity*currentItem.product.price
        }, 0);
        return total;
    }

    

    renderProductCart =()=>{
        return this.props.cartItem.map((item)=>{
            return (
                <tr key={item.product.id}>
                                    <td>{item.product.id}</td>
                                    <td>
                                        <img style={{width: '200px'}} src={item.product.image} alt=''></img>
                                    </td>
                                    <td>{item.product.name}</td>
                                    <td>
                                        <button onClick={()=>this.props.decreaseQuantity(item.product.id)} className='btn btn-info'>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={()=>this.props.increaseQuantity(item.product.id)} className='btn btn-info'>+</button>
                                    </td>
                                    <td>{item.product.price}</td>
                                    <td>{item.product.price * item.quantity}</td>
                                    <td>
                                        <button onClick={()=> this.props.deleteItem(item.product.id)} className='btn btn-danger'>Xoá</button>
                                    </td>
                                </tr>
            )
        })
    }

   

    render() {
        //  this.props.cartItem
        return (
            <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderProductCart()}
                                
                                {/* <tr>
                                    <td>1</td>
                                    <td>
                                        <img src='' alt=''></img>
                                    </td>
                                    <td>Alidas</td>
                                    <td>
                                        <button className='btn btn-info'>-</button>
                                        <span>1</span>
                                        <button className='btn btn-info'>+</button>
                                    </td>
                                    <td>1000</td>
                                    <td>1000</td>
                                    <td>
                                        <button className='btn btn-danger'>Xoá</button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                        <h1>Tong tien: {this.countTotalAmount()}</h1>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button onClick={()=>this.props.checkout()} type="button" className="btn btn-primary">Thanh toán</button>
                    </div>
                    </div>
                </div>
                
            </div>

        );
    }
}

export default Cart;