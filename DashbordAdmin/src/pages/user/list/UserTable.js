import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";



const Mon_URL = "http://192.168.1.41:4000";

const UserTable = ()  => {

const [user, setuser] = useState([]);

   
   
useEffect(() => {
    axios.get(Mon_URL + "/user/").then((res) => {
      let data = res.data;
      console.log(data);
      setuser(data);
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
            .delete(Mon_URL + `/user/${id}`)
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
                    <th className="th-sm">Adresse</th>         
                    <th className="th-sm">Role</th>
                    <th className="th-sm">Action</th>

                </tr>
            </thead>
            <tbody>
            {user.map((el)=>(
                
                <tr>
                    <td>{el.id}</td>
                    <td>{el.username}</td>
                    <td>{el.email}</td>
                    <td>{el.adress}</td>
                    <td>{el.role}</td>

                    <td>
                        
                        <button className="btn btn-info btn-sm mr-1"><i className="fa fa-pencil"></i></button>
                        <button
                            onClick={e =>   { handleDelete(el.id)}}
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

export default UserTable;
