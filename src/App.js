import './App.css'; 
import React, {useState, useEffect} from 'react'; 
import ShoppingForm from './Components/ShoppingForm/ShoppingForm'; 
import ShoppingList from './Components/ShoppingList/ShoppingList'; 

function App() { 
  const [shoppingList, setShoppingList] = useState([]);
   
  const loadData = () => { 
    fetch('https://xs7dt8-8080.csb.app/api/list') 
      .then(x => x.json()) 
      .then(response => { 
        setShoppingList(response); 
      }); 
  }; 


  useEffect(loadData, []); 


  const addItem = (item, quantity) => { 

    fetch('https://xs7dt8-8080.csb.app/api/list/new', { 
      method: 'POST', 
      body: JSON.stringify({ 
        item, 
        quantity 
      }), 

      headers: { 
        'Content-type': 'application/json; charset=UTF-8', 
      }, 
      mode: 'cors', 
    }) 
      .then(x => x.json()) 
      .then(loadData); 
  } 

 
  return ( 
    <div className="App"> 
      <header className="App-header"> 
        <h1>Shopping</h1> 
      </header> 
      <main> 
        <ShoppingForm addItem={addItem} /> 
        <ShoppingList items={shoppingList} /> 
      </main> 

    </div> 

  ); 

} 

 

export default App; 