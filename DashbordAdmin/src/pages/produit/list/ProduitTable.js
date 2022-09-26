import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const Mon_URL = "http://192.168.1.221:4000";

<<<<<<< HEAD
const ProduitTable = () => {
  const [produit, setproduit] = useState([]);

  useEffect(() => {
    axios.get(Mon_URL + "/produit/").then((res) => {
      let data = res.data;
      console.log(data);
      setproduit(data);
    });
    //deleteCard()
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Etes-vous sur?",
      text: "vous supprimez le client",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(Mon_URL + `/produit/${id}`)
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
        swal("Supprimer!", "le client est supprimé!", "success");
      }
    });
  };
=======
const Mon_URL = "http://192.168.1.41:4000";

const ProduitTable = ()  => {
const [produit, setproduit] = useState([]);
const [changeData, setChangeData] = useState(false);
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");
const data = produit;

const [test,setTest] = useState({
    id: "",
    nom: "",
    etat: "",
    photo: "",
  });

  //Update data
const updateState = (t) => {
    setTest(t);
  };

  const handleUpdate = (id) => {
    setLoading(true);
    axios.put(Mon_URL + `/produit/${id}`, test).then((response) => {
      setTest({});
      setChangeData(!changeData);
      setLoading(false);
      setStatus(response.status);
      window.location.reload();
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTest({ ...test, [name]: value });
  };

   
//Delete Data
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
        }   window.location.reload();
    })
}

//Display data          

useEffect(() => {
    axios.get(Mon_URL + "/produit/").then((res) => {
      let data = res.data;
      console.log(data);
      setproduit(data);
    });
  },[]);

        return (
            <>
                
                  <table id="dtBasicExample" className="table table-striped table-bordered table-sm">
                        <thead>
                            <tr>
                            <th className="th-sm">Id</th>
                            <th className="th-sm">Nom</th>
                            <th className="th-sm">etat</th>
                            <th className="th-sm">Photo</th>
                            <th className="th-sm">Action</th>
                            </tr>
                        </thead>
                    <tbody>
                        {data.map((el) => (
                        <tr key={"Prod_" + el.id}>
                            <td>{el.id}</td>
                            {test.id === el.id ? (
                            <td>
                            <input
                                type="text"
                                name="nom"
                                onChange={handleChange}
                                defaultValue={el.nom}
                                />
                            </td>
                            ) : (
                            <td>{el.nom}</td>
                            )}
                            {test.id === el.id ? (
                            <td>
                                <input
                                type="text"
                                name="etat"
                                onChange={handleChange}
                                defaultValue={el.etat}
                                />
                            </td>
                            ) : (
                            <td>{el.etat}</td>
                            )}

                            {test.id === el.id ? (
                            <td>
                            <input
                                type="text"
                                name="photo"
                                onChange={handleChange}
                                defaultValue={el.photo}
                                />
                            </td>
                            ) : (
                            <td> <img
                                width="8%"
                                type="image"
                                alt="img"
                                name="photo"
                                onChange={handleChange}
                                src={el.photo}
                                /></td>
                            )}
                            <td>
                            {test.id === el.id ? (
                                <td>
                                {" "}
                                <button
                                    onClick={(e) => handleUpdate(el.id)}
                                    className="btn btn-info btn-sm mr-1">
                                    <i className="fa fa-check"></i>
                                </button>
                                <button
                                    onClick={(e) => {
                                    handleDelete(el.id);
                                    }}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>{" "}
                                </td>
                            ) : (
                                <td>
                                <button
                                    onClick={() => updateState(el)}
                                    className="btn btn-info btn-sm mr-1">
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button
                                    onClick={(e) => {
                                    handleDelete(el.id);
                                    }}
                                    className="btn btn-danger btn-sm mr-1">
                                    <i className="fa fa-trash"></i>
                                </button>{" "}
                                </td>
                            )}
                            </td>
                        </tr>
                        ))}
          </tbody>
        </table>
            </>
        );
    }
>>>>>>> e3f2210ac8b9f5bf6f4a9e0ac681d67eb2862602

  return (
    <>
      <table
        id="dtBasicExample"
        className="table table-striped table-bordered table-sm"
      >
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
          {produit.map((el) => (
            <tr>
              <td>{el.id}</td>
              <td>{el.nom}</td>
              <td>{el.etat}</td>
              <td>{el.photo}</td>
              <td>
                <button className="btn btn-info btn-sm mr-1">
                  <i className="fa fa-pencil"></i>
                </button>
                <button
                  onClick={(e) => handleDelete(el.id)}
                  className="btn btn-danger btn-sm mr-1"
                >
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProduitTable;
