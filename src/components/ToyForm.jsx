import React, {useState} from "react";

function ToyForm({addToy}) {
  const [formData, setFormData] = useState({
    name: "",
    image: ""
  })

  // Adds toy
  function handleAddToy(event){
    setFormData(previousData => ({
      ...previousData, 
      [event.target.name]: event.target.value
    }))
  }

  // Handles submit
  function handleSubmit(event){
    event.preventDefault();

    // Create a new toy object
    const newToy = {
      ...formData, 
      favorites: 0
    }

    // Create a post request to add toys to the server
    fetch("http://localhost:3001/toys", {
      method: "POST", 
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newToy)
    })
    .then(response => {
      if(!response.ok) {throw new Error("failed to add toy")}
      return response.json()
    })
    .then(data => addToy(data))
    .catch(error => console.log(error.message))
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleAddToy}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleAddToy}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
