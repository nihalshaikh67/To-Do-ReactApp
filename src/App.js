import React, { useState } from 'react';
import TodoList from './TodoList';


const App = () => {
  const[inputList,setInputList] = useState("");
  const[Items,setItems] = useState([]);

  const itemEvent = (e) => {
   setInputList(e.target.value);
  };

  const listOfItems = () => {
   setItems((oldItems) =>{
     return[...oldItems,inputList];
   })
   setInputList("");
  };

  const deleteItems =(id)=>{
    console.log('deleted');

setItems((oldItems) =>{
  return oldItems.filter(( arrE, index) =>{
       return index !== id;
  });

 
});
  }

return(
  <>
  <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>TO-DO LIST</h1>
      <br/>
      <input type="text" placeholder="Add items here" 
      value={inputList}
      onChange={itemEvent}/>
      <button onClick={listOfItems}>+</button>
      <ol>
        {/* listOfItems */}
       { Items.map((itemVal,index) => {
        return <TodoList 
                  key={index} 
                  id={index} 
                  text={itemVal}
                  onSelect={deleteItems}/>;
          })}
      </ol>
    </div>

  </div>
  </>

);
}

export default App;
