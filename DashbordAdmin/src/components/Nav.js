import React, { Component } from 'react';
// import { Link } from 'react-router-dom';



//Client
class Nav extends Component {

    render() {
        return (
            <>
                <nav className="navbar-default navbar-static-side" role="navigation">
                    <div className="sidebar-collapse">
                        <ul className="nav metismenu" id="side-menu">
                            <li className="nav-header">
                                <div className="dropdown profile-element left-profile">
                                    <img className="rounded-circle" src="asset/img/favicon1.png" alt="" />
                                    <a href="/dashboard">
                                        <span className="block m-t-xs font-bold profile-title">Pharma</span>
                                    </a>
                                </div>
                                <div className="logo-element">
                                    MLC
                        </div>
                            </li>
                            <li className="active">
                                <a href="/dashboard"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></a>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fa fa-product-hunt" ></i>
                                    <span className="nav-label">Produits</span>
                                    <span className="fa arrow"></span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li ><a href="/add-produit" >Ajoutez </a></li>
                                    <li><a href="/produit-list" >List</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fa fa-user"></i>
                                    <span className="nav-label">Clients</span>
                                    <span className="fa arrow"></span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="/add-client" >Ajoutez</a></li>
                                    <li><a href="/client-list" >List</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#0">
                                    <i className="fa fa-medkit"></i>
                                    <span className="nav-label">Pharmacies</span>
                                    <span className="fa arrow"></span>
                                </a>
                                <ul className="nav nav-second-level collapse">
                                    <li><a href="/add-pharmacie" >Ajoutez</a></li>
                                    <li><a href="/pharmacie-list" >List</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Nav;
