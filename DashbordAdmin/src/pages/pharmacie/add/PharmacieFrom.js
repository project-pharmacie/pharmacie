import React, { Component } from 'react';


//Pharmacie

class PharmacieFrom extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="topic_form">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text"
                                        className="form-control"
                                        id="name"
                                        ref="name"
                                        name="name"
                                        placeholder="Entrer le nom"
                                    />
                                    {/* <small className="text-danger">{this.state.name}</small> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        ref="email"
                                        name="email"
                                        placeholder="Entrer l'email"
                                    />
                                    {/* <small className="text-danger">{this.state.start_date}</small> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Telephone</label>
                                    <input type="phone"
                                        className="form-control"
                                        id="phone"
                                        ref="phone"
                                        name="phone"
                                        placeholder="Entrer le numero de telephone"
                                    />
                                    {/* <small className="text-danger">{this.state.start_date}</small> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Adresse</label>
                                    <input type="address"
                                        className="form-control"
                                        id="address"
                                        ref="address"
                                        name="address"
                                        placeholder="Entrer l'adresse"
                                    />
                                    {/* <small className="text-danger">{this.state.start_date}</small> */}
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="localisation">Localisation</label>
                                    <input type="text"
                                        className="form-control"
                                        id="localisation"
                                        ref="localisation"
                                        name="localisation"
                                        placeholder="Entrer la localisation de la pharmacie"

                                    />
                                    {/* <small className="text-danger">{this.state.end_date}</small> */}
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

export default PharmacieFrom;
