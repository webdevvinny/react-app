import './App.css';

const Person = (props) => {
  return (
    <>
        <h1>ReactJS Developer</h1>
        <h3>The name provided is: {props.name}</h3>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <Person name = {"People"}/>
    
    </div>
  );
}



export default App;



