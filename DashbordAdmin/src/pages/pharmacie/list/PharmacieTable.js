import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

<<<<<<< HEAD
const Mon_URL = "http://192.168.1.177:4000";

const PharmacieTable = () => {
  const [pharmacie, setpharmacie] = useState([]);

  useEffect(() => {
    axios.get(Mon_URL + "/pharmacie/").then((res) => {
      let data = res.data;
      console.log(data);
      setpharmacie(data);
    });
  }, []);
=======
const Mon_URL = "http://192.168.1.41:4000";


const PharmacieTable = ()  => {

const [pharmacie, setpharmacie] = useState([]);
const [changeData, setChangeData] = useState(false);
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");
const data = pharmacie;

const [test,setTest] = useState({
        id: "",
        username: "",
        email: "",
        telephone: "",
        adress: "",
        photo: "",
      });
    
      //Update data
    const updateState = (t) => {
        setTest(t);
      };
    
      const handleUpdate = (id) => {
        setLoading(true);
        axios.put(Mon_URL + `/pharmacie/${id}`, test).then((response) => {
          setTest({});
          setChangeData(!changeData);
          setLoading(false);
          setStatus(response.status);
          window.location.reload();
        });
      };
>>>>>>> e3f2210ac8b9f5bf6f4a9e0ac681d67eb2862602

      const handleChange = (e) => {
        const { value, name } = e.target;
        setTest({ ...test, [name]: value });
      };

  //delete Data
  const handleDelete = (id) => {
    swal({
<<<<<<< HEAD
      title: "Etes-vous sur?",
      text: "vous supprimez le client",
      icon: "warning",
      buttons: ["Non", "Oui"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(Mon_URL + `/pharmacie/${id}`)
          .then(({ data }) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
        swal("Supprimer!", "le client est supprimé!", "success");
      }
    });
  };
=======
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
        }   window.location.reload();
    })
}
//Display data          
useEffect(() => {
    axios.get(Mon_URL + "/pharmacie/").then((res) => {
      let data = res.data;
      console.log(data);
      setpharmacie(data);
    
    });
  
  },[]);


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
                            <th className="th-sm">Photo</th>                     
                            <th className="th-sm">Actions</th>
                            </tr>
                        </thead>
                    <tbody>
                        {data.map((el) => (
                        <tr key={"Pharm_" + el.id}>
                            <td>{el.id}</td>

                            {test.id === el.id ? (
                            <td>
                                <input
                                type="text"
                                name="username"
                                onChange={handleChange}
                                defaultValue={el.username}
                                />
                            </td>
                            ) : (
                            <td>{el.username}</td>
                            )}
                            {test.id === el.id ? (
                            <td>
                                <input
                                type="text"
                                name="email"
                                onChange={handleChange}
                                defaultValue={el.email}
                                />
                            </td>
                            ) : (
                            <td>{el.email}</td>
                            )}
                            {test.id === el.id ? (
                            <td>
                                <input
                                type="text"
                                name="telephone"
                                onChange={handleChange}
                                defaultValue={el.telephone}
                                />
                            </td>
                            ) : (
                            <td>{el.telephone}</td>
                            )}
                            {test.id === el.id ? (
                            <td>
                                <input
                                type="text"
                                name="adress"
                                onChange={handleChange}
                                defaultValue={el.adress}
                                />
                            </td>
                            ) : (
                            <td>{el.adress}</td>
                            )}

                            {test.id === el.id ? (
                            <td>
                            <td>
                                <input
                                type="text"
                                name="photo"
                                onChange={handleChange}
                                defaultValue={el.photo}
                                />
                            </td>
                            </td>
                            ) : (
                            <td> <img
                                width="27%"
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
                                    className="btn btn-info btn-sm mr-1"
                                >
                                    <i className="fa fa-check"></i>
                                </button>
                                <button
                                    onClick={(e) => {
                                    handleDelete(el.id);
                                    }}
                                    className="btn btn-danger btn-sm mr-1"
                                >
                                    <i className="fa fa-trash"></i>
                                </button>{" "}
                                </td>
                            ) : (
                                <td>
                                <button
                                    onClick={() => updateState(el)}
                                    className="btn btn-info btn-sm mr-1"
                                >
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button
                                    onClick={(e) => {
                                    handleDelete(el.id);
                                    }}
                                    className="btn btn-danger btn-sm mr-1"
                                >
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
            <th className="th-sm">Email</th>
            <th className="th-sm">Telephone</th>
            <th className="th-sm">Adresse</th>
            <th className="th-sm">Localisation</th>
            <th className="th-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pharmacie.map((el) => (
            <tr>
              <td>{el.id}</td>
              <td>{el.username}</td>
              <td>{el.telephone}</td>
              <td>{el.email}</td>
              <td>{el.adress}</td>
              <td>{el.localisation}</td>
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

export default PharmacieTable;
