import React, { useState } from 'react';
import { Button, Row, Col, Input, Label } from 'reactstrap'; 
import 'bootstrap/dist/css/bootstrap.css';
import './ShoppingForm.css'; 

export default function ShoppingForm({ 
    submitItem,
    submitButtonText = "Add Item", 
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
        <form data-bs-theme="dark" className="shopping-form" action="#" method="POST" onSubmit={handleSubmit}> 
        <h2>Add Your Item</h2>
            <Row className="center row-cols-lg">
                <Col className="margin-bottom"> 
                    <Label className="visually-hidden" htmlFor="item">Item</Label> 
                    <Input  
                        type="text" 
                        required 
                        id="item" 
                        name="item" 
                        placeholder= "Item Name"
                        value={item} 
                        onChange={handleItemChange} /> 
                </Col>
                <Col className="margin-bottom">
                    <Label className="visually-hidden" htmlFor="quantity">Quantity</Label> 
                    <Input  
                        type="number" 
                        id="quantity" 
                        name="quantity" 
                        placeholder= "Quantity"
                        value={quantity} 
                        required 
                        min="0" 
                        onChange={handleQuantityChange} /> 
                    </Col>
                <Col className="margin-bottom">
                    <Button color="success" type="submit">{submitButtonText}</Button> 
                </Col>
            </Row>
        </form> 
    ); 

} 