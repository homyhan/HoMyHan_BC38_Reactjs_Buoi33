import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

class Home extends Component {
  products = [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
    {
      id: 2,
      name: "Adidas Prophere Black White",
      alias: "adidas-prophere-black-white",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 990,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 3,
      name: "Adidas Prophere Customize",
      alias: "adidas-prophere-customize",
      price: 375,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 415,
      image: "http://svcy3.myclass.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 4,
      name: "Adidas Super Star Red",
      alias: "adidas-super-star-red",
      price: 465,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 542,
      image: "http://svcy3.myclass.vn/images/adidas-super-star-red.png",
    },
    {
      id: 5,
      name: "Adidas Swift Run",
      alias: "adidas-swift-run",
      price: 550,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 674,
      image: "http://svcy3.myclass.vn/images/adidas-swift-run.png",
    },
    {
      id: 6,
      name: "Adidas Tenisky Super Star",
      alias: "adidas-tenisky-super-star",
      price: 250,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 456,
      image: "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 7,
      name: "Adidas Ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 450,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 854,
      image: "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 8,
      name: "Adidas Yeezy 350",
      alias: "adidas-yeezy-350",
      price: 750,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 524,
      image: "http://svcy3.myclass.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 9,
      name: "Nike Adapt BB",
      alias: "nike-adapt-bb",
      price: 630,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 599,
      image: "http://svcy3.myclass.vn/images/nike-adapt-bb.png",
    },
    {
      id: 10,
      name: "Nike Air Max 97",
      alias: "nike-air-max-97",
      price: 650,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 984,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97.png",
    },
    {
      id: 11,
      name: "Nike Air Max 97 Blue",
      alias: "nike-air-max-97-blue",
      price: 450,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 875,
      image: "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
  ];

  state={
    selectedProduct:null,
    cart: []
  }

  setSelectedProduct=(data)=>{
    this.setState({
        selectedProduct: data
    });
  }

  addToCart =(item)=>{ //item: sp muon bo vao gio hang
    // const cartItem ={product: item, quantity:1}
    const cartItem ={product: item, quantity: 1};
    const cloneCart =[...this.state.cart];
   const foundItem= cloneCart.find(cartItem=>{
      return cartItem.product.id === item.id
    })
    if(foundItem){
      // tang so luong
      foundItem.quantity +=1;
    }else{
      //push vao gio hang
      cloneCart.push(cartItem);
    }

    this.setState({
      cart: cloneCart
    }, ()=>{
      console.log(this.state.cart);
    });
    
  }

  deleteCartItem=(id)=>{
    const cloneCart =[...this.state.cart];
    const index = cloneCart.findIndex((cartItem)=>{
      return cartItem.product.id === id;
    });
    if(index === -1) return;
    cloneCart.splice(index, 1);
    this.setState({
      cart: cloneCart
    });
  }

  increaseQuantity =(id) =>{
    const cloneCart =[...this.state.cart];
    const index = cloneCart.findIndex((cartItem)=>{
      return cartItem.product.id === id;
    });
    if(index === -1) return;
    cloneCart[index].quantity+=1;
    if(cloneCart[index].quantity>this.products[index].quantity){
      return alert("Chi con "+ this.products[index].quantity+" san pham")
    }
    this.setState({
      cart: cloneCart
    });
  }

  decreaseQuantity=(id)=>{
    const cloneCart =[...this.state.cart];
    const index = cloneCart.findIndex((cartItem)=>{
      return cartItem.product.id === id;
    });
    console.log(index);
    if(index === -1) return;
    
    cloneCart[index].quantity-=1;
    if(cloneCart[index].quantity===0){
      cloneCart.splice(index, 1);
    }
    this.setState({
      cart: cloneCart
    });
  }

  checkout=()=>{
    this.setState({
      cart: []
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Shopping online</h1>
        <button
          className="btn btn-success mb-4"
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          Gi??? h??ng ({this.state.cart.length})
        </button>
        <ProductList addToCart={this.addToCart} selectedProduct={this.setSelectedProduct} products={this.products}></ProductList>
        
        {this.state.selectedProduct && <ProductDetail selectedProd={this.state.selectedProduct}></ProductDetail>}
        <Cart checkout={this.checkout} decreaseQuantity={this.decreaseQuantity} increaseQuantity={this.increaseQuantity} deleteItem ={this.deleteCartItem} cartItem = {this.state.cart}></Cart>
      </div>
    );
  }
}

export default Home;
