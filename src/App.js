import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Homepage from './pages/Homepage';



function App() {
  return (
    <Routes>

      <Route path="/" element={<Homepage />}></Route>
    
    </Routes>

  );
}

export default App;
