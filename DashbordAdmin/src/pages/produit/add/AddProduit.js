import React, { Component } from 'react';
import Nav from '../../../components/Nav';
import Header from '../../../components/Header';
import PageTitle from '../../../components/PageTitle';
import ProduitForm from './ProduitForm';

//Produit

class AddProduit extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="nav_bg_color" id="wrapper">
                    <Nav />
                    <div id="page-wrapper" className="gray-bg">
                        <div className="row border-bottom">
                            <Header />
                        </div>
                        <div className="wrapper wrapper-content animated fadeInRight">
                            {/* Page title start */}
                            <PageTitle page_headline="Ajoutez un nouveau produit" />
                            {/* Page title end */}

                            <div className="row form_bg">
                                <div className="col-lg-12">
                                    <ProduitForm />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default AddProduit;
