import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select'

const UserForm = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    adress: "",
    role: "",
  });

  const options = [
       { value: 'Pharmacien', label: 'Pharmacien' },
       { value: 'Patient', label: 'Patient' },
    
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  //Ajout Client
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: data.username,
      email: data.email,
      password: data.password,
      adress: data.adress,
      role: selectedOption.value,
    };
    axios
      .post(`http://192.168.1.41:4000/user/register`, user)
      .then((response) => {
        if (response.statusText) {
          alert(response.data.message);
        }
      })

      .catch((error) => alert("User Already exists"));
  };

  return (
    <>
      <div className="topic_form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={handleChange}
                  name="username"
                  placeholder="Entrer le nom"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={handleChange}
                  name="email"
                  placeholder="Entrer l'email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                  name="password"
                  placeholder="Entrer le mot de passe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirmer Mot de passe</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Entrer le mot de passe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="adress">Adresse</label>
                <input
                  type="text"
                  className="form-control"
                  id="adress"
                  onChange={handleChange}
                  name="adress"
                  placeholder="Entrer l'adresse"
                  required
                />
              </div>

                <div className="form-group">
                  <label htmlFor="name">Role</label>
                  <Select 
                  options={options}
                  onChange={setSelectedOption}
                  defaultValue={selectedOption}  
                  placeholder="Choisir votre Statut"
                  />
                </div>
              </div>
            </div>

          <button className="btn btn-success btn-sm form-control mb-3 btn_custom">
            Enregistrer
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
