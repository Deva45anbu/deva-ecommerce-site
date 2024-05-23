import { BrowserRouter} from 'react-router-dom';
import './App.css';
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
