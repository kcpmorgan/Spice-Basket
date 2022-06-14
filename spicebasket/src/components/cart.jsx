import './cart.css';
import { useContext } from 'react';
import StoreContext from '../context/storeContext';
import ProductInCart from "./productincart";

const Cart = () => {
    let cart = useContext(StoreContext).cart;

    const getTotal = () =>{
        let total = 0;
        for(let i=0; i< cart.length; i++) {
            let prod = cart[i];
            total += prod.price * prod.quantity;
        }

        return total.toFixed(2);
    };

    const getNumItems = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++){
            total += cart[i].quantity;
        }
        return total;
    };

    return(
        <div className='cart'>
            <h6>There are {getNumItems()} products in your cart</h6>
            <h3>Are you ready to place your order?</h3>
            <hr></hr>

                <div className="parent">
                <div className='products'>
            {cart.map((prod) => (
                <ProductInCart key={prod._id} data={prod}></ProductInCart>
                ))}
            </div>
               
           <div className="total-panel">
               <h3>Your total</h3>
               <h2>${getTotal()}</h2>
           </div>

        </div>
        </div>
    );
};

export default Cart;