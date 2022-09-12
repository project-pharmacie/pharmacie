import React, { Component } from 'react';
// import logo from './logo.svg';
import './styles/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes , Route } from "react-router-dom";

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
      
        // <Routes>
        //   <Route exact path="/" component={Login} />
        //   <Route path="/singup" component={Singup} />
        //   <Route path="/dashboard" component={Dashboard} />
        //   <Route path="/add-produit" component={AddProduit} />
        //   <Route path="/produit-list" component={ProduitList} />
        //   <Route path="/add-client" component={AdddUser} />
        //   <Route path="/client-list" component={UserList} />
        //   <Route path="/add-pharmacie" component={AddPharmacie} />
        //   <Route path="/pharmacie-list" component={PharmacieList} />
        //   <Route component={ErrorPage} />
        // </Routes>
   
     <Routes>
       <Route path="/" element={<Login />}>
       <Route path="/singup" component={Singup} />
           <Route path="/dashboard" component={Dashboard} />
           <Route path="/add-produit" component={AddProduit} />
           <Route path="/produit-list" component={ProduitList} />
           <Route path="/add-client" component={AdddUser} />
           <Route path="/client-list" component={UserList} />
           <Route path="/add-pharmacie" component={AddPharmacie} />
          <Route path="/pharmacie-list" component={PharmacieList} />
       
       </Route>
     </Routes>
    
    )
  }
}
 
export default App;
