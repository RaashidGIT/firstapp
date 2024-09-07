// import logo from './logo.svg';
import './App.css';
import New1 from './components/New1';
import New2 from './components/New2';
import Createobj from './components/Createobj';

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
      <New1/>  
      <New2/>
      <Createobj/>
    </div>
  );
}

export default App;
