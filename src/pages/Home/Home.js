import React from "react";

import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "../Home/Home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
