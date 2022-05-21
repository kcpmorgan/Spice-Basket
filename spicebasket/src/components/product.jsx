import './product.css'
import Quantitypicker from './quantityPicker';

// Arrow function

const Product = (props) => {
    return(
        <div className='product'>
            <img classname="productImg" src={'/img/'+props.data.image}></img>
            <h3>{props.data.title}</h3>
            <label>${props.data.price}</label>
            <label>$Total</label>
            <Quantitypicker></Quantitypicker>
            <button>Add</button>
         </div>);
};

export default Product;