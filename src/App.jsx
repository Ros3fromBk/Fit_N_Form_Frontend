import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Home from "../Pages/Home";
function App() {
  // const [count, setCount] = useState(0)
  // const apiKey = import.meta.env.VITE_API_KEY

  return (
    <div>

      <Home />
      <NavBar>
       
        <Routes>
          
          <Route path="/" element={<p>Main/Home</p>}>

          </Route>
        </Routes>

      </NavBar>
      </div>


    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>

    //   </div>

    // </>
  );
}

export default App;
