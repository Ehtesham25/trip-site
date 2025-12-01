import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllTrips } from "../src/actions/TripActions"; 
import "./App.css";

import { Navbar, AddNewTrip, EditTrip, AllTrips } from "./components";
function App() {
  const dispatch = useDispatch();
  const trips = useSelector((state) => state.tripsReducer);
  useEffect(() => {
    dispatch(getAllTrips());
  }, [trips]);
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<AllTrips />} />
          <Route exact path="/addNew" element={<AddNewTrip />} />
          <Route exact path="/editTrip" element={<EditTrip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
