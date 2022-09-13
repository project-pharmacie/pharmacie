import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";



const Mon_URL = "http://192.168.1.41:4000";

const PharmacieTable = ()  => {

const [pharmacie, setpharmacie] = useState([]);
   
   
  useEffect(() => {
    axios.get(Mon_URL + "/pharmacie/").then((res) => {
      let data = res.data;
      console.log(data);
      setpharmacie(data);
    });
  
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
            .delete(Mon_URL + `/pharmacie/${id}`)
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
                            <th className="th-sm">Email</th>   
                            <th className="th-sm">Telephone</th>             
                            <th className="th-sm">Adresse</th>     
                            <th className="th-sm">Localisation</th>                     
                            <th className="th-sm">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                     {pharmacie.map((el)=>(
                        
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.username}</td>
                            <td>{el.telephone}</td>
                            <td>{el.email}</td>
                            <td>{el.adress}</td>
                            <td>{el.localisation}</td>
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


export default PharmacieTable;
