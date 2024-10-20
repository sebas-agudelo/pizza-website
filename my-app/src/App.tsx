import React, { useEffect, useState } from 'react';
import './App.css';
import { IProducts } from './module/products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/AdminSignin';
import Products from './pages/Products';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import './sass/style.scss'
import AdminPanel from './pages/AdminPanel';
import AddProduct from './pages/AddProduct';
import AdminSignin from './pages/AdminSignin';
import UserSignin from './pages/UserSignin';

function App() {
    return (
        <div className="App">

        

            <BrowserRouter>
            <Nav />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='pizzor' element={<Products />}/>
                    <Route path='/kontakt' element={<Contact />}/>

                    {/* ALLT OM ADMIN */}
                    <Route path='/adminlogin' element={<AdminSignin />}/>
                    <Route path='/adminpanel' element={<AdminPanel />}/>
                    <Route path='/nyprodukt' element={<AddProduct />}/>

                    {/* ALLT OM USER  */}
                    <Route path='/login' element={<UserSignin />}/>
                    <Route />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
