import React from "react";
import "../Login/Login.css";
import gmail from "../../assest/img/gmail.jpg";
import gmailhome from "../../assest/img/gmailhome.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [store, setstore] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      var data = await axios
        .post("https://gmail-clone-guvi.herokuapp.com/login", values)
        .then( async(res) => {
          var userdata = await axios
        .get("https://gmail-clone-guvi.herokuapp.com/viewall")
        .then((res) => {
          return res.data;
        });
      console.log(values.email);
      const checkuser = await userdata.filter((data) => {
        return data.email === values.email;
      });
      if (checkuser !== 0) {
        sessionStorage.setItem("from", checkuser[0].email);
        sessionStorage.setItem("username", checkuser[0].username);
        navigate("/home");
      } else {
        alert("Please register your account");
      }
        })
        .catch((err) => {
          return alert("Incorrect username and password");
        });

      


    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="gmail1" src={gmailhome} />
        </div>
        <div className="col-md-6">
          <img className="gamil2" src={gmail} />
          <p className="heading">Login to the Gmail</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="form-control inputfield"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control inputfield"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
                <div className="buttongro">
                  <Link to="/register">
                    <button className="btn btn-primary button">Register</button>
                  </Link>

                  <button className="btn btn-primary button" type="submit">
                    Login
                  </button>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
