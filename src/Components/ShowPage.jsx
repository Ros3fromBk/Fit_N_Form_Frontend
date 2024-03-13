import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

import { Link, useParams, useNavigate } from "react-router-dom";

const api = import.meta.env.VITE_BASE_URL;

function ShowPage(props) {
  const [exerciseInfo, setExerciseInfo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    axios
      .delete(`${api}/excercises/${id}`)
      .then((res) => {
        navigate(`/excercises`);
      })
      .catch((err) => console.log(err));
console.log("DELETED")  };
  useEffect(() => {
    axios
      .get(`${api}/excercises/${id}`)
      .then((response) => setExerciseInfo(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      <div className="single-exercise">
        <h1>{exerciseInfo.name}</h1>
        <p>{exerciseInfo.targeted_muscles}</p>
        <p>{exerciseInfo.body_parts}</p>
        <p>{exerciseInfo.added_to_routine}</p>
      </div>
      <aside>
        <Link to={`/excercises/${id}/editform`}>EDIT</Link>
        <br />
        <button onClick={() => handleDelete()}>DELETE</button>
      </aside>
    </>
  );
}

export default ShowPage;
