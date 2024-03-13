// import { useState } from "react";
// import React from "react";
// import RoutesController from "./Components/Routes";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import NavBar from "./Components/Navbar";
import NewExcercise from "./Components/NewExcercise";
import Excercises from "./Components/Pages/Excercises";
import EditExcercise from "./Components/EditExcercise";
import ShowPage from "./Components/ShowPage";
function App() {
  // const [count, setCount] = useState(0)
  // const apiKey = import.meta.env.VITE_API_KEY

  return (
    <div className="App">
      <NavBar />
      {/* <Router> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newroutine" element={<NewExcercise />} />
        <Route path="/excercises" element={<Excercises />} />
        <Route path="/excercises/:id" element={<ShowPage />} />
        <Route path ="/excercises/:id/editform/" element= {<EditExcercise/>}/> 
        {/* <Route path="*" err/> */}
      </Routes>
    </div>
  );
}

export default App;
