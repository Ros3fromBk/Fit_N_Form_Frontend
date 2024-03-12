import axios from "axios";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState , useEffect} from "react";



  const api = import.meta.env.VITE_BASE_URL;
  const EditExcercise = (e)=>{
    const navigate = useNavigate()

  const [excercise, setExcercise] = useState({name: "", added_to_routine: false,
  targeted_muscles: "",
  body_parts: "" })

  // useEffect(() => {
  //   const id= 
  //       axios
  //         .get(`${api}/excercises/${id}`)
  //         .then((response) => setExcercise(response.body.id))
  //         .catch((error) => console.log(error));
  //     }, [id]);
  
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`${api}/excercises/${id}`, excercise)
      .then((response) => {
        navigate(`/excercises/${id}`);
      })
      .catch((error) => console.log(error));
  };

    const handleDelete = () => {
        axios
        .delete(`${api}/excercises/${id}`)
          .then((res) => {
            navigate(`/excercises`)
          })
          .catch((err) => console.log(err));
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
    )
}




  export default EditExcercise 