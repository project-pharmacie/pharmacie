import React, { Component ,useState , useEffect} from "react";
import { Link ,useNavigate  } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [user, setUser] = useState("");

  const error = "";

  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    console.log(data);
  };
  useEffect(() => {
    localStorage.setItem("hello", user);
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://192.168.1.100:4000/admin/authenticate";
      await axios.post(url, data).then((response) => {
        if (
          response.data === "Invalid Password" ||
          response.data === "Invalid Email or Password"
        ) {
          alert("Invalid Password");
          // navigate.push("/login");
        } else if (response.msg === "logged in successfully")
          setUser(data.username);
        navigate("/Calendar");
        localStorage.setItem("doctor", JSON.stringify(response.data.token));
        // console.log('user',user)
      });
    } catch (error) {
      console.log(error);
    }
  };

 const loginHandler = () => {
    props.history.push("/dashboard");
    window.location.reload();
  };

  return (
    <>
      <div className="fullsheet">
        <div className="auth-form">
          <div className="avatar"></div>
          <h4 className="modal-title">Connecter avec votre compte</h4>
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                ref="email"
                name="email"
                placeholder="Username"
                required
              />
              {/* <small className="text-danger">{this.state.email}</small> */}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                ref="password"
                name="password"
                placeholder="***********"
                required
              />
              {/* <small className="text-danger">{this.state.password}</small> */}
            </div>
            <div className="form-group small clearfix">
              <label className="checkbox-inline">
                <input type="checkbox" /> Souvien de moi
              </label>
              <button
                type="button"
                data-toggle="modal"
                data-target="#model"
                className="forgot-link btn_modal"
              >
                Mot de passe oublié ?
              </button>
            </div>
            <button
              onClick={loginHandler}
              className="btn btn-primary btn-block btn-lg form-control mb-3"
            >
              Connecter
            </button>
          </form>
          <div className="text-center small text-dark">
            Vous n'avez pas un compte? <Link to="/singup">S'inscrire</Link>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="model"
        role="dialog"
        aria-labelledby="model"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <ForgotPassword />
        </div>
      </div>
    </>
  );
};

export default Login;
