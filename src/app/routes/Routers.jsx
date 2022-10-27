import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";


const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'}/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
    </Routes>
  );
};

export default Routers;