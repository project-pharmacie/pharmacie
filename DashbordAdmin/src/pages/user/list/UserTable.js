import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import swal from "sweetalert";

//Client

class UserTable extends Component {
    state = {}
    // Delete handler
    handleDelete() {
        swal({
            title: "Etes-vous sur?",
            text: "vous supprimez le client",
            icon: "warning",
            buttons: ["Non", "Oui"],
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                swal("Supprimer!", "le client est supprimé!", "success");
            }
        })
    }
    render() {
        return (
            <>
                <table id="dtBasicExample" className="table table-striped table-bordered table-sm">
                    <thead>
                        <tr>
                            <th className="th-sm">Id</th>
                            <th className="th-sm">Nom</th>
                            <th className="th-sm">Email</th>             
                            <th className="th-sm">Adresse</th>     
                            <th className="th-sm">Mot de passe </th>                     
                            <th className="th-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                           
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                        <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Link to="/" className="btn btn-info btn-sm mr-1"><i className="fa fa-eye"></i></Link>
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => this.handleDelete()}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}

export default UserTable;
