import React, { useState } from 'react';
import axios from 'axios';





const ProduitForm =() => {

    const [data, setData] = useState({
        nom: "",
        etat: "",
        photo:""
      });

      //const navigate = useNavigate();

      const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
       
      };
       const handleSubmit =(event)=>{
                event.preventDefault();
    
            const produit = {
                nom : data.nom,
                etat : data.etat,
                photo : data.photo
    
                };
    
         axios.post(`http://192.168.1.41:4000/produit/register`,produit)
         .then((response) =>
          { 
            if (response.statusText)
            {
                alert(response.data.message)
                //navigate('/')   
            }
          })
         .catch((error) => alert("Produit Already exists"))
        }
    

        return (
            <>
                <div className="topic_form">
                      <form onSubmit={handleSubmit}>                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text"
                                        className="form-control"
                                        id="nom"
                                        onChange={handleChange}
                                        name="nom"
                                        placeholder="Entrer le nom du produit"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="subject">Etat</label>
                                    <input type="text"
                                        className="form-control"
                                        id="etat"
                                        onChange={handleChange}
                                        name="etat"
                                        placeholder="Etat de disponibilité"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="name">Photo</label>
                                    <input type="text"
                                        className="form-control"
                                        id="photo"
                                        onChange={handleChange}
                                        name="photo"
                                        placeholder="Ajoutez la photo du produit"
                                    />
                                </div>
                            </div>

                        </div>
                        <button className="btn btn-success btn-sm form-control mb-3 btn_custom">Enregistrer</button>
                    </form>
                </div>
            </>
        );
    }

 
export default ProduitForm;
