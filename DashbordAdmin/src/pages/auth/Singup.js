import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Singup = (props) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: data.username,
      password: data.password,
    };

    axios.post(`http://192.168.1.177:4000/admin/register`, user)
      .then((response) => {
        console.log('zzzzzzzzzzzzzzz',response);

        if (response.statusText) {
          alert(response.data.message);
          navigate("/");
        }
      })

      .catch((error) => alert("User Already exists"));
  };

  return (
    <>
      <div className="fullsheet">
        <div className="auth-form sing_up">
          <div className="avatar"></div>
          <h4 className="modal-title">Creer un compte</h4>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="username"
                placeholder="Nom"
                required
              />
              {/* <small className="text-danger">{state.your_name}</small> */}
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                onChange={handleChange}
                name="password"
                placeholder="Mot de passe"
                required
              />
              {/* <small className="text-danger">{state.password}</small> */}
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password2"
                placeholder="Confirmer le mot de passe"
                required
              />
              {/* <small className="text-danger">{state.password2}</small> */}
            </div>
            <button className="btn btn-primary btn-block btn-lg form-control mb-3">
              S'inscrire
            </button>
          </form>

          <div className="text-center small text-dark">
            Avez-vous un compte?
            <nav>
              {" "}
              <Link to="/">Connecter </Link>
            </nav>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Singup;
