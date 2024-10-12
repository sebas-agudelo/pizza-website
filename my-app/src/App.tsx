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
import AdminPanel from './pages/AdminPanel';
import AddProduct from './pages/AddProduct';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Nav />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='pizzor' element={<Products />}/>
                    <Route path='/adminlogin' element={<Signin />}/>
                    <Route path='/kontakt' element={<Contact />}/>
                    <Route path='/adminpanel' element={<AdminPanel />}/>
                    <Route path='/nyprodukt' element={<AddProduct />}/>
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
