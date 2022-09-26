import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select'
import swal from "sweetalert";
import Excel from "../../ImportExcel"

const ProduitForm =() => {

    const options = [
        { value: 'Disponible', label: 'Disponible' },
        { value: 'Indisponible', label: 'Indisponible' },
        
      ];
    const [selectedOption, setSelectedOption] = useState(null);
    const [data, setData] = useState({
        nom: "",
        etat: "",
        photo:""
      });

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });  
      };

    const handleSubmit =(event)=>{
        event.preventDefault();
         const produit = {
                nom : data.nom,
                etat : selectedOption.value,
                photo : data.photo
                };
         axios.post(`http://192.168.1.41:4000/produit/register`,produit)
         .then((response) =>
          { 
            if (response.statusText)
            { swal("Ajouté!", "le produit est ajouté!", "success");
              window.location.reload();
            }
          })
         .catch((error) => swal({title:"Produit Already exists", icon: "warning"}))

        }
    

        return (
            <>
            
                <div className="topic_form">
                      <form onSubmit={handleSubmit}>        
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="form-group">
                                    <label htmlFor="name">Nom</label>
                                    <input type="text"
                                        className="form-control"
                                        id="nom"
                                        onChange={handleChange}
                                        name="nom"
                                        placeholder="Entrer le nom du produit"
                                        required
                                    />
                                </div>
                            </div>

                        <div className="col-lg-4">
                            <div className="form-group">
                            <label htmlFor="name">Etat</label>
                            <Select 
                             options={options}
                             onChange={setSelectedOption}
                             defaultValue={selectedOption}  
                             placeholder="Modifier la disponibilité du produit"
                             required
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
                                        required
                                    />
                                </div>
                            </div>

                        </div>
                        <Excel/>
                        <button className="btn btn-success btn-sm form-control mb-3 btn_custom">Enregistrer</button>
                    </form>
                </div>


            </>


        );
    }

 
export default ProduitForm;
