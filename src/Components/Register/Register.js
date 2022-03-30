import React from "react";
import "../Register/Register.css";
import gmail from "../../assest/img/gmail.jpg";
import gmailhome from "../../assest/img/gmailhome.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
      username: "",
    },
    onSubmit: async (values) => {
      var data = await axios
        .post("https://gmail-clone-guvi.herokuapp.com/register", values)
        .then((res) => {
          return res.data;
        });
      console.log(data);
      navigate("/");
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
          <p className="heading">Register to the Gmail</p>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <input
                  type="text"
                  placeholder="Enter your first Name"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                  name="firstname"
                />
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                  name="lastname"
                />
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  name="password"
                />
                <input
                  type="number"
                  placeholder="Enter your Number"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  name="phone"
                />
                <input
                  type="text"
                  placeholder="Enter your required username"
                  className="form-control inputfield1"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  name="username"
                />
                <div className="buttongro1">
                  <button className="btn btn-primary button" type="submit">
                    Register
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

export default Register;
