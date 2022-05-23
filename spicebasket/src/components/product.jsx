import './product.css'
import Quantitypicker from './quantityPicker';
import { useState } from 'react';

// Arrow function

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);

    let onQuantityChange = (value) => {
        //use the value to update the quantity
        setQuantity(value);
    };


// add a function to return the total. Total = price*quantity
const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
};

    return(
        <div className='product'>
            <img className='productImg' src={'/img/'+props.data.image}></img>
            <h3>{props.data.title}</h3>
            <label>${props.data.price}</label>
            <label>${getTotal()}</label>
            <Quantitypicker onChange={onQuantityChange} ></Quantitypicker>
            <button class="btn btn-primary btn-sm" >Add</button>
         </div>);
};

export default Product;