import  { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Shape = () => {

  const [data,setData]=useState([
    {tankType:"cylindrical",tankHeight:"1950",tankWidth:"300",tankDiameter:"20",lowLevel:'100',highLevel:'1900'}
  ])
  const [tankType,setTankType]=useState('cylindrical')
  const [tankHeight,setTankHeight]=useState()
  const [tankWidth,setTankWidth]=useState()
  const [tankDiameter,setTankDiameter]=useState()
  const [lowLevel,setLowLevel]=useState()
  const [highLevel,setHighLevel]=useState()
  const navigate=useNavigate()


  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const response=await axios.post('/api/tof',{tankType,tankHeight,tankWidth,tankDiameter,lowLevel,highLevel})
        console.log(response.data)
        
        setTankType('cyclindrical')
        setTankHeight('')
        setTankWidth('')
        setTankDiameter('')
        setLowLevel('')
        setHighLevel('')
        navigate('/shape')
    } catch(err){
      console.log(err)
    }
  }
  const getTankDetails=async()=>{
    try{
     const response=await axios.get('/api/tof')
     setData(response.data)
     console.log(response.data)

    }catch(err){
      console.log(err)
    }

  }
  useEffect(()=>{
     getTankDetails()
  },[])
  // const [shape, setShape] = useState("Rectangle");

  // const [rectangle, setRectangle] = useState({
  //   length: 40,
  //   width: 15,
  //   sensorHeight: 70,
  // });
  // const [cylindrical, setCylindrical] = useState({ diameter: 40 });

  // const handleShape = (selectedShape) => {
  //   setShape(selectedShape);
  //   if (selectedShape === "Rectangle") {
  //     setRectangle({ length: 40, width: 15, sensorHeight: 70 });
  //   } else if (selectedShape === "Cylindrical") {
  //     setCylindrical({ diameter: 40 });
  //   }
  // };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex fw-bold justify-content-between">
          <Link to="/" className="navbar-brand" style={{ color: "blue" }}>
            MACSOFT WMS
          </Link>
          <Link to="/shape" classNameName="btn btn-primary">
            <i className="fa-solid fa-shapes"></i>
          </Link>
        </div>
      </nav>

{/* 
      <div classNameName="text-center mt-4">
  {shape === "Rectangle" && (
    <div
      classNameName="col-10 col-md-6 mx-auto p-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <p
        classNameName="fw-bold fs-5 border rounded p-3 text-center mt-3"
        style={{
          backgroundColor: "rgb(58, 202, 181)",
          borderRadius: "8px",
        }}
      >
        {shape} Dimensions
      </p>

      <div classNameName="d-flex flex-wrap justify-content-center mb-3">
        <div
          classNameName="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div classNameName="card-header d-flex align-items-center fw-medium">
            <i classNameName="bi bi-droplet fs-5 me-2"></i>
            Tank Length
          </div>
          <div classNameName="card-body text-center">
            <h5 classNameName="card-title">
              <span style={{ color: "blue" }}>{rectangle.length}</span>
            </h5>
          </div>
        </div>
        <div
          classNameName="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div classNameName="card-header d-flex align-items-center fw-medium">
            <i classNameName="bi bi-droplet fs-5 me-2"></i>
            Tank Width
          </div>
          <div classNameName="card-body text-center">
            <h5 classNameName="card-title">
              <span style={{ color: "blue" }}>{rectangle.width}</span>
            </h5>
          </div>
        </div>
        <div
          classNameName="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div classNameName="card-header d-flex align-items-center fw-medium">
            <i classNameName="bi bi-droplet fs-5 me-2"></i>
            Sensor Height
          </div>
          <div classNameName="card-body text-center">
            <h5 classNameName="card-title">
              <span style={{ color: "blue" }}>{rectangle.sensorHeight}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )}
  {shape === "Cylindrical" && (
    <div
      classNameName="col-10 col-md-6 mx-auto p-5"
      style={{
        backgroundColor: "#f8f9fa",
        borderRadius: "10px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <p
        classNameName="fw-bold fs-5 border rounded p-3 text-center mt-3"
        style={{
          backgroundColor: "rgb(58, 202, 181)",
          borderRadius: "8px",
        }}
      >
        {shape} Dimensions
      </p>

      <div classNameName="d-flex flex-wrap justify-content-center mb-3">
        <div
          classNameName="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div classNameName="card-header d-flex align-items-center fw-medium">
            <i classNameName="bi bi-droplet fs-5 me-2"></i>
            Tank Diameter
          </div>
          <div classNameName="card-body text-center">
            <h5 classNameName="card-title">
              <span style={{ color: "blue" }}>{cylindrical.diameter}</span>
            </h5>
          </div>
        </div>
        <div
          classNameName="card text-dark bg-light m-2"
          style={{
            maxWidth: "18rem",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <div classNameName="card-header d-flex align-items-center fw-medium">
            <i classNameName="bi bi-droplet fs-5 me-2"></i>
            Tank Diameter
          </div>
          <div classNameName="card-body text-center">
            <h5 classNameName="card-title">
              <span style={{ color: "blue" }}>{cylindrical.diameter}</span>
            </h5>
          </div>
        </div>
      </div>
      
    </div>
  )}
</div>

<div classNameName="d-flex justify-content-evenly mt-3">
  <div
    classNameName="card text-center"
    style={{
      width: "150px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#e7f3ff",
    }}
  >
    <div classNameName="card-body">
      <i classNameName="bi bi-arrow-down-circle fs-4 text-primary mb-2"></i>
      <p classNameName="fw-bold">Low Level</p>
    </div>
  </div>

  <div
    classNameName="card text-center"
    style={{
      width: "150px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff3cd",
    }}
  >
    <div classNameName="card-body">
      <i classNameName="bi bi-arrow-up-circle fs-4 text-warning mb-2"></i>
      <p classNameName="fw-bold">High Level</p>
    </div>
  </div>
</div>
 */}
 <div className=" container text-center mt-3 ">
  <div className="d-flex justify-content-evenly">
    <h3 className="fw-bold">Tank Details</h3>
    <button type="button" className="btn btn-primary fw-medium" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Edit</button>
  </div>
  <div >
  </div>
  {data.map((value) => (
  <div key={value.id}> {/* Make sure to use a unique key for each element */}
    {value.tankType}
    {value.highLevel}
  </div>
))}

 </div>

 

<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit | Tank Details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form className="fw-medium" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Tank Type :</label>
            <select className="form-select" aria-label="Default select example">
  
              <option value="cylindrical">Cylindrical</option>
             <option value="rectangle">Rectangle</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Tank Height :</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Tank Width :</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Tank Diameter :</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Low Level :</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">High Level :</label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
         
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button"  className="btn btn-primary">Submit</button>
      </div>
    </div>
  </div>
</div>




    </>
  );
};

export default Shape;
