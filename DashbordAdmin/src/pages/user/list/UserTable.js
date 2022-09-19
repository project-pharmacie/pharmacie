import React, { useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const Mon_URL = "http://192.168.1.177:4000";

const UserTable = () => {
  const [users, setusers] = useState([]);
  const [changeData, setChangeData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [View, SetView] = useState(Boolean);

  const [test, setTest] = useState({
    id: "",

    username: "",

    email: "",

    adress: "",

    role: "",
  });

  // const upUSer ()

  //Update

  const updateState = (t) => {
    setTest(t);
  };

  const handleUpdate = (id) => {
    setLoading(true);
    console.log("===>testBeforeSendData", test);
    axios.put(Mon_URL + `/user/${id}`, test).then((response) => {
      console.log("response", response);
      setTest({});
      setChangeData(!changeData);
      setLoading(false);
      setStatus(response.status);
    });
  };

  const handleChange = (e) => {
    console.log("current", e.currentTarget);
    const { value, name } = e.target;
    console.log("======>", { [name]: value });

    setTest({ ...test, [name]: value });
  };

  //delete

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

          .delete(Mon_URL + `/user/${id}`)

          .then(({ data }) => {
            console.log(data);
          })

          .catch((err) => console.log(err));

        swal("Supprimer!", "le client est supprimé!", "success");
      }
    });
  };

  // Affichage de la liste

  useEffect(() => {
    axios.get(Mon_URL + "/user/").then((res) => {
      let data = res.data;

      console.log(data);

      setusers(data);
    });
  }, [changeData]);

  const data = users;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <table
          id="dtBasicExample"
          className="table table-striped table-bordered table-sm"
        >
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
            {data.map((el) => (
              <tr key={"User_" + el.id}>
                <td>{el.id}</td>

                {test === el.id ? (
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

                {test === el.id ? (
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
                    <input
                      type="text"
                      name="role"
                      onChange={handleChange}
                      defaultValue={el.role}
                    />
                  </td>
                ) : (
                  <td>{el.role}</td>
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
      )}
    </>
  );
};

export default UserTable;
