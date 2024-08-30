import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <div className='heading-root'>
            <h1 className='heading' id='top-text'>Random</h1>
            <h1 className='heading' id='between-text'>Password</h1>
            <h1 className='heading' id='bottom-text'>Generator</h1>
        </div>
        <Home />
    </div>
  );
}

export default App;
