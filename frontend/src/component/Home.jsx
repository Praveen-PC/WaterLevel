import { useState, useEffect } from "react";
import "../App.css";

const Home = () => {
  const [tankStatus, setTankStatus] = useState("ON");
  const [capacity] = useState(22000);
  const [currentLevel, setCurrentLevel] = useState(3000);
  const [message, setMessage] = useState("");
  const waterLevelPercentage = (currentLevel / capacity) * 100;
  const remainingSpace = capacity - currentLevel;

  let waterColor = waterLevelPercentage <= 10 ? "red" : "rgb(19, 157, 247)";

  useEffect(() => {
    if (tankStatus === "ON" && waterLevelPercentage <= 10) {
      setMessage("Warning: Water level is below 10%!");
    } else if (tankStatus === "OFF") {
      setMessage("Motor is OFF.");
    } else {
      setMessage("");
    }
  }, [currentLevel, capacity, tankStatus]);

  const handleMotor = () => {
    if (tankStatus === "ON") {
      setTankStatus("OFF");
      setCurrentLevel(0);
    } else {
      setTankStatus("ON");
      setCurrentLevel(3000);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex fw-bold">
          <a className="navbar-brand" style={{ color: "blue" }} href="#">
            MACSOFT WMS
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="row p-4">
          <div className="col border rounded tankcol shadow-sm">
            <div className="tank-container">
              <div className="tank">
                <div className="tank-label">Water Tank</div>
                {tankStatus === "ON" && (
                  <div
                    className="water"
                    style={{
                      height: `${waterLevelPercentage}%`,
                      backgroundColor: waterColor,
                    }}
                  >
                    <span
                      className="p-2"
                      style={{ color: "white", fontWeight: "bold" }}
                    >
                      {currentLevel}L
                    </span>
                  </div>
                )}
                <div className="tank-bottom" /> 
              </div>
              <h3 className="text-center">Tank 1</h3>
            </div>
          </div>

          <div
            className="col p-5"
            style={{
              backgroundColor: "#f8f9fa",
              borderRadius: "10px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h1 className="">
                Tank 1: <span style={{ color: "blue" }}>WMS</span>
              </h1>
              <button
                className={`btn ${
                  tankStatus === "ON" ? "btn-success" : "btn-danger"
                }`}
                onClick={handleMotor}
              >
                {tankStatus}
              </button>
            </div>

            {tankStatus === "ON" ? (
              <>
                {message && <div className="alert alert-danger">{message}</div>}
                <p
                  className="fw-bold fs-5 border rounded p-3 text-center mt-3"
                  style={{
                    backgroundColor: "rgb(58, 202, 181)",
                    // color: "white",
                    borderRadius: "8px",
                  }}
                >
                  Tank Capacity: {capacity} liters
                </p>

                <div className="d-flex flex-wrap justify-content-evenly mb-3">
                  <div
                    className="card text-dark bg-light mb-4"
                    style={{
                      maxWidth: "18rem",
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="card-header d-flex align-items-center">
                      <i className="bi bi-droplet fs-5 me-2"></i>
                      Current Water Level
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        <span style={{ color: "blue" }}>
                          {currentLevel} liters
                        </span>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="card text-dark bg-light mb-4"
                    style={{
                      maxWidth: "18rem",
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="card-header d-flex align-items-center">
                      <i className="bi bi-percent fs-5 me-2"></i>
                      Water Level Percentage
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        <span style={{ color: "blue" }}>
                          {waterLevelPercentage.toFixed()} %
                        </span>
                      </h5>
                    </div>
                  </div>

                  <div
                    className="card text-dark bg-light mb-4"
                    style={{
                      maxWidth: "18rem",
                      borderRadius: "10px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="card-header d-flex align-items-center">
                      <i className="bi bi-water fs-5 me-2"></i>
                      Remaining Space
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title">
                        <span style={{ color: "blue" }}>
                          {remainingSpace} liters
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3 justify-content-center">
                  <button
                    className="btn btn-info mx-3"
                    onClick={() => setCurrentLevel(currentLevel + 500)}
                    disabled={currentLevel >= capacity}
                  >
                    Add Water
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => setCurrentLevel(currentLevel - 500)}
                    disabled={currentLevel <= 0}
                  >
                    Remove Water
                  </button>
                </div>
              </>
            ) : (
              <div className="alert alert-warning mt-3">{message}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
