import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NewExcercise from "./NewExcercise";

const api = import.meta.env.VITE_BASE_URL;
const EditExcercise = (e) => {
  const navigate = useNavigate();

  const [excercise, setExcercise] = useState({
    name: "",
    added_to_routine: false,
    targeted_muscles: "",
    body_parts: "",
  });
  const { id } = useParams();

  const handleTextInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setExcercise((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };
  useEffect(() => {
    axios
      .get(`${api}/excercises/${id}`)
      .then((response) => setExcercise(response.data))
      .catch((error) => console.log(error));
  }, [id]);
  console.log(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`${api}/excercises/${id}`, excercise)
      .then((response) => {
        console.log(response);
        navigate(`/excercises/${id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {/* <NewExcercise /> */}

      <form onSubmit={handleSubmit}>
        <h3>Let's Workout</h3>
        <label>Excercise Name: </label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            handleTextInput(e);
          }}
          value={excercise.name}
          required
        />
        <br />

        <label>
          Added to Routine:
          <input name="added_to_routine" type="checkbox" />
        </label>
        <br />

        <label className="text-area">Targeted Muscle(s): </label>
        <textarea
          name="targeted_muscles"
          type="text"
          placeholder="Biceps, Gluteus maximus"
          onChange={(e) => {
            handleTextInput(e);
          }}
          value={excercise.targeted_muscles}
          required
        />
        <br />
        <label>Body Parts: </label>
        <input
          name="body_parts"
          type="text"
          placeholder="Legs, Arms"
          onChange={(e) => {
            handleTextInput(e);
          }}
          value={excercise.body_parts}
          required
        />
        <button>Get to work</button>
      </form>
    </>
  );
};

export default EditExcercise;
