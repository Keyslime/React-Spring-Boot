import '../App.css';
import { useState } from 'react';

function Dropdown(props) {
    const [operation, setOperation] = useState('plus');

    const handleSelect = (event) => {
        const operateSymbol = event.target.value
        setOperation(operateSymbol);
        props.onSelectOperation(operateSymbol)
    }

    return (
        <select onChange={handleSelect} value={operation} className="dropdown dropdown-content">
            <option value="add">+</option >
            <option value="subtract">-</option >
            <option value="multiply">*</option >
            <option value="divide">/</option >
        </select>

    );
}

export default Dropdown;