import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/login';
import { RouteData } from './Route';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouteData></RouteData>
      </BrowserRouter>
    </div>

  );
}

export default App;
