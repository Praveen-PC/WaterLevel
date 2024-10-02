import React, { useState } from "react";
import { Link } from "react-router-dom";

const Shape = () => {
  const [shape, setShape] = useState("Rectangle");

  const [rectangle, setRectangle] = useState({
    length: 40,
    width: 15,
    sensorHeight: 70,
  });
  const [cylindrical, setCylindrical] = useState({ diameter: 40 });

  const handleShape = (selectedShape) => {
    setShape(selectedShape);
    if (selectedShape === "Rectangle") {
      setRectangle({ length: 40, width: 15, sensorHeight: 70 });
    } else if (selectedShape === "Cylindrical") {
      setCylindrical({ diameter: 40 });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex fw-bold justify-content-between">
          <Link to="/" className="navbar-brand" style={{ color: "blue" }}>
            MACSOFT WMS
          </Link>
          <Link to="/shape" className="btn btn-primary">
            <i className="fa-solid fa-shapes"></i>
          </Link>
        </div>
      </nav>

      <div className="text-center mt-4">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleShape("Rectangle")}
          >
            Rectangle
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleShape("Cylindrical")}
          >
            Cylindrical
          </button>
        </div>
      </div>

      <div className="text-center mt-4">
  {shape === "Rectangle" && (
    <div
      className="col-10 col-md-6 mx-auto p-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <p
        className="fw-bold fs-5 border rounded p-3 text-center mt-3"
        style={{
          backgroundColor: "rgb(58, 202, 181)",
          borderRadius: "8px",
        }}
      >
        {shape} Dimensions
      </p>

      <div className="d-flex flex-wrap justify-content-center mb-3">
        <div
          className="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="card-header d-flex align-items-center fw-medium">
            <i className="bi bi-droplet fs-5 me-2"></i>
            Tank Length
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>{rectangle.length}</span>
            </h5>
          </div>
        </div>
        <div
          className="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="card-header d-flex align-items-center fw-medium">
            <i className="bi bi-droplet fs-5 me-2"></i>
            Tank Width
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>{rectangle.width}</span>
            </h5>
          </div>
        </div>
        <div
          className="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="card-header d-flex align-items-center fw-medium">
            <i className="bi bi-droplet fs-5 me-2"></i>
            Sensor Height
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>{rectangle.sensorHeight}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )}
  {shape === "Cylindrical" && (
    <div
      className="col-10 col-md-6 mx-auto p-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <p
        className="fw-bold fs-5 border rounded p-3 text-center mt-3"
        style={{
          backgroundColor: "rgb(58, 202, 181)",
          borderRadius: "8px",
        }}
      >
        {shape} Dimensions
      </p>

      <div className="d-flex flex-wrap justify-content-center mb-3">
        <div
          className="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="card-header d-flex align-items-center fw-medium">
            <i className="bi bi-droplet fs-5 me-2"></i>
            Tank Diameter
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>{cylindrical.diameter}</span>
            </h5>
          </div>
        </div>
        <div
          className="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div className="card-header d-flex align-items-center fw-medium">
            <i className="bi bi-droplet fs-5 me-2"></i>
            Tank Diameter
          </div>
          <div className="card-body text-center">
            <h5 className="card-title">
              <span style={{ color: "blue" }}>{cylindrical.diameter}</span>
            </h5>
          </div>
        </div>
      </div>
      
    </div>
  )}
</div>

<div className="d-flex justify-content-evenly mt-3">
  <div
    className="card text-center"
    style={{
      width: "150px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#e7f3ff",
    }}
  >
    <div className="card-body">
      <i className="bi bi-arrow-down-circle fs-4 text-primary mb-2"></i>
      <p className="fw-bold">Low Level</p>
    </div>
  </div>

  <div
    className="card text-center"
    style={{
      width: "150px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff3cd",
    }}
  >
    <div className="card-body">
      <i className="bi bi-arrow-up-circle fs-4 text-warning mb-2"></i>
      <p className="fw-bold">High Level</p>
    </div>
  </div>
</div>


      
    </>
  );
};

export default Shape;
