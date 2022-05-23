import './quantityPicker.css';
import {useState} from 'react';

const Quantitypicker = (props) => {
    let [quantity, setQuantity] = useState(1);

    //props.onChange -> onQuantityChange


    const handleIncrease = () => {
        let value = quantity;
        value = value+1;
        setQuantity (value);
        props.onChange(value);
    }
    const handleDecrease = () => {
        let value = quantity;

        if(value>1)
        
            value = value -1;
            setQuantity (value);
        
        props.onChange(value);
    }
        

    return(
        <div className="quantitypicker">
            <button className="btn btn-secondary btn-sm" onClick={handleDecrease} > - </button>
            <label> {quantity} </label>
            <button className="btn btn-secondary btn-sm" onClick={handleIncrease} > + </button>
        </div>
    );
}

export default Quantitypicker;