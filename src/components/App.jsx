import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [existingToys, setExistingToys] = useState([]);

  // fetches the data from the server
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then(response => {
      if (!response.ok) {throw new Error("")}
      return response.json()
    })
    .then(data => setExistingToys(data))
    .catch(error => console.log(error.message))
  }, [])

  // Toggles form to add a toy when Add a Toy button is clicked
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // adds new toy to toy array
  function addToy(newToy){
    setExistingToys(previousToys => [...previousToys, newToy])
  }

  // deletes the toys from the toy array
  function donateToy(id) {
    setExistingToys(previousToys => previousToys.filter(toy => toy.id !== id));
  }

  // increases the toy likes when button is clicked
  function handleToyLikes(updatedToy) {
    setExistingToys(previousToys => previousToys.map(toy => toy.id === updatedToy.id ? updatedToy : toy))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer existingToys={existingToys} donateToy={donateToy} handleToyLikes={handleToyLikes}/>
    </>
  );
}

export default App;
