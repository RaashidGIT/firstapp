// import logo from './logo.svg';
import './App.css';
import New1 from './components/New1';

function App() {
  let a = 10;
  let b = 2;
  // function addnum(){
  //   return a+b;
  // }

  function addnum(){
    return `${a}+${b}=${a+b}`;
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <h2>{a}+{b}={a+b}</h2> */}
      {/* <h2>{a+b}</h2> */}
      <h2>{addnum()}</h2>
      <New1></New1>  
    </div>
  );
}

export default App;
