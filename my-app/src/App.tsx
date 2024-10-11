import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Products from './pages/Products';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import './sass/style.scss'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Nav />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='pizzor' element={<Products />}/>
                    <Route path='/adminpanel' element={<Signin />}/>
                    <Route path='/kontakt' element={<Contact />}/>
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
