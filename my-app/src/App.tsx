import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Products from './pages/Products';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='pizzor' element={<Products />}/>
                    <Route path='/loggain' element={<Signin />}/>
                    <Route path='/registrera' element={<Signup />}/>
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
