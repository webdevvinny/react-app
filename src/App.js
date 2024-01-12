import { useState } from 'react';

import './App.css';


function App() {
  const [counter, setCounter] = useState();
  return (
    <div className="App">
    <button onClick={ 
      () =>{
        setCounter( (prevCount) => prevCount -1 )
      }
    }>-</button>
    <h1>{counter}</h1>
    <button
    
    
    >+</button>
    </div>
  );
}



export default App;



