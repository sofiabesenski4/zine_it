import logo from './logo-black-flag.svg';
import './App.css';

function App() {
  return (
    <div className="App flex flex-col items-center justify-items-center">
      <div className="flex-none">
        <img src={logo} className="App-logo flex-none" alt="logo" />
      </div>
      <h1 className="text-3xl font-bold underline">
        Zine it! 
      </h1>
    </div>
  );
}

export default App;
