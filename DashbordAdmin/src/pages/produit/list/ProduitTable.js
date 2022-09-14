import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";



const Mon_URL = "http://192.168.1.41:4000";

const ProduitTable = ()  => {




const [produit, setproduit] = useState([]);

   
   
  useEffect(() => {
    axios.get(Mon_URL + "/produit/").then((res) => {
      let data = res.data;
      console.log(data);
      setproduit(data);
    });
    //deleteCard()
  },);

  const handleDelete = (id) => {
    swal({
        title: "Etes-vous sur?",
        text: "vous supprimez le client",
        icon: "warning",
        buttons: ["Non", "Oui"],
        dangerMode: true
    }).then(willDelete => {
        
        if (willDelete) {
            axios
            .delete(Mon_URL + `/produit/${id}`)
            .then(({ data }) => {
              console.log(data);
            })
            .catch((err) => console.log(err));
            swal("Supprimer!", "le client est supprimé!", "success");
        }
    })
}

        return (
            <>
                <table id="dtBasicExample" className="table table-striped table-bordered table-sm">
                    <thead>
                        <tr>
                            <th className="th-sm">Id</th>
                            <th className="th-sm">Nom</th>
                            <th className="th-sm">Etat</th>    
                            <th className="th-sm">photo</th>         
                            <th className="th-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {produit.map((el)=>(
                        
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.nom}</td>
                            <td>{el.etat}</td>
                            <td>{el.photo}</td>
                            <td>
                                
                                <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                                <button
                                    onClick={e => handleDelete(el.id)}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                     ))}
                    </tbody>
                </table>
            </>
        );
    }


export default ProduitTable;
