import "./todo.css";
import {useState} from "react";

const Todo = () =>{
    const [item, setItem] = useState([]);

    const saveItem = () => {
        console.log("Item saved", item);
    };
    return (
        <div className="todo-page">
            <h3>Shopping List</h3>

            <div className="list">
                <input className="form-control" type="text" placeholder="Add item" />
            </div>
            <button onClick={saveItem} className="btn btn-primary" >Submit</button>
        </div>

       

    );
};


export default Todo;