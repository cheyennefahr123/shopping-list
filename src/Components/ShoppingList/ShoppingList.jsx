import React, { useState } from "react";
import { Button, Col, Row } from 'reactstrap';
import ShoppingForm from "../ShoppingForm/ShoppingForm";
import 'bootstrap/dist/css/bootstrap.css';
import './ShoppingList.css';

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
        <span className="flex-row"> 
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
            <li className="shopping-item">
                <Row className="row align-items-center">
                    <Col>
                        {isEdit ? EditJsx : ReadOnlyJsx}
                    </Col>
                    <Col className="flex-end">
                        <Button className= "danger" onClick={handleDelete}>Delete</Button>
                        <Button className= "warning" onClick={handleEdit}>{isEdit ? "Cancel" : "Edit"} </Button>
                    </Col>
                </Row>
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

    return (
        <section className="shopping-list">
                <ul>
                   {ItemsJsx} 
                </ul>
        </section>  
    ); 
} 
