import logo from './logo.svg';
import './App.css';
import { LandingPage } from './Pages/LandingPage';

function App() {
  const myFunc = () => {
    alert("hola bro"); 
  }
  return (
    <div className="App">
      <LandingPage /> 
    </div>
  );
}

export default App;
