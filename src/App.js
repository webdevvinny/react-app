import './App.css';

// function call(){
//   return(
//     <h3>My Name Is a Programmer. Working with reactJs</h3>

//   )
// }

const mine = () => {
  return(
    <>
    <h1>I am  a Front-End Developer</h1>
    <h1>Working With react Js</h1>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <mine />
    </div>
  );
}

export default App;
