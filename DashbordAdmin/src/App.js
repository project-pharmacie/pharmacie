import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from "react-router-dom";

import Login from './pages/auth/Login';
import Singup from './pages/auth/Singup';
import Dashboard from './pages/dashboard/Dashboard';
import AddProduit from './pages/produit/add/AddProduit';
import ProduitList from './pages/produit/list/ProduitList';
import AdddUser from './pages/user/add/AddUser';
import UserList from './pages/user/list/UserList';
import AddPharmacie from './pages/pharmacie/add/AddPharmacie';
import PharmacieList from './pages/pharmacie/list/PharmacieList';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route path="/singup" element={<Singup/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/add-produit" element={<AddProduit/>} />
          <Route path="/produit-list" element={<ProduitList/>} />
          <Route path="/add-client" element={<AdddUser/>} />
          <Route path="/client-list" element={<UserList/>} />
          <Route path="/add-pharmacie" element={<AddPharmacie/>} />
          <Route path="/pharmacie-list" element={<PharmacieList/>} />
          <Route element={<ErrorPage/>} />
          </Routes>
          
    )
  }
}
 
export default App;
