import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/login';

function App() {
  return (
    <div className="App">
      Sample App - thanks for login
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
