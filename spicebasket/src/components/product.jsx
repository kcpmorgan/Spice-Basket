import './product.css'
import Quantitypicker from './quantityPicker';

// Arrow function

const Product = () => {
    return(
        <div className='product'>
            <img src='https://picsum.photos/200/300'></img>
            <h3>Cinnamon</h3>
            <label>$Price</label>
            <label>$Total</label>
            <Quantitypicker></Quantitypicker>
            <button>Add</button>
         </div>);
};

export default Product;