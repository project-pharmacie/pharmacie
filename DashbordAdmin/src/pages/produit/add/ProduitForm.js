import React, { Component } from 'react';

//Produits

class ProduitForm extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div className="topic_form">
                    <form>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        ref="name"
                                        name="name"
                                        placeholder="Entrer le nom du produit"
                                    />
                                    {/* <small className="text-danger">{this.state.name}</small> */}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="subject">Etat</label>
                                    <input type="text"
                                        className="form-control"
                                        id="etat"
                                        ref="etat"
                                        name="etat"
                                        placeholder="Etat de disponibilité"
                                    />
                                    {/* <small className="text-danger">{this.state.subject}</small> */}
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-success btn-sm form-control mb-3 btn_custom">Enregistrer</button>
                    </form>
                </div>
            </>
        );
    }
}
 
export default ProduitForm;
