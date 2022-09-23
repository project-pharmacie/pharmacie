import React, { useState } from 'react';
import axios from 'axios';
import swal from "sweetalert";


const PharmacieFrom =() => {
   
    const [data, setData] = useState({
        username: "",
        email: "",
        telephone: "",
        adress: "",
        photo: "",
      });

      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
       
      };

      const handleSubmit =(event)=>{
        event.preventDefault();

        const pharmacie = {
        username : data.username,
        email: data.email,
        telephone : data.telephone,
        adress: data.adress,
        photo: data.photo,
        };

        axios.post(`http://192.168.1.41:4000/pharmacie/register`,pharmacie)
        .then((response) =>
         { 
           if (response.statusText)
           {
            swal("Ajouté!", "le Pharmacie est ajouté!", "success");
            window.location.reload();
           }
         })
        .catch((error) => swal({title:"Pharmacie Already exists", icon: "warning"}))
       }

        return (
            <>
                <div className="topic_form">
                    <form onSubmit={handleSubmit}>
                       
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text"
                                        className="form-control"
                                        id="username"
                                        onChange={handleChange}
                                        name="username"
                                        placeholder="Entrer le nom"
                                        required
                                    />
                                    {/* <small className="text-danger">{this.state.name}</small> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        onChange={handleChange}
                                        name="email"
                                        placeholder="Entrer l'email"
                                        required
                                    />
                                    {/* <small className="text-danger">{this.state.start_date}</small> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Telephone</label>
                                    <input type="phone"
                                        className="form-control"
                                        id="telephone"
                                        onChange={handleChange}
                                        name="telephone"
                                        placeholder="Entrer le numero de telephone"
                                        required
                                    />
                                    {/* <small className="text-danger">{this.state.start_date}</small> */}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Adresse</label>
                                    <input type="address"
                                        className="form-control"
                                        id="adress"
                                        onChange={handleChange}
                                        name="adress"
                                        placeholder="Entrer l'adresse"
                                        required
                                    />
                                    {/* <small className="text-danger">{this.state.start_date}</small> */}
                                    </div>
                                <div className="form-group">
                                    <label htmlFor="Photo">Photo</label>
                                    <input type="text"
                                        className="form-control"
                                        id="photo"
                                        onChange={handleChange}
                                        name="photo"
                                        placeholder="Ajoutez la photo de la pharmacie"
                                        required
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

export default PharmacieFrom;
