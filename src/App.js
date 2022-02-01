import './App.css';
import Context from './context/Context';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Context>
        <Router/>
      </Context>
    </div>
  );
}

export default App;
