import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Details from './Components/Details';

import { TodosFilmes } from "./Components/TodosFilmes";
import { Series } from "./Components/Series";
import { Genero } from "./Components/Genero";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>


      < Route path='/' element={<Home />} />
      < Route path='/details/:id' element={<Details />} />

      < Route path='/todosfilmes' element={<TodosFilmes />} />
      < Route path='/genero' element={<Genero />} />
      < Route path='/series' element={<Series />} />




    </Routes>
  </BrowserRouter>


);
