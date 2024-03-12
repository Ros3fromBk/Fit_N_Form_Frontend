// import NavBar from "../Navbar"
// import RoutesController from "../Routes"
// import React from 'react'

import axios from "axios";
import { useEffect, useState} from "react";

import { Link, useParams  } from "react-router-dom";


function Excercises() {
  const api = import.meta.env.VITE_BASE_URL;
  const [excercise, setExcercise] = useState([]);
  const {id} = useParams()

  // const excercises = excercise.find(eachEl => eachEl.excercises_id === id)

  useEffect(() => {
    axios
      .get(`${api}/excercises`)
      .then((response) => setExcercise(response.data))
      .catch((error) => console.log(error));
  }, [excercise]);

  return (
    <div className="excercise_container">
     {excercise.map((el, index) => (
        <div 
        key={index}>
<Link to={`/exercises/${el.excercise_id}`}>
      <p>{el.name}</p>
    </Link>          <p>{el.targeted_muscles}</p>
          <p>{el.added_to_routine}</p>
          <p>{el.body_parts}</p>
        </div>
     ))}
      
    </div>
  );
}

export default Excercises;
