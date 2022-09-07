import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

class Login extends Component {
    state = {}

    loginHandler = () => {
        this.props.history.push('/dashboard');
        window.location.reload();
    }

    render() {
        return (
            <>
                <div className="fullsheet">
                    <div className="auth-form">
                        <div className="avatar"></div>
                        <h4 className="modal-title">Connecter avec votre compte</h4>
                        <form>
                            <div className="form-group">
                                <input type="email"
                                    className="form-control"
                                    ref="email"
                                    name="email"
                                    placeholder="Username"
                                    required
                                />
                                {/* <small className="text-danger">{this.state.email}</small> */}
                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control"
                                    ref="password"
                                    name="password"
                                    placeholder="***********"
                                    required
                                />
                                {/* <small className="text-danger">{this.state.password}</small> */}
                            </div>
                            <div className="form-group small clearfix">
                                <label className="checkbox-inline"><input type="checkbox"/> Souvien de moi</label>
                                <button type="button" data-toggle="modal" data-target="#model" className="forgot-link btn_modal">Mot de passe oublié ?</button>
                            </div>
                            <button onClick={this.loginHandler} className="btn btn-primary btn-block btn-lg form-control mb-3">Connecter</button>
                        </form>
                        <div className="text-center small text-dark">Vous n'avez pas un compte? <Link to='/singup'>S'inscrire</Link></div>
                    </div>
                </div>

                <div className="modal fade" id="model" role="dialog" aria-labelledby="model" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <ForgotPassword />
                    </div>
                </div>

            </>
        );
    }
}

export default Login;
