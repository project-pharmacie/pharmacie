import React, { Component } from 'react';

class ForgotPassword extends Component {
    state = {  }
    render() { 
        return (
            <>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Mot de passe oublié</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Adresse mail</label>
                                <input className="form-control"
                                    placeholder="Entrer adresse mail valide"
                                    id="email"
                                    type="email" />
                            </div>
                            <div className="text-right">
                                <button type="button" className="btn btn-danger btn-sm mr-1" data-dismiss="modal">Fermer</button>
                                <button type="button" className="btn btn-success btn-sm">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
 
export default ForgotPassword;
