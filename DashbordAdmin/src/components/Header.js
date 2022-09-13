import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    state = {}
    render() {
        return (
            <>
                <nav className="navbar navbar-static-top white-bg" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-succcess btn-sm" href="#0"><i className="fa fa-bars"></i> </a>
                        <form role="search" className="navbar-form-custom" method="post" action="#0">
                            <div className="form-group">
                                <input type="text" placeholder="Chercher..." className="form-control" name="top-search" id="top-search" />
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                        <nav><Link to={'/'}><i className="fa fa-sign-out"></i> Deconnexion </Link></nav>
                           
                        </li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;
