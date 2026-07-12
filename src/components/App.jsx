import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // fetches the data from the server
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => {
      if (!response.ok) {throw new Error("")}
      return response.json()
    })
    .then(data => setToys(data))
    .catch(error => console.log(error.message))
  })

  // Toggles form to add a toy when Add a Toy button is clicked
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys}/>
    </>
  );
}

export default App;
