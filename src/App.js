import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import CountryInfo from './pages/ContryInfo';



function App() {
  return (
    <Routes>

      <Route path="/" element={<Homepage />}></Route>
      <Route path="/:name" element={<CountryInfo />}></Route>
    
    </Routes>

  );
}

export default App;
