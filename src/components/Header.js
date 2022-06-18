import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-row ">
            <h3 className=" m-3 title">ATools.</h3>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-row-reverse">
            <button className="btn btn-primary  login">login</button>
            <button className="btn btn-primary  trial">start free trial</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
