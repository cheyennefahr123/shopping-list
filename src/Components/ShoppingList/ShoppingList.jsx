import React, { useState } from "react";
import ShoppingForm from "../ShoppingForm/ShoppingForm";
import 'bootstrap/dist/css/bootstrap.css';

function ShoppingItem({ id, item, quantity, deleteItem, updateItem}) {
    
    const [isEdit, setEdit] = useState(false);
    
    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    } 

    function handleEdit(event) { 
        event.preventDefault(); 
        setEdit((oldEditBoolean) => !oldEditBoolean);
    } 

    function handleUpdate(item, quantity) { 
        updateItem(id, item, quantity);
        setEdit(false); 

    } 
    const ReadOnlyJsx = ( 
        <span> 
            {item} ( {quantity} ) 
        </span> 
    ); 

    const EditJsx = (
    <ShoppingForm 
        submitItem={handleUpdate} 
        submitButtonText="Update"
        defaultItemName={item} 
        defaultQuantity={quantity} />
    );

    return (
    <li>
        {isEdit ? EditJsx : ReadOnlyJsx}
        <button onClick={handleDelete}>DELETE</button>
        <button onClick={handleEdit}>{isEdit ? "Cancel" : "EDIT"} </button>
    </li>
    ); 
} 

export default function ShoppingList({ items, deleteItem, updateItem }) { 
    const ItemsJsx = items.map(listItem =>  
        <ShoppingItem  
            key={listItem.id}  
            id={listItem.id} 
            item={listItem.item}  
            quantity={listItem.quantity}
            deleteItem={deleteItem}
            updateItem={updateItem} /> 
    ); 

    return <ul>{ItemsJsx}</ul>; 
} 
