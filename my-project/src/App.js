import logo from './logo.svg';
import './App.css';
import MyCircle from './components/circle';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='div'><MyCircle /></div>
      </header>
      
     
    </div>
  
  );
}

export default App;
