import logo from './logo.svg';
import './App.css';
import Home from './Home';

import Singlemovie from './Singlemovie';
import Error from './Error';

import {Routes,Route } from 'react-router-dom';


function App() {
  return (
    
     
     <Routes>

      <Route path="/" element={<Home/>}></Route>

      <Route path= "movie/:id" element= {<Singlemovie/>}></Route>

      <Route path = "*" element={<Error/>}></Route>

     </Routes>
    
   
  );
}

export default App;
