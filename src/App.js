import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import Upload from "./Component/Upload";
import Search from './Component/Search';
import Signin from "./Component/Signin";
import Signup from "./Component/Signup";


const App = () => {
 
  return (

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/search' element={<Search />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>








  )
}

export default App
