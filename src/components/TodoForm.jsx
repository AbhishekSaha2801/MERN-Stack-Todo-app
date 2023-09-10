import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");
    const [Description,setDescription] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    const onDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                type="text"
                placeholder="Enter The Title Of Your Todo"
                className="input"
                onChange={onInputChange}
                value={text}
            />

            {/* <input  
                type="text"
                placeholder="Enter The Description Of Your Todo"
                className="input"
                onChange={onDescriptionChange}
                value={Description}
            /> */}
            <button className="button1">Add</button>
            
        </form>
    )
}

export default TodoForm;