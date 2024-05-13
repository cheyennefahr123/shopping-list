import React, { useState } from 'react'; 
import 'bootstrap/dist/css/bootstrap.css'; 

export default function ShoppingForm({ 
    submitItem,
    submitButtonText = "Add", 
    defaultItemName = "", 
    defaultQuantity = "" 
}) { 
    
    const [item, setItem] = useState(defaultItemName);    
    const [quantity, setQuantity] = useState(defaultQuantity);  

    function handleItemChange(event) { 
        setItem(event.target.value); 
    } 

    function handleQuantityChange(event) { 
        setQuantity(event.target.value); 
    } 

    function handleSubmit(event) { 
        event.preventDefault(); 
        submitItem(item, quantity);
        setItem(""); 
        setQuantity(""); 
    } 

    return ( 
        <form action="#" method="POST" onSubmit={handleSubmit}> 
            <label htmlFor="item">Item</label> 
            <input  
                type="text" 
                required 
                id="item" 
                name="item" 
                value={item} 
                onChange={handleItemChange} /> 
            <label htmlFor="quantity">Quantity</label> 
            <input  
                type="number" 
                id="quantity" 
                name="quantity" 
                value={quantity} 
                required 
                min="0" 
                onChange={handleQuantityChange} /> 
            <button type="submit">{submitButtonText}</button> 
        </form> 
    ); 

} 