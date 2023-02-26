import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ReactSVG } from "react-svg";
import axios from "axios";

const App = () => {

  const [results, setResults] = useState([])

  const getResults = async() => {
    const {data} = await axios.get('http://localhost:3000/results')
    setResults(data)
  }

  useEffect(() => {
    getResults()
  },[])

  return (
    <div className="container-fluid">
      <div className="main d-flex justify-content-center align-items-center">
        <div className="card rounded-5 border-0 shadow-lg">
          <div className="row g-0">
            <div className="col-sm-6">
              <div className="card-body card-1 rounded-5 px-5">
                <h5 className="card-title txt-secondary my-4">Your Result</h5>
                <div className="score-block d-flex flex-column justify-content-center align-items-center mx-auto my-4 bg-primary rounded-circle">
                  <h3 className="txt-primary mb-0 fw-bold">76</h3>
                  <p className="txt-secondary mb-0">of 100</p>
                </div>
                <div className="">
                  <h2 className="txt-primary">Great</h2>
                  <p className="txt-secondary py-2">
                    You scored higher than 65% of the people who have taken
                    these tests.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card-body card-2 px-5">
                <h5 className="card-title my-4 pb-2 txt-danger fw-bold">Summary</h5>
                <div className="my-4">
                  {results?.map((result) => (
                    <div key={result?.id} className={`d-flex justify-content-between ${result?.bgColor} px-3 py-2 rounded-3 my-3`}>
                    <div className={`d-flex ${result?.textColor}`}>
                      <ReactSVG src={result?.icon} />
                      <p className="ms-2 fw-semibold">{result?.category}</p>
                    </div>
                    <div className="">
                      <p className="txt-danger fw-semibold">{result?.score} <span className="txt-gray">/ 100</span></p>
                    </div>
                  </div>
                  ))}

                </div>
                <div className="main-btn btn-bg w-100 py-3 mt-5 rounded-pill text-center">
                  <p className="txt-primary">Continue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;