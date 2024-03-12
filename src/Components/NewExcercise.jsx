import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

function NewExcercise() {
  const [form, setForm] = useState({
    name: "",
    added_to_routine: false,
    targeted_muscles: "",
    body_parts: "",
  });
  const api = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
const {id} = useParams()
  const handleTextInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post(`${api}/excercises`, form)
      .then((response) => {
        navigate(`/excercises/${id}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Let's Workout</h3>
        <label>Excercise Name: </label>
        <input
          name="name"
          type="text"
          onChange={(e) => {
            handleTextInput(e);
          }}
          value={form.name}
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
          value={form.targeted_muscles}
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
          value={form.body_parts}
          required
        />
        <button>Get to work</button>
      </form>
    </>
  );
}

export default NewExcercise;
