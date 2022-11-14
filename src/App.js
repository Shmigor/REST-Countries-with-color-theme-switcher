import './App.css';
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import CountryInfo from './pages/ContryInfo';
import { useState } from 'react';



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  return (
    <Routes>

      <Route path="/" element={<Homepage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}></Route>
      <Route path="/:alpha3Code" element={<CountryInfo isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>}></Route>
    </Routes>

  );
}

export default App;
