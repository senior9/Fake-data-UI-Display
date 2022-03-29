import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    console.log(props);
    
    return (
        <div>
            <h1>This is cart :{cart.length}</h1>
            <h1>Adding Cart Item : {cart.length}</h1>
            <div className="cart-item">
            <table>
            {
                cart.map((cartItem, index) =>{
                    return (
                        
                    <tr key={index}>
                    <td>
                <img src={cartItem.image} alt="" srcset="" />

                    </td>
                    <td>1) Name: {cartItem.first_name}</td>
                    <td>2) Emanil : {cartItem.email} </td>
                    <td>3) Compnay : {cartItem.company} </td>
                    <td>4) Salary : {cartItem.price} </td>


                </tr> 
                    )
                })
            }
            </table>

            </div>
        </div>
    );
};

export default Cart;