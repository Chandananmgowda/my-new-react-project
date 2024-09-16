import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import LoginForm from './loginsign/loginform';
import Image from './img/img';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <LoginForm/>
     <Image/>
     
    </div>
  );
}

export default App;
